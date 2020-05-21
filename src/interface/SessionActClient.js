import { GRPC_HOSTNAME, rpcLog } from '@/rpc/config'
import { SessionActClient } from '@/rpc/im/im_grpc_web_pb'
import { HandleSessionRequest, HandleMsgRequest } from '@/rpc/common/common_pb'
import { NotifyMsgRequest, RecallRequest } from '@/rpc/im/message_pb'

let sessAct = new SessionActClient(GRPC_HOSTNAME, null, null)

export function Notify(metadata, msgId, sessionId) {
    let req = new NotifyMsgRequest()
    req.setMsgId(msgId)
    req.setSessionId(sessionId)

    return new Promise((resolve, reject) => {
        sessAct.notify(req, metadata, (err, response) => {
            rpcLog('session notify', req, err, response)

            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function setSessionTop(metadata, {sessionId, sessionType, switchs}) {
    let req = new HandleSessionRequest()
    req.setSessionId(sessionId)
    req.setSessionType(sessionType)
    req.setSwitch(switchs)

    return new Promise((resolve, reject) => {
        sessAct.top(req, metadata, (err, response) => {
            rpcLog('set session top:', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function recall(metadata, msgId, sessionId) {
    let req = new RecallRequest()
    req.setMsgId(msgId)
    req.setSessionId(sessionId)
    req.setIsIgnoreTime(false)

    return new Promise((resolve, reject) => {
        sessAct.recall(req, metadata, (err, response) => {
            rpcLog('recall:', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function sessionRead(metadata, {uuid, msgId, sessionId, sessionType}) {
    let req = new HandleMsgRequest();
    req.setUuid(uuid)
    req.setMsgId(msgId)
    req.setSessionId(sessionId)
    req.setSessionType(sessionType)

    return new Promise((resolve, reject) => {
        sessAct.read(req, metadata, (err, response) => {
            rpcLog('read:', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}