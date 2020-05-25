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
		},
		//表情
		emojis:[{"id":"emoticon_emoji_01","tag":"[\u53ef\u7231]","file":"emoji_01.png"},{"id":"emoticon_emoji_0","tag":"[\u5927\u7b11]","file":"emoji_00.png"},{"id":"emoticon_emoji_02","tag":"[\u8272]","file":"emoji_02.png"},{"id":"emoticon_emoji_03","tag":"[\u5618]","file":"emoji_03.png"},{"id":"emoticon_emoji_04","tag":"[\u4eb2]","file":"emoji_04.png"},{"id":"emoticon_emoji_05","tag":"[\u5446]","file":"emoji_05.png"},{"id":"emoticon_emoji_06","tag":"[\u53e3\u6c34]","file":"emoji_06.png"},{"id":"emoticon_emoji_145","tag":"[\u6c57]","file":"emoji_145.png"},{"id":"emoticon_emoji_07","tag":"[\u5472\u7259]","file":"emoji_07.png"},{"id":"emoticon_emoji_08","tag":"[\u9b3c\u8138]","file":"emoji_08.png"},{"id":"emoticon_emoji_09","tag":"[\u5bb3\u7f9e]","file":"emoji_09.png"},{"id":"emoticon_emoji_10","tag":"[\u5077\u7b11]","file":"emoji_10.png"},{"id":"emoticon_emoji_11","tag":"[\u8c03\u76ae]","file":"emoji_11.png"},{"id":"emoticon_emoji_12","tag":"[\u53ef\u601c]","file":"emoji_12.png"},{"id":"emoticon_emoji_13","tag":"[\u6572]","file":"emoji_13.png"},{"id":"emoticon_emoji_14","tag":"[\u60ca\u8bb6]","file":"emoji_14.png"},{"id":"emoticon_emoji_15","tag":"[\u6d41\u611f]","file":"emoji_15.png"},{"id":"emoticon_emoji_16","tag":"[\u59d4\u5c48]","file":"emoji_16.png"},{"id":"emoticon_emoji_17","tag":"[\u6d41\u6cea]","file":"emoji_17.png"},{"id":"emoticon_emoji_18","tag":"[\u568e\u54ed]","file":"emoji_18.png"},{"id":"emoticon_emoji_19","tag":"[\u60ca\u6050]","file":"emoji_19.png"},{"id":"emoticon_emoji_20","tag":"[\u6012]","file":"emoji_20.png"},{"id":"emoticon_emoji_21","tag":"[\u9177]","file":"emoji_21.png"},{"id":"emoticon_emoji_22","tag":"[\u4e0d\u8bf4]","file":"emoji_22.png"},{"id":"emoticon_emoji_23","tag":"[\u9119\u89c6]","file":"emoji_23.png"},{"id":"emoticon_emoji_24","tag":"[\u963f\u5f25\u9640\u4f5b]","file":"emoji_24.png"},{"id":"emoticon_emoji_25","tag":"[\u5978\u7b11]","file":"emoji_25.png"},{"id":"emoticon_emoji_26","tag":"[\u7761\u7740]","file":"emoji_26.png"},{"id":"emoticon_emoji_27","tag":"[\u53e3\u7f69]","file":"emoji_27.png"},{"id":"emoticon_emoji_28","tag":"[\u52aa\u529b]","file":"emoji_28.png"},{"id":"emoticon_emoji_29","tag":"[\u62a0\u9f3b\u5b54]","file":"emoji_29.png"},{"id":"emoticon_emoji_30","tag":"[\u7591\u95ee]","file":"emoji_30.png"},{"id":"emoticon_emoji_31","tag":"[\u6012\u9a82]","file":"emoji_31.png"},{"id":"emoticon_emoji_32","tag":"[\u6655]","file":"emoji_32.png"},{"id":"emoticon_emoji_33","tag":"[\u5455\u5410]","file":"emoji_33.png"},{"id":"emoticon_emoji_160","tag":"[\u62dc\u4e00\u62dc]","file":"emoji_160.png"},{"id":"emoticon_emoji_161","tag":"[\u60ca\u559c]","file":"emoji_161.png"},{"id":"emoticon_emoji_162","tag":"[\u6d41\u6c57]","file":"emoji_162.png"},{"id":"emoticon_emoji_163","tag":"[\u5356\u840c]","file":"emoji_163.png"},{"id":"emoticon_emoji_164","tag":"[\u9ed8\u5951\u7728\u773c]","file":"emoji_164.png"},{"id":"emoticon_emoji_165","tag":"[\u70e7\u9999\u62dc\u4f5b]","file":"emoji_165.png"},{"id":"emoticon_emoji_166","tag":"[\u665a\u5b89]","file":"emoji_166.png"},{"id":"emoticon_emoji_34","tag":"[\u5f3a]","file":"emoji_34.png"},{"id":"emoticon_emoji_35","tag":"[\u5f31]","file":"emoji_35.png"},{"id":"emoticon_emoji_36","tag":"[OK]","file":"emoji_36.png"},{"id":"emoticon_emoji_37","tag":"[\u62f3\u5934]","file":"emoji_37.png"},{"id":"emoticon_emoji_38","tag":"[\u80dc\u5229]","file":"emoji_38.png"},{"id":"emoticon_emoji_39","tag":"[\u9f13\u638c]","file":"emoji_39.png"},{"id":"emoticon_emoji_167","tag":"[\u63e1\u624b]","file":"emoji_167.png"},{"id":"emoticon_emoji_40","tag":"[\u53d1\u6012]","file":"emoji_40.png"},{"id":"emoticon_emoji_41","tag":"[\u9ab7\u9ac5]","file":"emoji_41.png"},{"id":"emoticon_emoji_42","tag":"[\u4fbf\u4fbf]","file":"emoji_42.png"},{"id":"emoticon_emoji_43","tag":"[\u706b]","file":"emoji_43.png"},{"id":"emoticon_emoji_44","tag":"[\u6e9c]","file":"emoji_44.png"},{"id":"emoticon_emoji_45","tag":"[\u7231\u5fc3]","file":"emoji_45.png"},{"id":"emoticon_emoji_46","tag":"[\u5fc3\u788e]","file":"emoji_46.png"},{"id":"emoticon_emoji_47","tag":"[\u949f\u60c5]","file":"emoji_47.png"},{"id":"emoticon_emoji_48","tag":"[\u5507]","file":"emoji_48.png"},{"id":"emoticon_emoji_49","tag":"[\u6212\u6307]","file":"emoji_49.png"},{"id":"emoticon_emoji_50","tag":"[\u94bb\u77f3]","file":"emoji_50.png"},{"id":"emoticon_emoji_51","tag":"[\u592a\u9633]","file":"emoji_51.png"},{"id":"emoticon_emoji_52","tag":"[\u6709\u65f6\u6674]","file":"emoji_52.png"},{"id":"emoticon_emoji_53","tag":"[\u591a\u4e91]","file":"emoji_53.png"},{"id":"emoticon_emoji_54","tag":"[\u96f7]","file":"emoji_54.png"},{"id":"emoticon_emoji_55","tag":"[\u96e8]","file":"emoji_55.png"},{"id":"emoticon_emoji_56","tag":"[\u96ea\u82b1]","file":"emoji_56.png"},{"id":"emoticon_emoji_57","tag":"[\u7231\u4eba]","file":"emoji_57.png"},{"id":"emoticon_emoji_58","tag":"[\u5e3d\u5b50]","file":"emoji_58.png"},{"id":"emoticon_emoji_59","tag":"[\u7687\u51a0]","file":"emoji_59.png"},{"id":"emoticon_emoji_60","tag":"[\u7bee\u7403]","file":"emoji_60.png"},{"id":"emoticon_emoji_61","tag":"[\u8db3\u7403]","file":"emoji_61.png"},{"id":"emoticon_emoji_62","tag":"[\u5792\u7403]","file":"emoji_62.png"},{"id":"emoticon_emoji_63","tag":"[\u7f51\u7403]","file":"emoji_63.png"},{"id":"emoticon_emoji_64","tag":"[\u53f0\u7403]","file":"emoji_64.png"},{"id":"emoticon_emoji_65","tag":"[\u5496\u5561]","file":"emoji_65.png"},{"id":"emoticon_emoji_66","tag":"[\u5564\u9152]","file":"emoji_66.png"},{"id":"emoticon_emoji_67","tag":"[\u5e72\u676f]","file":"emoji_67.png"},{"id":"emoticon_emoji_68","tag":"[\u67e0\u6aac\u6c41]","file":"emoji_68.png"},{"id":"emoticon_emoji_69","tag":"[\u9910\u5177]","file":"emoji_69.png"},{"id":"emoticon_emoji_70","tag":"[\u6c49\u5821]","file":"emoji_70.png"},{"id":"emoticon_emoji_71","tag":"[\u9e21\u817f]","file":"emoji_71.png"},{"id":"emoticon_emoji_72","tag":"[\u9762\u6761]","file":"emoji_72.png"},{"id":"emoticon_emoji_73","tag":"[\u51b0\u6dc7\u6dcb]","file":"emoji_73.png"},{"id":"emoticon_emoji_74","tag":"[\u6c99\u51b0]","file":"emoji_74.png"},{"id":"emoticon_emoji_75","tag":"[\u751f\u65e5\u86cb\u7cd5]","file":"emoji_75.png"},{"id":"emoticon_emoji_76","tag":"[\u86cb\u7cd5]","file":"emoji_76.png"},{"id":"emoticon_emoji_77","tag":"[\u7cd6\u679c]","file":"emoji_77.png"},{"id":"emoticon_emoji_78","tag":"[\u8461\u8404]","file":"emoji_78.png"},{"id":"emoticon_emoji_79","tag":"[\u897f\u74dc]","file":"emoji_79.png"},{"id":"emoticon_emoji_80","tag":"[\u5149\u789f]","file":"emoji_80.png"},{"id":"emoticon_emoji_81","tag":"[\u624b\u673a]","file":"emoji_81.png"},{"id":"emoticon_emoji_82","tag":"[\u7535\u8bdd]","file":"emoji_82.png"},{"id":"emoticon_emoji_83","tag":"[\u7535\u89c6]","file":"emoji_83.png"},{"id":"emoticon_emoji_84","tag":"[\u58f0\u97f3\u5f00\u542f]","file":"emoji_84.png"},{"id":"emoticon_emoji_85","tag":"[\u58f0\u97f3\u5173\u95ed]","file":"emoji_85.png"},{"id":"emoticon_emoji_86","tag":"[\u94c3\u94db]","file":"emoji_86.png"},{"id":"emoticon_emoji_87","tag":"[\u9501\u5934]","file":"emoji_87.png"},{"id":"emoticon_emoji_88","tag":"[\u653e\u5927\u955c]","file":"emoji_88.png"},{"id":"emoticon_emoji_89","tag":"[\u706f\u6ce1]","file":"emoji_89.png"},{"id":"emoticon_emoji_90","tag":"[\u9524\u5934]","file":"emoji_90.png"},{"id":"emoticon_emoji_91","tag":"[\u70df]","file":"emoji_91.png"},{"id":"emoticon_emoji_92","tag":"[\u70b8\u5f39]","file":"emoji_92.png"},{"id":"emoticon_emoji_93","tag":"[\u67aa]","file":"emoji_93.png"},{"id":"emoticon_emoji_94","tag":"[\u5200]","file":"emoji_94.png"},{"id":"emoticon_emoji_95","tag":"[\u836f]","file":"emoji_95.png"},{"id":"emoticon_emoji_96","tag":"[\u6253\u9488]","file":"emoji_96.png"},{"id":"emoticon_emoji_97","tag":"[\u94b1\u888b]","file":"emoji_97.png"},{"id":"emoticon_emoji_98","tag":"[\u949e\u7968]","file":"emoji_98.png"},{"id":"emoticon_emoji_99","tag":"[\u94f6\u884c\u5361]","file":"emoji_99.png"},{"id":"emoticon_emoji_100","tag":"[\u624b\u67c4]","file":"emoji_100.png"},{"id":"emoticon_emoji_101","tag":"[\u9ebb\u5c06]","file":"emoji_101.png"},{"id":"emoticon_emoji_102","tag":"[\u8c03\u8272\u677f]","file":"emoji_102.png"},{"id":"emoticon_emoji_103","tag":"[\u7535\u5f71]","file":"emoji_103.png"},{"id":"emoticon_emoji_104","tag":"[\u9ea6\u514b\u98ce]","file":"emoji_104.png"},{"id":"emoticon_emoji_105","tag":"[\u8033\u673a]","file":"emoji_105.png"},{"id":"emoticon_emoji_106","tag":"[\u97f3\u4e50]","file":"emoji_106.png"},{"id":"emoticon_emoji_107","tag":"[\u5409\u4ed6]","file":"emoji_107.png"},{"id":"emoticon_emoji_108","tag":"[\u706b\u7bad]","file":"emoji_108.png"},{"id":"emoticon_emoji_109","tag":"[\u98de\u673a]","file":"emoji_109.png"},{"id":"emoticon_emoji_110","tag":"[\u706b\u8f66]","file":"emoji_110.png"},{"id":"emoticon_emoji_111","tag":"[\u516c\u4ea4]","file":"emoji_111.png"},{"id":"emoticon_emoji_112","tag":"[\u8f7f\u8f66]","file":"emoji_112.png"},{"id":"emoticon_emoji_113","tag":"[\u51fa\u79df\u8f66]","file":"emoji_113.png"},{"id":"emoticon_emoji_114","tag":"[\u8b66\u8f66]","file":"emoji_114.png"},{"id":"emoticon_emoji_115","tag":"[\u81ea\u884c\u8f66]","file":"emoji_115.png"}],
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
