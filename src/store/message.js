import { GetAppliesList } from "@itf/UserActClient";
import { SessionTypes, EventCode, FriendAddType } from "@itf/common/common_pb"
const state = {
    //通知中心，系统消息
    noticeCenter : {
        systemMsg : [],//系统通知
        unReadCount : 0,//未读消息数量
    },
    //用户在聊天框内输入的内容
    userInput : '123',
}

const mutations = {
    //初始化信息中心->用户登录执行即执行
    initNotice (state, input) {
        state.noticeCenter.systemMsg = input
    },
    //收到系统通知:好友申请和直接添加好友
    addNotice (state, input) {
        /* 
            由于在登录时拉取的applyList的格式为 : 
                {
                    applyId:61845
                    from:"test_b6e47d79131d35c807b8eaf349f"
                    fromAvatar:"https://imgv3.panpianxm.com/uploads/users/avatar/20200521/5a76e731fb4158df57a3ee91c7e491d0.png"
                    fromNick:"柠檬02"
                    msg:"123"
                    status:4
                    type:0
                }
                在线时收到的好友申请格式为：
                {
                    applyId:61845
                    applyStatus:2
                    applyType:0
                    avatar:"https://imgv3.panpianxm.com/uploads/users/avatar/20200521/5a76e731fb4158df57a3ee91c7e491d0.png"
                    from:"test_b6e47d79131d35c807b8eaf349f"
                    msg:"123"
                    nick:"柠檬02"
                    timestamp:1590135552
                }
            两者都需要在消息中心中展示，所以这里前端统一一下数据格式，暂定以拉取的applyList数据格式为准
        */

        //如果消息中心中已经有来自同一申请人的消息，则直接覆盖，不重新生成一条信息.
        let notice = {
            applyId : input.apply.applyId,
            from : input.apply.from,
            fromAvatar : input.apply.avatar,
            fromNick : input.apply.nick,
            status : input.apply.applyStatus,
            type : input.apply.applyType,
            timestamp : input.apply.timestamp
        }
        if (state.noticeCenter.systemMsg.length) {
            let flag = state.noticeCenter.systemMsg.some(item => item.from === input.apply.from)
            if (flag) {
                state.noticeCenter.systemMsg.map(item => {
                    if (item.from === input.apply.from) {
                        item.applyId =  input.apply.applyId,
                        item.from =  input.apply.from,
                        item.fromAvatar =  input.apply.avatar,
                        item.fromNick =  input.apply.nick,
                        item.status =  input.apply.applyStatus,
                        item.type =  input.apply.applyType,
                        item.timestamp =  input.apply.timestamp
                    }
                    return item;
                })
            } else {
                state.noticeCenter.systemMsg.push(notice)
            }

        } else {
            
            state.noticeCenter.systemMsg.push(notice)
        }
    },
    //更新消息中心
    updateNoticeStatus: (state, notice) => {
        state.noticeCenter.systemMsg.forEach((item, index) => {
            if (item.from === notice.from && item.timestamp === notice.timestamp) {
                state.noticeCenter.systemMsg[index].status = notice.status
            }
        })
        // eventBus.$emit('force-update-notice')
    },
    //用户在聊天框中输入内容
    changeUserInput (state, input) {
        state.userInput = input
    }
}

const actions = {
    /*
        拉取未读消息
        包含：
            1、添加好友申请(通过，拒绝)
            2、拉我进去申请(通过，拒绝)
    */
    getSystemNotice ({commit,rootState}) {
        GetAppliesList(rootState.userModule.config)
            .then(res => {
                //请求正常且有数据
                if (res.baseinfo.code == 200 && res.applyList.length > 0) {
                    /* 
                        由于存在同个人多条信息，这里生成一个timestamp作为vue的key使用
                    */
                    commit('initNotice', res.applyList.map(item => {
                        item.timestamp = new Date().getTime();
                        return item;
                    }) )
                }
                
            })
    },
    //更新消息中心
    updateNoticeStatus ({commit}, notice) {
        commit('updateNoticeStatus', notice);
        //如果是通过的，则将好友添加入userModule的contacts中
        if (notice.status === FriendAddType.PASS) {
            console.log('更新消息中心')
        }
    }
}

const getters = {
    /*
        用来显示在消息中心上的角标中的数量
        -仅显示status = 2 (添加好友且未超时)； statsu = 1 (直接添加好友且未超时)
    */
    systemMsgLength: state => {
        if (state.noticeCenter.systemMsg.length) {
            let effectData = state.noticeCenter.systemMsg
                .filter(item => {
                    return item.status == FriendAddType.ADD || item.status == FriendAddType.APPLY
                })
            return effectData.length ? effectData.length : null
        } else {
            return null;
        }
    },
}

export default {
    namespace : true,
    state,
    mutations,
    actions,
    getters
}