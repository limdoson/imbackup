import { rpcLog } from '@itf/config'
import { MsgActClient } from '@itf/im/im_grpc_web_pb'

let msgAct = new MsgActClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)

// 消息发送
export function SendMessage(metadata, request) {
  	return new Promise((resolve, reject) => {
		msgAct.sendMsg(request, metadata, (err, response) => {
			rpcLog('sendMsg:', request, err, response)
			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
  	})
}
