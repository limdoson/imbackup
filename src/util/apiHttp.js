import axios from 'axios'

// 参考旧版 im 写死此参数为1
const TYPE = 1

// 默认加密配置获取
export function OldChatEncryptDefault() {
    return axios.post(process.env.VUE_APP_API_CONFIG_URL)
}

// 获取指定keyid加密配置
let _cacheAjaxMap = {}

export function OldChatEncryptById(id, accid, callback) {
    let key = id

    if(!_cacheAjaxMap[key]) {
        _cacheAjaxMap[key] = {
            list:[],
            time:new Date().getTime()
        }
    }

    if(_cacheAjaxMap[key].result) {
        if(callback) callback(_cacheAjaxMap[key].result);
    } else {
        _cacheAjaxMap[key].list.push(callback);

    // 同个请求只执行一次 ajax
    if(_cacheAjaxMap[key].list.length == 1) {
        axios.post(process.env.VUE_API_ENCRYPT_URL, {
            id: id,
            type: TYPE,
            uid: accid,
        })
        .then((result) => {
            _cacheAjaxMap[key].result = result;
            while(_cacheAjaxMap[key].list.length){
            let cb = _cacheAjaxMap[key].list.pop();
            if(cb) cb(result);
            }
        }).catch(() => {
            alert(`聊天加密配置(keyid=${id})获取失败!`)
        })
    }
  }
}
