// 用户模块
import router from '../router'
import {EventHandler} from '@u/event-handler'
import { GetSubscribe } from "@itf/SubscribeClient";
import { GetMyInfo, GetMyTeamList, GetUsersByAccids, GetUser, PullSessionList, GetMyFriends } from "@itf/UserActClient";
import { SessionTypes, EventCode, FriendAddType } from "@itf/common/common_pb"
import { showName } from '@u/store'
import {
	SESSION_TYPE_TEAM,
	MESSAGE_STATUS_RECALLED,
	MESSAGE_STATUS_FRIEND_RECALLED
} from "@u/constants"

const state = {
	tab : 'chats',//记录当前左侧菜单激活的选项
	/*
		chats ->最近聊天  contacts ->联系人  teams ->群聊 
	*/
	tabs : ['chats','contacts','teams'], 
	config : {
		appid: 'test',
		accid: null,
		sign: null,
		token: null
	},
	//用户信息
	userInfo : {
		accid: null,
		name: null,
		icon: null,
		gender: 0,
	},
	/*
		用户信息的映射
		{
			accid : {

			}
		}
	*/
	usersMap : {

	},
	//资料缓存
	chatsExt : new Map(),
	//最近聊天列表
	chats : [],
	//全部联系人
	contacts : [],
	//全部群聊
	teams : [],
	//群成员
	teamMemberList : [],
	//前端用来显示的联系人列表，根据tab来区分是显示联系人还是群聊
	list : null,
	//当前聊天的对象(人或群)
	chartItem : null,
}

