import { GRPC_HOSTNAME, rpcLog } from '@/rpc/config'
import { HandleTeamInviteRequest, RecallMsgInfo, HandleMsgRequest } from '@/rpc/common/common_pb'
import { MsgActClient } from '@/rpc/im/im_grpc_web_pb'

let msgActClient = new MsgActClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)

// 撤回消息
export function RecallMsg(metadata, from, to, uuid, msgType) {
  let request = new RecallMsgInfo()
  request.setFrom(from)
  request.setTo(to)
  request.setUuid(uuid)
  request.setMsgType(msgType)

  return new Promise((resolve, reject) => {
    msgActClient.recallMsg(request, metadata, (err, response) => {
      rpcLog('RecallMsg', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

export function Read(metadata, input) {
  let req = new HandleMsgRequest()
  req.setMsgId(input)

  return new Promise((resolve, reject) => {
    msgActClient.Read(req, metadata, (err, response) => {
      rpcLog('Read', req, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}