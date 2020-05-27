<template>
    <el-badge :value="null" :is-dot='isDot' >
        <i class="el-icon-chat-dot-round icon"
            title="最近聊天"
            @click="$store.dispatch('userModule/tabChange', 'chats')">
        </i>
    </el-badge>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        computed : {
            //是否显示最近聊天的小红点，根据store中chats的lenth来判断
            isDot () {
                if (this.$store.state.userModule.chats && this.$store.state.userModule.chats.length) {
                    return true;
                } else {
                    return false
                }
            },
            //未读消息的数量
            unReadMsgCount () {
                if (this.$store.state.userModule.chats && this.$store.state.userModule.chats.length) {
                    return this.$store.state.userModule.chats.length;
                } else {
                    return null
                }
            }
        },
    }
</script>