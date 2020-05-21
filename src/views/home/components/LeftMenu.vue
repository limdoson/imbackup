<template>
    <div class="left-menu-component">
        <div>
            <!-- 用户头像 -->
            <user-avatar></user-avatar>
            <!-- 最近聊天按钮 -->
            <chats-icon></chats-icon>
            <!-- 好友列表按钮 -->
            <friends-icon></friends-icon>
            <!-- 群聊列表按钮 -->
            <teams-icon></teams-icon>
        </div>
        <div>
            <!-- 添加好友按钮 -->
            <add-friend-icon></add-friend-icon>
            <!-- 设置 -->
            <setting-icon></setting-icon>
            
        </div>
    </div>
</template>
<script>
    import userAvatar from './UserAvatar'
    import chatsIcon from './ChatsIcon'
    import friendsIcon from './FriendsIcon'
    import teamsIcon from './TeamsIcon'
    import addFriendIcon from './AddFriendIcon'
    import settingIcon from './SettingIcon'
    export default {
        components : {
            userAvatar,
            chatsIcon,
            friendsIcon,
            teamsIcon,
            addFriendIcon,
            settingIcon
        },
        data () {
            return {

            }
        },
        methods : {
            
        }
    }
</script>
<style  lang='less'>
    .left-menu-component {
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .user-avatar {
            margin-bottom: 25px;
        }
    }
    .icon, .iconfont {
        margin-bottom: 25px;
        font-size: 30px;
        cursor: pointer;
    }
</style>