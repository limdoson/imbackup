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

export function throttle (fn, wait) {
	var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                fn.apply(context,args);
                timer = null;
            },wait)
        }
    }
}