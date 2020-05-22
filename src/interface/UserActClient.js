import { rpcLog } from '@itf/config'
import { GetRequest, PullSessionListRequest } from '@itf/common/common_pb'
import { AppSearchRequest, GetApplyListRequest } from '@itf/im/message_pb'
import { GetTeamRequest, UpdateUserRequest, SearchRequest, GetAddTypeRequest, CheckAddTypeRequest } from '@itf/common/common_pb'
import { UserActClient } from '@itf/im/im_grpc_web_pb'

let userActClient = new UserActClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)

export const UPDATE_MY_NAME = 1
export const UPDATE_MY_AVATAR = 2
export const UPDATE_MY_BIRTH = 7
export const UPDATE_MY_EMAIL = 4
export const UPDATE_MY_GENDER = 6

export function SearchUser(metadata, accid) {
	let req = new AppSearchRequest()
	req.setValue(accid)
	
	return new Promise((resolve, reject) => {
		userActClient.searchUser(req, metadata, (err, response) => {
			rpcLog('searchUser', req, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
  	})
}

// 获取我的信息
export function GetMyInfo(metadata) {
  	let request = new GetRequest()

	return new Promise((resolve, reject) => {
		userActClient.getSelf(request, metadata, (err, response) => {
		rpcLog('getSelf', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 获取我的好友
export function GetMyFriends(metadata) {
    let request = new GetRequest();

    return new Promise((resolve, reject) => {
        userActClient.getFriendList(request, metadata, (err, response) => {
            rpcLog('getFriendList', request, err, response)

            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function PullSessionList(metadata) {
    let req = new PullSessionListRequest()
    req.setAccid(metadata.accid)

    return new Promise((resolve, reject) => {
        userActClient.pullSessionList(req, metadata, (err, response) => {
            rpcLog('pullSessionList', req, err, response)

            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

// 获取我的群列表
export function GetMyTeamList(metadata) {
  	let request = new GetTeamRequest()
	  request.setAccid(metadata.accid)
	return new Promise((resolve, reject) => {
		userActClient.getTeamList(request, metadata, (err, response) => {
			rpcLog('getTeamList', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 根据 accids 获取用户信息
export function GetUsersByAccids(metadata, accids) {
	let request = new GetRequest()
	request.setGetAccidsList(accids)

	return new Promise((resolve, reject) => {
		userActClient.getMultipleUser(request, metadata, (err, response) => {
			rpcLog('GetMultipleUser', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 我的信息修改
export function UpdateMyInfo(metadata, value) {
	let request = new UpdateUserRequest()

	request.setCommon(value)
	return new Promise((resolve, reject) => {
		userActClient.updateUser(request, metadata, (err, response) => {
		rpcLog('updateMyInfo', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 搜索好友|群聊
export function Search(metadata, type, value, page) {
	let request = new SearchRequest()
	request.setType(type)
	request.setValue(value)
	request.setPage(page)

	return new Promise((resolve, reject) => {
		userActClient.search(request, metadata, (err, response) => {
		rpcLog('search', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 获取加好友配置|问题
export function GetAddTypeSetting(metadata, account) {
	let request = new GetAddTypeRequest()
	request.setTo(account)

	return new Promise((resolve, reject) => {
		userActClient.getAddTypeSetting(request, metadata, (err, response) => {
		rpcLog('GetAddTypeSetting', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 验证加好友配置|验证问题
export function CheckAddTypeSetting(metadata, account, answer) {
	let request = new CheckAddTypeRequest()
	request.setTo(account)
	request.setAnswer(answer)

	return new Promise((resolve, reject) => {
		userActClient.checkAddTypeSetting(request, metadata, (err, response) => {
			rpcLog('CheckAddTypeSetting', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 获取用户资料
export function GetUser(metadata, account) {
	let request = new GetRequest()
	request.setGetAccidsList([account])

	return new Promise((resolve, reject) => {
		userActClient.getUser(request, metadata, (err, response) => {
		rpcLog('GetUser', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

export function GetAppliesList(metadata) {
	let request = new GetApplyListRequest()

	return new Promise((resolve, reject) => {
		userActClient.getAppliesList(request, metadata, (err, response) => {
		rpcLog('GetAppliesList', request, err, response)
			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}