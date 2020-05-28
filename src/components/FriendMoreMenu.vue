<template>
    <el-popover
        ref='friendMenu'
        width='250'
        trigger="click"
        placement='bottom'>
        <ul class="friend-more-menu">
            <li class='friend-info f-s'>
                <user-avatar 
                    :img-path='$store.state.userModule.chartItem.avatar' 
                    img-width='50px'
                    style='margin-right: 15px'></user-avatar>
                <div style="flex: 1">
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
                    <h1 class='friend-alias'>备注：
                        {{
                            $store.state.userModule.chartItem.alias ? 
                            $store.state.userModule.chartItem.alias : '无'    
                        }}
                        <!-- 修改备注按钮 -->
                        <i class="iconfont" @click='changeAlias'>&#xe603;</i>
                    </h1>
                </div>
            </li>
            <li class="menu s-b" v-if='!isBlack'>
                <span>置顶聊天</span>
                <el-switch size='small' v-model='$store.state.userModule.chartItem.top' @change='setSessionTop'></el-switch>
            </li>
            <li class="menu" @click='$message.warning(`完善中`)'>
                <span>清空聊天记录</span>
            </li>
            <li class="menu" >
                <el-popconfirm
                    confirmButtonText='确认'
                    cancelButtonText='取消'
                    icon="el-icon-info"
                    iconColor="red"
                    :title="title"
                    @onConfirm='markBlack'>
                    <span slot="reference">{{blackMenuName}}</span>
                </el-popconfirm>
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
</template>
<script>
    import { Gender, Values } from '@itf/common/common_pb'
    import {setSessionTop} from '@itf/SessionActClient'
    import {DeleteFriend, UpdateFriend, MarkBlack} from '@itf/FriendActClient'
    import {_trim} from '@u/store'
    import userAvatar from '@c/UserAvatar'
    export default {
        components :{
            userAvatar
        },
        data () {
            return {
                Gender,//性别枚举
                Values,//values枚举
            }
        },
        computed : {
            //是否是黑名单成员
            isBlack () {
                return this.$store.state.userModule.chartItem.isBlack
            },
            //点击加入黑名单的提示文字，根据当前是否已在黑名单中做不同的处理
            title () {
                return this.$store.state.userModule.chartItem.isBlack ? '确认将好友从黑名单中移除吗？' : '确认将好友加入黑名单吗？'
            },
            //黑名单菜单名称，根据当前是否已在黑名单中做不同的处理
            blackMenuName () {
                return this.$store.state.userModule.chartItem.isBlack ? '从黑名单移除' : '加入黑名单'
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
                    //关闭popover
                    this.$refs.friendMenu.doClose();
                    //通知store更新好友列表
                    this.$store.commit('userModule/delFriendBuyUser')
                    
                })
            },
            //修改好友备注
            changeAlias () {
                this.$prompt('修改好友备注', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then( ({value}) => {
                    console.log(value.length)
                    if (!value.length || !_trim(value).length) {
                        this.$message.error('为检测到有效的备注信息，请勿输入空格文字');
                        return;
                    }
                    if (_trim(value).length > process.env.VUE_APP_FRIEND_ALIAS_LENGTH_LIMIT) {
                        this.$message.error(`好友备注长度不得大于${process.env.VUE_APP_FRIEND_ALIAS_LENGTH_LIMIT}个字符`);
                        return;
                    }
                    // //执行接口
                    UpdateFriend(
                        this.$store.state.userModule.config,//metadata
                        this.$store.state.userModule.userInfo.accid,//form
                        this.$store.state.userModule.chartItem.accid,//to
                        value//alias
                    ).then(res =>{
                        let {code,msg} = res.baseinfo;
                        if (code != 200) {
                            this.$message.error(msg);
                            return;
                        }

                        this.$message.success('备注设置成功')
                        //通知store更新好友信息
                        this.$store.commit('userModule/updateFriendInfo', {
                            updateKey : 'alias',
                            value : _trim(value)
                        })

                    })
                })
            },
            //加入黑名单
            markBlack () {
                MarkBlack(
                    this.$store.state.userModule.config,//metadata
                    this.$store.state.userModule.chartItem.accid,//to
                    Number(!this.$store.state.userModule.chartItem.isBlack),//移除
                ).then(res =>{
                    let { code, msg } = res.baseinfo;
                    if (code != 200) {
                        this.$message.error(msg);
                        return;
                    }
                    this.$message.success('操作成功');
                    //通知store更新好友的相关字段
                    this.$store.commit('userModule/updateFriendInfo', {
                        updateKey : 'isBlack',
                        value : Number(!this.$store.state.userModule.chartItem.isBlack)
                    })
                    //通知store处理相关业务
                    this.$store.commit('userModule/friendBlackHandle', Number(!this.$store.state.userModule.chartItem.isBlack))
                })
            },
        }
    }
</script>
<style lang="less" scoped>
    .friend-alias {
        color: #666;
        font-size: 12px;
        flex: 1;
    }
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