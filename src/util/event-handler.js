import { EventCode } from '@itf/common/common_pb'
import { HeartBeat } from "@itf/ServerClient"


//注意，这里的时间中的store是userModule，因为消息订阅是在userModule中定义的

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
               
                commit('addNotice', attach.applyFriend, {root : true})
            }
            
        }
    ],
    //收到别人同意我的加好友申请
    [
        EventCode.EVENTPASSFRIENDAPPLY,
        ({commit}, result) => {
            if (result.msgId != 0) {    
                let attach = JSON.parse(result.attach)
                console.log('attach',attach)
                commit('addFriends', attach.passFriendApply.friend)
               
            }
        }
    ],
    //添加好友申请被拒绝
    [
        EventCode.EVENTREJECTFRIENDAPPLY, // 拒绝好友申请事件
        ({ commit, dispatch, state }, result) => {
            // commit('')
        }
    ],
    //收到别人把我从好友列表中删除
    [
        EventCode.EVENTDELFRIEND,
        ({ commit, dispatch, state }, result) => {
            if (result.msgId != 0) {
                let attach = JSON.parse(result.attach)
                commit('delFriend', attach)
            }
            // alert('别人删除我了')
        }
    ],
    /* 
        群相关
    */
    //收到群添加了新增员
    [
        EventCode.EVENTTEAMADDMEMBER,
        ({commit, dispatch, state}, result) => {
            if (result.msgId == 0) {
                return;
            }
            console.log('群里添加了新的小伙伴', JSON.parse(result.attach))
            commit('teamAddMember', JSON.parse(result.attach))
        }
    ],
    //收到他人邀请我进群
    [
        EventCode.EVENTTEAMINVITE,
        ({commit}, result) => {
            if (result.msgId == 0) {
                return;
            }
            // console.log('收到别人邀请我进群', JSON.parse(result.attach))
            commit('addNotice', JSON.parse(result.attach).teamInvite, {root: true})
        }
    ],
    //创建群
    [
        EventCode.EVENTCREATETEAM, // 新建群
        ({ commit }, result) => {
            if (result.msgId == 0) {
                return;
            }
            commit('createTeam', JSON.parse(result.ext))
        }
    ],
    //收到群解散的消息通知
    [
        EventCode.EVENTTEAMDISSOLVE,//
        ({commit}, result) => {
            if (result.msgId == 0) {
                return;
            }
            let attach = JSON.parse(result.attach)
            console.log('收到群解散的消息通知', attach)
            commit('dissolveTeamDependAccordingToNitce', attach)
        }
    ],
    //收到成员离群的通知
    [
        EventCode.EVENTSOMEONEQUITTEAM,
        ({commit}, result) => {
            if (result.msgId == 0) {
                return;
            }
            let attach = JSON.parse(result.attach)
            commit('receiveMemberLeaveNotice', attach)
        }
    ],
    //收到群成员修改自己的群昵称
    [
        EventCode.EVENTMODIFYSELFTEAMNICK,
        ({commit}, result) => {
            if (result.msgId == 0) {
                return;
            }
            let attach = JSON.parse(result.attach)
            commit('receiveMemberUpdateNick', attach)
        }
    ],
    //收到创建群公告通知
    [
        EventCode.EVENTUPDATEANNOUNCEMENT,
        ({commit}, result) => {
            if (result.msgId == 0) {
                return;
            }
            let attach = JSON.parse(result.attach)
            commit('R_Team_ANM_Update', attach)
        }
    ],
    //收到删除公告通知
    [
        EventCode.EVENTDELETEANNOUNCEMENT,
        ({commit}, result) => {
            if (result.msgId == 0) {
                return;
            }
            let attach = JSON.parse(result.attach)
            commit('receiveDeleteANM', attach)
        }
    ],
])

export function EventHandler (context, response) {
    if(!maps.has(response.event)) {
        return
    }
    let f = maps.get(response.event)
    f(context, response)
}