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
            <el-popover
                ref='friendMenu'
                v-if='$store.state.userModule.chartItem.type == `friend`'
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
                                <!-- 修改备注按钮 -->
                                <i class="iconfont" @click='changeAlias'>&#xe603;</i>
                            </h1>
                        </div>
                    </li>
                    <li class="menu s-b" >
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
            <!-- 群菜单 -->
            <el-popover
                ref='teamMenu'
                v-if='$store.state.userModule.chartItem.type == `team`'
                width='350'
                trigger="click"
                placement='bottom'
                @show='getTeamInfo'>
                <div class="member-list-wrapper">
                    <el-form size='small'>
                        <el-form-item>
                            <el-input placeholder="群成员搜索"></el-input>
                        </el-form-item>
                    </el-form>
                    <ul class="team-member-list f-s">
                        <!-- 默认有个邀请进群的按钮 -->
                        <li class="invite-friend">
                            <span>+</span>
                            <p>
                                添加
                            </p>
                        </li>
                        <li v-for='item in $store.state.userModule.teamMemberList' :key='item.openId'>
                            <team-member-item :item='item'></team-member-item>
                        </li>
                    </ul>
                </div>
                
                <ul class="team-menu">
                    <li class="s-b">
                        <span>群名称</span>
                        <span>{{$store.state.userModule.chartItem.base.name}}</span>
                    </li>
                    <li style="cursor: default">
                        <p>群公告  <i class="iconfont edit-icon" v-if='isTeamOwner'>&#xe603;</i></p>
                        <p>
                            {{
                                $store.state.userModule.chartItem.base.announcements
                                ? $store.state.userModule.chartItem.base.announcements
                                : '-'
                            }}

                        </p>
                    </li>
                    <li class="s-b" style="cursor: default">
                        <span>我在本群的昵称</span>
                        <span>
                            {{$store.state.userModule.chartItem.pb_private.memberInfo.teamNick }}
                        </span>
                    </li>
                    <li class="s-b" style="cursor: default">
                        <span>置顶聊天</span>
                        <el-switch size='mini'></el-switch>
                    </li>
                    <li>
                        清空聊天记录
                    </li>
                    <!-- 不是自己的群，则可操作退出群聊 -->
                    <li 
                        class="center"
                        style="cursor: default"
                        v-if='!isTeamOwner'>
                        <el-button type='danger' size='small' @click='leaveTeam'>退出群聊</el-button>
                    </li>
                    <!-- 是自己的群，则可以操作解散 -->
                    <li class="center" v-else style="cursor: default">
                        
                        <el-button type='danger' size='small' @click='dissolveTeam'>解散该群</el-button>
                    </li>
                </ul>
                <span style='color: #999;cursor: pointer' slot='reference'>更多</span>
            </el-popover>
        </header>
        <!-- 消息展示容器 -->
        <message-wrapper></message-wrapper>
        <!-- 输入区 -->
        <user-input-area></user-input-area>
    </div>
</template>
<script>
    import messageWrapper from '@c/messageWrapper'
    import userInputArea from '@c/userInputArea'
    import userAvatar from '@c/UserAvatar'
    import teamMemberItem from '@c/teamMemberItem'

    import {setSessionTop} from '@itf/SessionActClient'
    import {DeleteFriend, UpdateFriend} from '@itf/FriendActClient'
    import { Gender } from '@itf/common/common_pb'
    import {GetMemberList, Dissolve, LeaveTeam} from '@itf/TeamActClient'
    import {_trim} from '@u/store'
    // import {mapState} from 'vuex'
    
    export default {
        components :{
            messageWrapper,
            userInputArea,
            userAvatar,
            teamMemberItem
        },
        data () {
            return {
                Gender,//性别枚举
                teamMemberPage :1,//群成员列表的page
                memberList : [],//群成员列表
            }
        },
        computed : {
            isTeamOwner () {
                if (this.$store.state.userModule.chartItem.type == 'team') {
                    if (this.$store.state.userModule.userInfo.accid == this.$store.state.userModule.chartItem.base.owner) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
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
            //获取群信息
            getTeamInfo () {
                GetMemberList(
                    this.$store.state.userModule.config,//metadata
                    this.$store.state.userModule.userInfo.accid,//accid
                    this.$store.state.userModule.chartItem.base.tid,//tid
                    this.teamMemberPage,//page
                ).then(res =>{
                    let { code, msg } = res.baseinfo;
                    if ( code!= 200 ) {
                        this.$message.error(msg);
                        return;
                    }
                    this.$store.commit('userModule/setTeamMemberList',  res.memberinfoList)
                })
            },
            //解散群聊
            dissolveTeam (){
                this.$confirm('确认解散该群吗？', '提示')
                .then( result => {
                    if (result == 'confirm') {
                        //执行解散群的业务逻辑
                        Dissolve(
                            this.$store.state.userModule.config,
                            this.$store.state.userModule.chartItem.base.tid
                        ).then(res =>{
                            let {code, msg} = res.baseinfo;
                            if (code != 200) {
                                this.$message.error(msg)
                            }
                            this.$message.success('群解散成功')
                            //通知store处理相关数据
                            this.$store.commit('userModule/dissolveTeamByUser')
                        })
                    }
                })
            },
            //主动退群
            leaveTeam () {
                this.$confirm('确认退出该群聊吗？', '提示')
                .then( result => {
                    if (result == 'confirm') {
                        //执行解散群的业务逻辑
                        LeaveTeam(
                            this.$store.state.userModule.config,
                            this.$store.state.userModule.chartItem.base.tid
                        ).then(res => {
                            let {code, msg} = res.baseinfo;
                            if (code != 200) {
                                this.$message.error(msg)
                            }
                            this.$message.success('退群成功')
                            //通知store处理相关数据
                            this.$store.commit('userModule/leaveTeamByUser')
                        })
                    }
                })
            }
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
    .member-list-wrapper {
        .team-member-list {
            flex-wrap : wrap;
            border-bottom: 1px solid #f1f1f1;
            padding-bottom: 10px;
            li {
                width: 40px;
                margin-right: 10px;
                text-align: center;
                cursor: pointer;
            }
            .invite-friend {
                
                span {
                    display: inline-block;
                    border: 1px dashed #ccc;
                    border-radius: 3px;
                    width: 40px;
                    height: 40px;
                    margin-bottom: 3px;
                    line-height: 40px;
                    color: #ccc;
                }
                p {
                    font-size: 12px;
                }
            }
        }
    }
    .team-menu {
        li {
            padding: 15px 10px;
            border-bottom: 1px solid #f1f1f1;
            color: #999;
            cursor: pointer;
            &:last-child{
                border: none;
            }
        }
    }
</style>