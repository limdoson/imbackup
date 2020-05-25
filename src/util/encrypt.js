// 聊天加密 解密. 案例: key RnFKR2tKanZlSkhCQXhGaA== 输入 1 输出 aRNN1Ga/jMP+ZYiLwP5ZIA==

import CryptoJS from 'crypto-js'

const IV = '0000000000000000'

// 加密. 注意: str 必须是字符串类型
export function Encrypt(str, key) {
    let parseKey = CryptoJS.enc.Base64.parse(key)
    let parseIV = CryptoJS.enc.Utf8.parse(IV)

    let result = CryptoJS.AES.encrypt(str, parseKey, {
        iv: parseIV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })


     return result.toString()
}

// 解密
export function Decrypt(str, key) {
    let parseStr = CryptoJS.enc.Base64.parse(str)
    let parseKey = CryptoJS.enc.Base64.parse(key)
    let parseIV = CryptoJS.enc.Utf8.parse(IV)
    let result = CryptoJS.AES.decrypt({ ciphertext: parseStr }, parseKey, {
        iv: parseIV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    })

    return result.toString(CryptoJS.enc.Utf8)
}
