<template>
    <el-popover>
        <div slot='reference' class="member-info">
            <user-avatar img-width='40px' :img-path='item.avatar'></user-avatar>
            <p class="center member-name">{{item.nick || item.name}}</p>
        </div>
    </el-popover>
</template>
<script>
    import userAvatar from './UserAvatar'
    export default {
        components :{
            userAvatar
        },
        props : {
            item : {
                type : Object
            }
        }
    }
</script>
<style lang="less" scoped>
    .member-info {
        .center {
            font-size: 12px;
        }
    }
</style>