const mutations = {
	//登录
	userLogin (state, input) {
		state.config.appid = input.appid
		state.config.accid = input.accid
		
		state.config.sign = input.sign
		state.config.token = input.token
		// TODO: 登录信息要保存在浏览器内, 避免刷新重新登录, 仅在登录后清楚认证
		let loginInfo = JSON.stringify(input)
		
		sessionStorage.setItem('loginInfo', loginInfo);
	},
	/* 
		登出
	*/
	userLogout (state) {
		state.config.sign = ''
		state.config.token = ''
		sessionStorage.removeItem('loginInfo');
		//清空相关数据
		state.usersMap = {}
		state.config = {
			appid: 'test',
			accid: null,
			sign: null,
			token: null
		},
		state.contacts = [];
		state.teams = [];
		state.chartItem = null;
		state.charts = []
	},
	//设置用户信息
	setUserInfo (state, input) {
		state.userInfo = input;
		// 特殊: "我(自己)的" 信息映射
		state.usersMap[state.userInfo.accid] = {
			accid: input.accid,
			name: input.name,
			alias: '',
			team_nick: '',
			icon: input.icon,
		}
	},
	/* 
		更新用户信息
	*/
	updateUserInfo (state, input) {
		state.userInfo.name = input.name;
		state.userInfo.gender = input.gender;
		state.userInfo.prov = input.fullCityData[0] || ''
		state.userInfo.city = input.fullCityData[1] || ''
		state.userInfo.area = input.fullCityData[2] || ''
	},
	/* 
		更新添加好友设置
	*/
	updateUserFriendSetting (state, input) {
		state.userInfo.addType = input.addType;
		state.userInfo.addFriendIssue = input.question;
		state.userInfo.addFriendAnswer = input.answer;
	},
	/* 
		初始化联系人
	*/
	initContacts (state, input) {
		state.contacts = [];
		if (input.length > 0) {
			input.map(contact =>{
				let _contact = {
					account: contact.accid,//账户
					accid: contact.accid,//accid
					alias: contact.setting.alias,//昵称
					avatar: contact.common.avatar,//头像
					isBlack: contact.setting.isBlack,//是否在黑名单中
					msgPrompt: contact.msgPrompt,
					gender : contact.common.gender,//性别
					name: showName(contact.common),//名称
					sessionTop : contact.sessionTop,
					sessionType: SessionTypes.SINGLE,
					sessionId: contact.setting.sessionId,
					desc: contact.setting.desc,
					birth: contact.common.birth,//生日
					email: contact.common.email,//邮箱
					area: contact.common.area,//所在地区
					city: contact.common.city,//城市
					prov: contact.common.prov,//省份
					isMute: contact.setting.isMute,//是否静音
					labels: contact.setting.labels,
					ex: contact.setting.ex,
					serverex: contact.setting.serverex,
					//拓展字段
					type: 'friend',
					//搜索用字段
					isShow: true,
					showName: showName(contact.common),
					 // 以下群聊发起使用字段
					key: contact.accid,
					label: showName(contact.common),
					// 消息未读数量
					unread: 0,
				}
				state.contacts.push(_contact);

				//将联系人数据整理后存入userSmap

			})
		}
	},
	/* 
		初始化用户信息映射usersMap
	*/
	initUsersMap(state, input) {
		if (input.length) {
			input.map(item => {
				state.usersMap[item.accid] = {
					accid: item.accid,
					name: item.common.name,
					alias: item.setting.alias,
					teamNick: '',
					icon: item.common.avatar,
				}
			})
		}
	},
	/* 
		tab切换时触发该mut
	*/
	tabChange (state, input) {
		if (input.tab == 'chats' ) {
			state.chats = input.data;
			state.list = input.data
		} else if (input.tab == 'contacts') {
			state.list = state.contacts
		}else if (input.tab == 'teams') {
			state.teams = input.data
			state.list = input.data
		}
		state.tab = input.tab;
		state.chartItem = null
	},
	/* 
		搜索联系人
	*/
	searchContacts (state, text) {
		state.list.forEach( (item, index) =>{
			if(item.showName) {
				state.list[index].isShow = item.showName.indexOf(text) > -1;
			} else {
				state.list[index].isShow = text ? false : true
			}
		})
	},
	/* 
		搜索群
	*/
	searchTeams (state, text) {
		state.list.forEach( (item, index) => {
			if (item.base.name == '') {
				item.isShow = false;
			} else {
				item.isShow = item.base.name.indexOf(text) > -1;
			}
		})
	},
	/* 
		添加好友
	*/
	addFriends (state, contact) {
		
		let newContact = {
			// 原始字段
			account: contact.accid,
			accid: contact.accid,
			alias: contact.alias,
			avatar: contact.avatar,
			isBlack: contact.isBlack,
			//msgPrompt: contact.msgPrompt, // 是否
			name: contact.name,
			sessionTop: contact.sessionTop,
			sessionType: SessionTypes.SINGLE,
			sessionId: contact.sessionId,
			// 扩展字段
			type: 'friend',
			// 搜索用字段
			isShow: true,
			showName: showName(contact),
			// 以下群聊发起使用字段
			key: contact.accid,
			label: showName(contact),
			// 消息未读数量
			unread: 0,
		}
		//向最近聊天和联系人中加入通过的该好友
		// state.chats.unshift(newContact)
		state.contacts.unshift(newContact)
		//新增usersMap映射
		state.userMap[contact.accid] = {
			accid: contact.accid,
			name: contact.name,
			alias: contact.alias,
			team_nick: '',
			icon: contact.avatar,
		}
	},
	/* 
		收到别人将我从好友列表中删除
	*/
	delFriend (state, input) {
		state.contacts = state.contacts.filter( item => {
			return item.accid != input.deleteFriend.from
		})
		
		//如果删除的人有在最近聊天中，也一起删除
		if (state.chats.length) {
			state.chats = state.chart.filter(item => {
				return item.accid != input.deleteFriend.from
			})
		}
		//如果当前正在聊天的是这个人，则清楚聊天对象
		if (state.chartItem) {
			if (state.chartItem.accid == input.deleteFriend.from) {
				state.chartItem = null;
			}
		}
		//如果当前的tab是好友列表，则删除
		if (state.tab == 'contacts') {
			state.list = state.list.filter(item =>{
				return item.accid != input.deleteFriend.from
			})
		}
	},
	/* 
		用户操作删除好友
	*/
	delFriendBuyUser (state) {
		state.contacts = state.contacts.filter( item => {
			return item.accid != state.chartItem.accid
		})
		//尝试在最近聊天中删除该好友
		if (state.chats.length) {
			state.chats = state.chats.filter(item => {
				return item.accid != state.chartItem.accid
			})
		}
		if (state.list.length) {
			if (state.tab == 'contacts') {
				state.list = state.list.filter(item =>{
					return item.accid != state.chartItem.accid
				})
			}
		}
		state.chartItem = null;
	},
	//更新好友的字段值
	updateFriendInfo(state, input) {
		if (state.chartItem) {
			state.chartItem[input.updateKey] = input.value;
			state.contacts.map(item => {
				if (item.accid == state.chartItem.accid) {
					item[input.updateKey] = input.value
				}
			})
		}
		
	},
	/* 
		创建群
	*/
	createTeam (state, input) {
		// 新群更多字段补充
		input.isShow = true
		input.type = SESSION_TYPE_TEAM
		input.accid = input.teamId
		input.showName = input.name
		state.teams.unshift(input)
	},
	//设置当前的聊天对象
	setChartItem (state, input) {
		state.chartItem = input
	},
	//用户发送消息,将消息存入联系人的messages字段中
	sendMsgSuccess(state, message) {
		//好友聊天
		if (message.sessionType == SessionTypes.SINGLE) {
			state.contacts.map(item => {
				if (item.accid === message.to) {
					item.messages = (item.messages === undefined) ? [] : item.messages;
					item.messages.push(message)
				}
			})
		}
	},
	//更新是否置顶
	updateSessionTop (state, value) {
		state.chartItem.top = value;
		state.contacts.map(item => {
			if (item.accid == state.chartItem.accid) {
				item.top = value;
			}
			return item;
		})
	},
	//更新teamMemberList
	setTeamMemberList (state, input) {
		state.teamMemberList = input;
	},
	//群主解散群
	dissolveTeamByUser (state) {
		//从群列表中删除该群
		state.teams = state.teams.filter(item => {
			return item.base.tid != state.chartItem.base.tid
		})
		if (state.tab == 'teams') {
			state.list = state.list.filter(item =>{
				return item.base.tid != state.chartItem.base.tid
			})
		}
		state.chartItem = null;
	},
	//收到解散群的通知
	dissolveTeamDependAccordingToNitce (state, input) {
		state.teams = state.teams.filter(item => {
			return item.base.tid != input.dismissTeam.team.tid
		})
		//如果当前聊天对象是该群，则删除该聊天对象
		if (state.chartItem) {
			if (state.chartItem.base.tid == input.dismissTeam.team.tid) {
				state.chartItem = null;
			}
		}
		//如果当前tab是在群列表，则从list中删除群
		if (state.tab == 'teams' && state.teams.length) {
			state.list = state.list.filter(item => {
				return item.base.tid != input.dismissTeam.team.tid
			})
		}
	},
	//用户主动退群
	leaveTeamByUser (state) {
		state.teams = state.teams.filter(item =>{
			return item.base.tid != state.chartItem.base.tid
		})
		state.list = state.list.filter(item => {
			return item.base.tid != state.chartItem.base.tid
		})
		state.chartItem = null;
	},
	//收到群成员退群的通知
	receiveMemberLeaveNotice (state, input) {
		if (!state.chartItem) {
			return;
		}
		//如果当前的聊天就是该群，则从群成员列表中移除离群用户
		if (state.chartItem.type == 'team' && state.chartItem.pb_private.tid == input.leaveTeam.team.tid) {
			if (state.teamMemberList.length) {
				state.teamMemberList = state.teamMemberList.filter(item => {
					return item.openId != input.leaveTeam.from.open_id
				})
			}
		}
	},
	//群里新增了成员->来自于系统通知
	teamAddMember ( state, input ){
		if (!state.chartItem) {
			return;
		}
		//如果当前的聊天对象就是该群，且有成员列表，则在成员列表中添加入新成员信息
		if (state.chartItem.type == 'team' && state.chartItem.pb_private.tid == input.team.tid && state.teamMemberList.length) {
			state.teamMemberList = [...state.teamMemberList, ...input.members];
		}
	},
}

