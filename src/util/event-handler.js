import { EventCode } from '@itf/common/common_pb'
import { HeartBeat } from "@itf/ServerClient"

let maps = new Map([
    [
        EventCode.EVENTLOGIN, // 登陆
        ({dispatch, state}) => {
            dispatch('getUserInfo')
            dispatch('getFriends')
            setInterval(() => {
                HeartBeat(state.config)
            }, process.env.VUE_APP_HEART_BEAT_TIME || 15000)
        }
    ],
    [
        EventCode.EVENTAPPLYFRIEND, // 申请添加好友事件
        ({ dispatch }, result) => {
            let attach = JSON.parse(result.attach)
            dispatch('message/addNotice', attach.applyFriend)
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