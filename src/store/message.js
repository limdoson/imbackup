const state = {
    //通知中心，系统消息
    noticeCenter : {
        systemMsg : [],//系统通知
        unReadCount : 0,//未读消息数量
    }
}

const mutations = {
    //收到系统通知
    addNotice (state, input) {
        console.log(input)
    },
}

const actions = {
    //收到系统通知
    addNotice ({commit}, input) {
        commit('addNotice', input)
    }
}

const getters = {

}

export default {
    namespace : true,
    state,
    mutations,
    actions,
    getters
}