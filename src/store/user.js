// 用户模块
import router from '../router'
import {EventHandler} from '@u/event-handler'
import { GetSubscribe } from "@itf/SubscribeClient";
import { GetMyInfo, GetMyTeamList, GetUsersByAccids, GetUser, PullSessionList, GetMyFriends } from "@itf/UserActClient";
import { SessionTypes, EventCode, FriendAddType } from "@itf/common/common_pb"
import { showName } from '@u/store'


const state = {
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
	//前端用来显示的联系人列表，根据tab来区分是显示联系人还是群聊
	list : null
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
	},
	//设置用户信息
	setUserInfo (state, input) {
		console.log(input)
		state.userInfo = input;
		// 特殊: "我(自己)的" 信息映射
		state.usersMap[state.userInfo.accid] = {
			accid: state.userInfo.accid,
			name: state.userInfo.name,
			alias: '',
			team_nick: '',
			icon: state.userInfo.avatar,
		}
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
				state.contacts.push(_contact)
			})
		}
	},
	/* 
		tab切换时触发该mut
	*/
	tabChange (state, input) {
		console.log(input)
		if (input.tab == 'chats' ) {
			state.chats = input.data;
			state.list = input.data
		} else if (input.tab == 'contacts') {
			state.list = state.contacts
		}else if (input.tab == 'teams') {
			state.teams = input.data
			state.list = input.data
		}
		
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
		console.log(state.list.filter(item => item.isShow))
	}
}

const actions = {
	/* 
		登录
		-commit 用户数据
		-dispacth 消息订阅
	*/
	userLogin ({commit, dispatch}, input) {
		commit('userLogin', input)
		//消息订阅
		dispatch('apiSubscribe')
		//请求好友列表
		
		//请求用户信息
		dispatch('getUserInfo')
	},
	/* 
		消息订阅
	*/
	apiSubscribe (context) {
		let subscribe = GetSubscribe(context.state.config)
		//接受到消息
		subscribe.on('data', response =>{
			let result = response.toObject()
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
			})
		})
	},
	/* 
		获取我的好友
	*/
	getFriends ({commit, state}) {
		GetMyFriends(state.config).then( res => {
			commit('initContacts', res.friendsinfoList);
			// commit('initUsersMap')
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
    