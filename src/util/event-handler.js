import { EventCode } from '@itf/common/common_pb'
import { HeartBeat } from "@itf/ServerClient"

let maps = new Map([
    //登录->触发userModule中的获取用户信息action以及获取联系人列表的action
    [
        EventCode.EVENTLOGIN, 
        ({dispatch, state}) => {
            //获取用户信息
            dispatch('getUserInfo')
            //获取好友列表
            dispatch('getFriends')
            //获取聊天加密(旧版)
            dispatch('getOldChatEncryptDefault', null, {root : true})
            //开启心跳包
            setInterval(() => {
                HeartBeat(state.config)
            }, process.env.VUE_APP_HEART_BEAT_TIME || 15000)
        }
    ],
    // 收到申请添加好友事件-> 服务器发送一条未读系统消息->消息在消息中心中->触发store->messageMudule中的addNotice(dispatch)
    [
        EventCode.EVENTAPPLYFRIEND, 
        ({ commit }, result) => {
            /* 
                由于服务器的消息中转，这里web端会收到两次好友申请的data数据
                过滤掉msgId = 0的数据，仅处理非0数据
            */
            if (result.msgId != 0) {
                let attach = JSON.parse(result.attach)
                console.log('attach',attach)
                commit('addNotice', attach.applyFriend, {root : true})
            }
            
        }
    ],
    //添加好友申请被拒绝
    [
        EventCode.EVENTREJECTFRIENDAPPLY, // 拒绝好友申请事件
        ({ commit, dispatch, state }, result) => {

        }
    ]
])

export function EventHandler (context, response) {
    if(!maps.has(response.event)) {
        return
    }
    let f = maps.get(response.event)
    f(context, response)
}