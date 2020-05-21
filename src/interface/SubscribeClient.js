import { SubscribeRequest } from '@itf/im/message_pb'
import { SubscribeClient } from '@itf/im/im_grpc_web_pb'

let subscribeClient = new SubscribeClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)

export function GetSubscribe(metadata) {
  	let appSubscribe = new SubscribeRequest();
  	let streamSubscribe = subscribeClient.subscribe(appSubscribe, metadata);
  	return streamSubscribe
}
