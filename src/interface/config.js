// import { GRPC_LOG_PRINT, GRPC_HOSTNAME } from "@/config"

// export {
//   GRPC_HOSTNAME,
// }

/**
 * @param {方法名} method
 * @param {*} err
 * @param {*} response
 */
export function rpcLog(method, request, err, response) {
  if (process.env.VUE_APP_GRPC_LOG_PRINT) {
    let result = (response === null) ? response : response.toObject()

    // eslint-disable-next-line
    console.log(`${method}:`, `request:`, request.toObject(), `err:`, err, 'result:', result)
  }
}