const actions = {
	/* 
		登录
		-commit 用户数据
		-dispacth 消息订阅
	*/
	userLogin ({commit, dispatch,state, rootState}, input) {
		console.log(rootState)
		commit('userLogin', input)
		//消息订阅
		dispatch('apiSubscribe')
		//请求用户信息
		dispatch('getUserInfo')
		//拉取未读消息 触发messageModule中的getSystemNotice（dispatch）
		dispatch('getSystemNotice', null, {root: true})
	},
	/* 
		消息订阅
	*/
	apiSubscribe (context) {
		let subscribe = GetSubscribe(context.state.config)
		//接受到消息
		subscribe.on('data', response =>{
			let result = response.toObject()
			console.log('ondata', result)
			EventHandler(context, result)
		})
		subscribe.on('status', function(status) {
			// eslint-disable-next-line
			console.log("on status", status);
		});
		//离线
		subscribe.on('end', () => {
			context.commit('userLogout')
			router.replace('/login');
			console.log("on end", "消息接收 end")
		});
	},
	/* 
		获取用户信息
	*/
	getUserInfo ({commit, state}) {
		GetMyInfo(state.config).then(res =>{
			commit('setUserInfo', {
				accid : res.selfinfo.accid,
				icon : res.selfinfo.common.avatar,
				gender : res.selfinfo.common.gender,
				birth : res.selfinfo.common.birth,
				name : showName(res.selfinfo.common),
				email : res.selfinfo.common.email,
				mobile : res.selfinfo.common.mobile,
				prov : res.selfinfo.common.prov,
				city : res.selfinfo.common.city,
				area : res.selfinfo.common.area,
				sign : res.selfinfo.common.sign,
				showUserName : res.selfinfo.showUsername,
				addType : res.selfinfo.common.addType,
				addFriendIssue : res.selfinfo.common.addFriendIssue,
				addFriendAnswer : res.selfinfo.common.addFriendAnswer,
			})
		})
	},
	/* 
		获取我的好友
	*/
	getFriends ({commit, state}) {
		GetMyFriends(state.config).then( res => {
			commit('initContacts', res.friendsinfoList);
			commit('initUsersMap', res.friendsinfoList)
		})
	},
	/* 
		搜索
		根据当前激活的tab的类型，来区分是搜索联系人还是群聊
	*/
	searchList ({commit, dispatch, state, rootState}, input) {
		switch (rootState.tab) {
			case  'chats' :
				dispatch('searchContacts', input)
				break;
			case  'contacts' :
				commit('searchContacts', input)
				break;
			case  'teams' :
				commit('searchTeams', input)
				break;
			default:
				console.log('vuex->userModule->actions->searchList异常');
				break;
		}
	},
	
	/* 
		tab修改时触发
	*/
	tabChange ({commit,state}, input) {
		console.log(state, input)
		switch (input) {
			case 'chats':
				//如果是最近的消息，则请求一次最新的消息
				PullSessionList(state.config).then(res => {
					commit('tabChange', {
						tab : input,
						data : res.sessioninfoList
					})
				})
				break;
			case 'contacts':
				commit('tabChange', {
					tab : input
				})
				break;
			case 'teams':
				//拉取最新去聊信息
				GetMyTeamList(state.config).then(res => {
					commit('tabChange', {
						tab : input,
						data : res.teaminfoList.map(item => {
							item.isShow = true; //给一个初始的isShow = true 用在搜索中过滤
							item.type ='team'
							return item
						})
					})
				})
				break;
			default:
				break;
		}
	}
}

const getters = {
	sign : state => {
		return state.config.sign
	},
}
export default  {
    namespaced: true,
    state,
    mutations,
    actions,
	getters
}
    