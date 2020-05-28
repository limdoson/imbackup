/* 
    简单封装一个grpc公共请求方法
    @params: 
        {
            server： server对象
            request: request对象
            method: 方法名
            handleFn : Function,在执行请求前会处理的回调方法，如果没有则默认会通过request的setxxx方法来设置参数
        }
*/

import { rpcLog } from '@itf/config'
import {Message} from 'element-ui'

export function request (options, metadata, args) {
    if (typeof options != 'object') {
        throw new Error('request方法参数options必须为一个对象');
    }
    if (typeof args != 'object') {
        throw new Error('request方法参数args必须为一个对象');
    }

    let server = options.server;
    let request = options.request;
    let method = options.method;
    let handleFn = options.handleFn;
    if (handleFn) {
        handleFn()
    } else {
        for (let key in args) {
            let requestParamsName = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`
            request[requestParamsName](args[key])
        }
    }
    //返回一个promise
    try {
        return new Promise( (resolve, reject) => {
            server[method]( request, metadata, (err, response) => {
                console.log('method', method, 'request', request.toObject(), 'response', response.toObject())
                if (err) {
                    reject(err)
                } else {
                    let {code, msg} = response.toObject().baseinfo;
                    if (code != 200) {
                        Message.error(msg);
                        return;
                    }
                    resolve(response.toObject())
                }
            })
        })
    } catch (error) {
        throw new Error(`${method}执行错误`)
    }
}