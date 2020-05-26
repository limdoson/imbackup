import { GRPC_HOSTNAME, rpcLog } from '@itf/config'
import { FriendInfo, PassFriendApplyInfo, ApplyFriendRequest, RejectFriendRequest, DelFriendRequest } from '@itf/im/message_pb'
import { FriendActClient } from '@itf/im/im_grpc_web_pb'
import {  FriendRequest, FriendAddType, GetRequest } from '@itf/common/common_pb'


let friendActClient = new FriendActClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)

export function GetApplyList(metadata) {
  	let req = new GetRequest()

	return new Promise((resolve, reject) => {
		friendActClient.getApplyList(req, metadata, (err, response) => {
		rpcLog('GetApplyList:', req, err, response)
			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

export function UpdateFriend(metadata, req) {

	return new Promise((resolve, reject) => {
		friendActClient.updateFriend(req, metadata, (err, response) => {
			rpcLog('updateFriend:', req, err, response)
			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 删除我的好友
export function DeleteFriend(metadata, faccid) {
	
  	let request = new DelFriendRequest()
  	request.setFaccid(faccid)
	request.setDelAlias(true)
  	return new Promise((resolve, reject) => {
    	friendActClient.delete(request, metadata, (err, response) => {
      		rpcLog('deleteFriend:', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
    	})
  	})
}

// 申请加为好友
export function ApplyFriend(metadata, account, applyMsg) {
	let request = new ApplyFriendRequest()
	request.setFaccid(account) 
	request.setMsg(applyMsg)

  	return new Promise((resolve, reject) => {
    	friendActClient.apply(request, metadata, (err, response) => {
     		rpcLog('Apply', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
    	})
  	})
}

// 同意添加好友申请
export function PassFriendApply(metadata, messageItem) {
	let request = new FriendRequest()
	request.setAccid(metadata.accid)
	request.setFaccid(messageItem.from)
	request.setAddType(FriendAddType.PASS)
	request.setApplyId(messageItem.applyId)
  	return new Promise((resolve, reject) => {
		friendActClient.pass(request, metadata, (err, response) => {
			rpcLog('PassFriendApply', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
  	})
}

// 拒绝添加好友申请
export function RejectFriendApply(metadata, message) {
	let request = new RejectFriendRequest();
	request.setFaccid(message.from)
	request.setApplyId(message.applyId)

	return new Promise((resolve, reject) => {
		friendActClient.reject(request, metadata, (err, response) => {
			rpcLog('RejectFriendApply', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

// 直接添加好友 (回答问题正确后调用)
export function AddFriend(metadata, account) {
	let request = new FriendInfo()
	request.setAccount(account)

  	return new Promise((resolve, reject) => {
		friendActClient.addFriend(request, metadata, (err, response) => {
			rpcLog('AddFriend', request, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
  	})
}

export function GetFriend(metadata, accids) {
	let req = new GetRequest()
	req.setGetAccidsList(accids)

  	return new Promise((resolve, reject) => {
		friendActClient.getFriend(req, metadata, (err, response) => {
		rpcLog('getFriend', req, err, response)

			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
  	})
}