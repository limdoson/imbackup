import Vue from 'vue'
import Vuex from 'vuex'

//引入其他store模块
import userModule from './user' //用户相关模块
import messageModule from './message' //消息相关模块

import { OldChatEncryptDefault } from "@u/apiHttp";

Vue.use(Vuex)
/* 
	vuex根
	-仅处理系统相关的一些数据
*/

export default new Vuex.Store({
  	state: {
		tab : 'chats',//记录当前左侧菜单激活的选项
		/*
			chats ->最近聊天  contacts ->联系人  teams ->群聊 
		*/
		tabs : ['chats','contacts','teams'], 
		//聊天加密信息
		encrypt : {
			default :{}
		}
  	},
  	mutations: {
		//tab激活
		tabClick (state, input) {
			state.tab = input;
		},
		//设置旧版的聊天加密信息
		setChatEncrypt (state, encrypt) {
			if (encrypt.isDefault) {
				state.encrypt.default = encrypt
			} else {
				let keyid = encrypt.im_crypt_keyid
				state.encrypt[keyid] = encrypt
			}
		}
  	},
  	actions: {
		leftMenuTab ({commit,dispatch}, input) {
			commit('tabClick', input)
			dispatch('userModule/tabChange', input)
			if ( input == 'chats') {
				//@toto 处理一部分逻辑...
			}
		},
		//获取旧版的聊天加密信息
		getOldChatEncryptDefault ({commit}, input) {
			OldChatEncryptDefault()
			.then((response) => {
				let encrypt = response.data.result.chat_encryption
				encrypt['isDefault'] = true
				commit('setChatEncrypt', encrypt)
			})
		}
  	},
  	modules: {
		userModule,
		messageModule
  	}
})
