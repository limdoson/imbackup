import Vue from 'vue'
import Vuex from 'vuex'

//引入其他store模块
import userModule from './user' //用户相关模块
import messageModule from './message' //消息相关模块


Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
		tab : 'chats',//记录当前左侧菜单激活的选项
		/*
			chats ->最近聊天  contacts ->联系人  teams ->群聊 
		*/
		tabs : ['chats','contacts','teams'], 
  	},
  	mutations: {
		//tab激活
		tabClick (state, input) {
			state.tab = input;
		}
		
  	},
  	actions: {
		leftMenuTab ({commit,dispatch}, input) {
			commit('tabClick', input)
			dispatch('userModule/tabChange', input)
			if ( input == 'chats') {
				//@toto 处理一部分逻辑...
			}
			
		}
  	},
  	modules: {
		userModule,
		messageModule
  	}
})
