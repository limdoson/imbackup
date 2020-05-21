/*
import { GRPC_HOSTNAME, rpcLog } from '@/rpc/config'
import { UserFriendSetting } from '@/rpc/im/message_pb'
import { OtherUserAliasInfo } from '../rpc/common/common_pb'
import { UserFriendSettingActClient } from '@/rpc/im/im_grpc_web_pb'

let firendSettingClient = new UserFriendSettingActClient(GRPC_HOSTNAME, null, null)

// 设置好友备注
export function SetFriendAlias(metadata, friendAccid, alias) {
  let request = new OtherUserAliasInfo()
  request.setAlias(alias)
  request.setFAccid(friendAccid)

  return new Promise((resolve, reject) => {
    firendSettingClient.setFriendAlias(request, metadata, (err, response) => {
      rpcLog('setFriendAlias', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 设置 | 取消 好友消息提醒
export function MarkFriendInMutelist(metadata, to, value) {
  let request = new UserFriendSetting()
  request.setTo(to)
  request.setValue(value)

  return new Promise((resolve, reject) => {
    firendSettingClient.markInMutelist(request, metadata, (err, response) => {
      rpcLog('markInMutelist', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 设置 | 取消 好友会话置顶
export function MarkFriendSessionTop(metadata, to, value) {
  let request = new UserFriendSetting()
  request.setTo(to)
  request.setValue(value)

  return new Promise((resolve, reject) => {
    firendSettingClient.markSessionTop(request, metadata, (err, response) => {
      rpcLog('markSessionTop', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 设置 | 取消 好友为黑名单
export function MarkFriendInBlacklist(metadata, to, value) {
  let request = new UserFriendSetting()
  request.setTo(to)
  request.setValue(value)

  return new Promise((resolve, reject) => {
    firendSettingClient.markInBlacklist(request, metadata, (err, response) => {
      rpcLog('markInBlacklist', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}
*/
