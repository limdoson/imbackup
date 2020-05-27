// 用户 | 群 显示名称
// 2020.5.20 改由vue过滤器处理，暂时保留改方法，不确定后期是否还有用
export function showName(item) {
    // 群聊情况
    if (item.teamNick && item.teamNick.length) {
      	return item.teamNick
    }
  
    // 好友且有备注
    if (item.alias && item.alias.length) {
      	return item.alias
    }
    return item.name
}

/* 
    去除字符串所有空格
*/
export function _trim (str) {
    if (typeof str != 'string') {
        return;
    }
    return str.replace(/\s*/g,"")
}