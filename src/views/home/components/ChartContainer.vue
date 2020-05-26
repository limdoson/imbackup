<template>
    <div class="main-chart-container">
        <header class="s-b">
            <span style='font-size: 16px'>
                <!-- 优先使用备注进行显示 -->
                {{$store.state.userModule.chartItem.alias 
                    ? $store.state.userModule.chartItem.alias 
                    : $store.state.userModule.chartItem.name
                }}
            </span>
            <el-popover
                width='250'
                trigger="click"
                placement='bottom'>
                <ul class="friend-more-menu">
                    <li class='friend-info f-s'>
                        <user-avatar 
                            :img-path='$store.state.userModule.chartItem.avatar' 
                            img-width='50px'
                            style='margin-right: 15px'></user-avatar>
                        <div>
                            <h1>昵称：{{$store.state.userModule.chartItem.name}} 
                                <!-- 男 -->
                                <template v-if='$store.state.userModule.chartItem.gender == Gender.MALE'>
                                    <i class="iconfont male">&#xe63b;</i>
                                </template>
                                <!-- 女 -->
                                <template v-if='$store.state.userModule.chartItem.gender == Gender.FEMALE'>
                                    <i class="iconfont female" >&#xe63a;</i>
                                </template>
                            </h1>
                            <h1>备注：
                                {{
                                    $store.state.userModule.chartItem.alias ? 
                                    $store.state.userModule.chartItem.alias : '无'    
                                }}
                                <i class="iconfont" >&#xe603;</i>
                            </h1>
                        </div>
                    </li>
                    <li class="menu s-b">
                        <span>置顶聊天</span>
                        <el-switch size='small' v-model='$store.state.userModule.chartItem.top' @change='setSessionTop'></el-switch>
                    </li>
                    <li class="menu">
                        <span>清空聊天记录</span>
                    </li>
                    <li class="menu">
                        <span>加入黑名单</span>
                    </li>
                    <li class="menu" style="margin-bottom: 344px;" >
                        <el-popconfirm
                            confirmButtonText='确认'
                            cancelButtonText='取消'
                            icon="el-icon-info"
                            iconColor="red"
                            title="确认删除该好友吗？"
                            @onConfirm='deleteFriend'>
                            <span slot="reference">删除好友</span>
                        </el-popconfirm>
                        
                    </li>
                </ul>
                <span style='color: #999;cursor: pointer' slot='reference'>更多</span>
            </el-popover>
        </header>
        <message-wrapper></message-wrapper>
        <!-- 输入区 -->
        <user-input-area></user-input-area>
    </div>
</template>
<script>
    import messageWrapper from '@c/messageWrapper'
    import userInputArea from '@c/userInputArea'
    import userAvatar from '@c/UserAvatar'

    import {setSessionTop} from '@itf/SessionActClient'
    import {DeleteFriend} from '@itf/FriendActClient'
    import { Gender } from '@itf/common/common_pb'
    // import {mapState} from 'vuex'
    
    export default {
        components :{
            messageWrapper,
            userInputArea,
            userAvatar
        },
        data () {
            return {
                Gender,//性别枚举

            }
        },
        methods : {
            //设置置顶
            /* 
                @TODO  最好是用computed的方式来实现v-model 和 store中数据的双向绑定
            */
            setSessionTop(v) {
                setSessionTop(
                    this.$store.state.userModule.config,//metadata
                    this.$store.state.userModule.chartItem.sessionId,//sessionid
                    this.$store.state.userModule.chartItem.sessionType,//sesionType
                    v,//switchValue
                ).then(res =>{
                    let {code, msg} = res.baseinfo;
                    if (code != 200) {
                        this.$message.error(msg);
                        return
                    }
                    //更新chartItem和contacts中对应联系人的top字段
                    this.$store.commit('userModule/updateSessionTop', v)
                })
            },
            //删除好友
            deleteFriend () {
                //删除好友主逻辑
                DeleteFriend(
                    this.$store.state.userModule.config,//metadata
                    this.$store.state.userModule.chartItem.accid,//faccid
                ).then(res => {
                    let {code, msg} = res.baseinfo;
                    if (code != 200) {
                        this.$message.error(msg);
                        return;
                    }
                    this.$message.success('删除成功')
                    //通知store更新好友列表
                    this.$store.commit('userModule/deleteFriend',)
                    // console.log('delete',res)
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .friend-more-menu {
        li {
            padding: 15px 10px;
            border-bottom: 1px solid #f1f1f1;
            color: #999;
            cursor: pointer;
            &:nth-of-type(1) {
                h1 {
                    margin: 4px 0;
                }
                color: #000;
            }
            
        }
        .friend-info {
            .iconfont {
                font-size: 16px;
                margin-left: 20px;
            }
            .male {
                color: #00d3e8;
            }
            .female {
                color: #f900c3;
            }
        }
    }
</style>