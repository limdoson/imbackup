import { rpcLog } from './config'
import { ServerClient } from '@itf/im/im_grpc_web_pb'
import { HeartBeatRequest } from '@itf/im/message_pb'

let server = new ServerClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)

// 登陆
export function Login(metadata, request) {
	console.log('login', server)
	// console.log('metadata:',metadata)
	return new Promise((resolve, reject) => {
		server.login(request, metadata, (err, response) => {
			rpcLog('login:', request, err, response)
			if (err) {
				reject(err)
			} else {
				resolve(response.toObject())
			}
		})
	})
}

export function HeartBeat(metadata) {
  	let req = new HeartBeatRequest()
  	req.setDeviceToken("token")
  	server.heartBeat(req, metadata, () => {})
}