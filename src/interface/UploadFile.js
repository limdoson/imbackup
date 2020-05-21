import { GRPC_HOSTNAME } from '@/rpc/config'
import { Chunk, UploadFileType } from '@/rpc/im/common_pb'
import { Upload } from '@/rpc/im/im_grpc_web_pb'


let client = new Upload(GRPC_HOSTNAME, null, null)

export function UploadFile(metadata, file, fileBigType) {
    let reader = new FileReader()
    reader.readAsArrayBuffer(file)
    let chunk = new Chunk()
    switch (fileBigType) {
        case 'image':
            chunk.setFileType(UploadFileType.TYPEIMG)
            break;
        case 'audio':
            chunk.setFileType(UploadFileType.TYPEAUDIO)
            break;
        case 'video':
            chunk.setFileType(UploadFileType.TYPEVIDEO)
            break;
        default:
            chunk.setFileType(UploadFileType.TYPEFILE)
            break;
    }
    // 512K
    let singleSize = 512 * 1024;
    let index = 0
    reader.onload = evt => {
        let content;

        while(index < evt.loaded) {
            content = evt.target.result.slice(index, singleSize)
            chunk.setContent(content)

            client.upload(chunk)

            if(content.length < singleSize) {
                break;
            }
            index += singleSize
        }
    }

}