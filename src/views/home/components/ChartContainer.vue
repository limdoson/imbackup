<template>
    <div class="main-chart-container">
        <header class="s-b">
            <div style='font-size: 16px' class="friend-name">
                <!-- 好友，则显示好友备注或名称 -->
                <template v-if='$store.state.userModule.chartItem.type == `friend`'>
                    <!-- 优先使用备注进行显示 -->
                    {{$store.state.userModule.chartItem.alias 
                        ? $store.state.userModule.chartItem.alias 
                        : $store.state.userModule.chartItem.name
                    }}
                </template>
                <!-- 群显示群名称 -->
                <template v-if='$store.state.userModule.chartItem.type == `team`'>
                    {{
                        $store.state.userModule.chartItem.base.name 
                       
                    }}
                </template>
            </div>
            <!-- 右侧更多菜单，根据类型是好友或是群来区分显示 -->
            <friend-more-menu  v-if='$store.state.userModule.chartItem.type == `friend`'></friend-more-menu>
            <!-- 群菜单 -->
            <team-more-menu v-if='$store.state.userModule.chartItem.type == `team`'></team-more-menu>
        </header>
        <!-- 消息展示容器 -->
        <message-wrapper></message-wrapper>
        <!-- 输入区 如果是黑名单的是不显示输入区，而提示该用户在黑名单列表中-->
        <user-input-area v-if='!isBlack'></user-input-area>
        <p class="tips" v-else>
            该好友在黑名单中，无法相互发送消息
        </p>
    </div>
</template>
<script>
    import messageWrapper from '@c/messageWrapper'
    import userInputArea from '@c/userInputArea'
    
    import FriendMoreMenu from '@c/FriendMoreMenu'
    import TeamMoreMenu from '@c/TeamMoreMenu'
    
    
    
    // import {mapState} from 'vuex'
    
    export default {
        components :{
            messageWrapper,
            userInputArea,
            FriendMoreMenu,//好友的更多菜单
            TeamMoreMenu,//群的更多菜单
        },
        data () {
            return {
                
                
            }
        },
        computed : {
            isBlack () {
                return this.$store.state.userModule.chartItem.isBlack ? true : false
            }
        },
        methods : {
            
            
            
        }
    }
</script>
<style lang="less" scoped>
    .friend-name {
        width: 450px;
        
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .tips {
        height: 230px;
        line-height: 230px;
        color: #ccc;
        font-size: 13px;
        text-align: center;
        text-decoration: underline;
    }
</style>