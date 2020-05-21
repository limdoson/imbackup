const filters =  {
    // 用户 | 群 显示名称
    showName (item) {
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
}
export default filters