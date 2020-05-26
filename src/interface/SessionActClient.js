import {  rpcLog } from '@itf/config'
import { SessionActClient } from '@itf/im/im_grpc_web_pb'
import { HandleSessionRequest, HandleMsgRequest, SessionTypes, Switch } from '@itf/common/common_pb'
import { NotifyMsgRequest, RecallRequest } from '@itf/im/message_pb'

let sessAct = new SessionActClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)

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

//设置聊天置顶
export function setSessionTop(metadata, sessionId, sessionType, switchValue) {
    let req = new HandleSessionRequest()
    req.setSessionId(sessionId)
    req.setSessionType(sessionType)
    req.setSwitch(Number(switchValue))
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