import { Chunk, UploadFileType } from '@itf/common/common_pb'
import { UploadClient } from '@itf/im/im_grpc_web_pb'
import {  rpcLog } from '@itf/config'

let client = new UploadClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)
console.log('client',client)
export function UploadFile(metadata, file, fileBigType) {
    let chunk = new Chunk();
    let reader = new FileReader();
    let singleSize = 521* 1024;
    let index = 0

    chunk.setFileType(UploadFileType.TYPEIMG)
    reader.readAsArrayBuffer(file.file);
    reader.onload  = res => {
        let content;
        while(index < res.loaded) {
            content = res.target.result.slice(index, singleSize)
            chunk.setContent(content)
            client.client(chunk)

            if(content.length < singleSize) {
                break;
            }
            index += singleSize
        }

    }
    // let size = file.file.size;
    // let chunk =  new Chunk()
    // if (size / 1024 < 512) {
    //     return new Promise( (resolve, reject) => {
    //         chunk.setFileType(UploadFileType.TYPEIMG)
    //         client.upload(chunk, null, (err, response) =>{
    //             rpcLog('UploadFile:', chunk, err, response)
    //             if (err) {
    //                 reject(err)
    //             } else {
    //                 response(response)
    //             }
    //         })
    //     })
    // }
    // let reader = new FileReader()
    // reader.readAsArrayBuffer(file)
    // let chunk = new Chunk()
    // switch (fileBigType) {
    //     case 'image':
    //         chunk.setFileType(UploadFileType.TYPEIMG)
    //         break;
    //     case 'audio':
    //         chunk.setFileType(UploadFileType.TYPEAUDIO)
    //         break;
    //     case 'video':
    //         chunk.setFileType(UploadFileType.TYPEVIDEO)
    //         break;
    //     default:
    //         chunk.setFileType(UploadFileType.TYPEFILE)
    //         break;
    // }
    // // 512K
    // let singleSize = 512 * 1024;
    // let index = 0
    // reader.onload = evt => {
    //     let content;

    //     while(index < evt.loaded) {
    //         content = evt.target.result.slice(index, singleSize)
    //         chunk.setContent(content)

    //         client.upload(chunk)

    //         if(content.length < singleSize) {
    //             break;
    //         }
    //         index += singleSize
    //     }
    // }

}