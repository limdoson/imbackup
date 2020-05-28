<template>
    <div>
        <el-popover
            ref='teamMenu'
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
                    <!-- 默认有个邀请进群的按钮 只有在群信息中invite = 1是，群成员才能邀请他人，默认0 只有管理员能邀请-->
                    <li class="invite-friend" v-if='showInviteBtn || isTeamOwner'> 
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
                    <!-- 群主默认可以修改群公告，其他成员要修改只有在群信息字段中 upcustom = 1时才可以-->
                    <p>群公告  
                        <i class="iconfont edit-icon" 
                            v-if='isTeamOwner || $store.state.userModule.chartItem.base.upcustom'
                            @click='createAnnouncementDialog = true'>&#xe603;</i>
                    </p>
                    <!-- 群公告列表 -->
                    <ul class="announcemen-list scroll-y-list" 
                        v-if='$store.state.userModule.chartItem.base.announcements && $store.state.userModule.chartItem.base.announcements.length'>
                        <li class='f-s' 
                            v-for='item in $store.state.userModule.chartItem.base.announcements' 
                            :key='item.id'>
                            <el-popover
                                trigger="hover"
                                placement="left-start"
                                :content='item.content'
                                width='300'
                                style='display: inline-block; width : 87%;'>
                                <div class="overflow-elip" slot="reference">
                                    <p class="overflow-elip">{{item.content}}</p>
                                </div>
                            </el-popover>
                            <!-- 删除公告按钮 -->
                            <i class="iconfont edit-icon" v-if='isTeamOwner' @click='deleteAnnouncementHandle(item)'>&#xe61a;</i>
                        </li>
                    </ul>
                    <p v-else>-</p>
                </li>
                <li class="s-b" style="cursor: default">
                    <span>我在本群的昵称</span>
                    <span>
                        {{$store.state.userModule.chartItem.pb_private.memberInfo.teamNick }}
                        <i class="iconfont edit-icon" @click='updateSelfTeamNick'>&#xe603;</i>
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
        <!-- 创建群公告dialog -->
        <el-dialog
            title='群公告'
            append-to-body
            :visible.sync='createAnnouncementDialog'
            center
            :show-close='false'
            :close-on-click-modal="false">
            <el-form size='mini' label-width='80px' :model="announcementData" :rules='announcementRules' ref='announcementForm'>
                <!-- <el-form-item label='公告标题' prop='title'>
                    <el-input placeholder="请填写群公告标题" v-model="announcementData.title"></el-input>
                </el-form-item> -->
                <el-form-item label='公告内容' prop='content'>
                    <el-input type='textarea' placeholder="请填写群公告内容" v-model="announcementData.content"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="createAnnouncementCancel" size='mini'>取 消</el-button>
                <el-button type="primary" @click="createAnnouncementConfirm" size='mini'>确 定</el-button>
            </span>
        </el-dialog>
    </div>
    
</template>
<script>
    import teamMemberItem from '@c/teamMemberItem'
    import {
        GetMemberList, 
        Dissolve, 
        LeaveTeam, 
        updateTeamNick, 
        createAnnouncement, 
        pullAnnouncementList,
        deleteAnnouncement } from '@itf/TeamActClient'
    import { _trim } from '@u/store'
    export default {
        components : {
            teamMemberItem
        },
        data () {
            return {
                teamMemberPage :1,//群成员列表的page
                memberList : [],//群成员列表
                createAnnouncementDialog : false,//是否显示创建群公告dialog
                announcementData : {//群公告数据字面量
                    title : 1,//公告标题
                    content : null,//公告内容
                },
                //创建公告校验规则
                announcementRules :{
                    // title : [{required : true, message: '请填写公告标题', trigger: 'blur'}],
                    content : [{required : true, message: '请填写公告内容', trigger: 'blur'}]
                },
            }
        },
        computed : {
            //是否为当前群的拥有者
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
            },
            //是否显示邀请按钮
            showInviteBtn () {
                if (this.$store.state.userModule.chartItem.type == 'team') {
                    //是群主默认可以邀请
                    if (this.$store.state.userModule.userInfo.accid == this.$store.state.userModule.chartItem.base.owner) {
                        return true;
                    } else if (this.$store.state.userModule.chartItem.base.invite) {//如果开启了invite则都可以
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
            //获取群信息
            getTeamInfo () {
                //获取成员列表
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
                //获取群公告内容
                if (!this.$store.state.userModule.chartItem.base.announcements.length) {
                    pullAnnouncementList(
                        this.$store.state.userModule.config,//metadata
                        this.$store.state.userModule.chartItem.base.tid,//tid
                        1,//page
                    ).then(res => {
                        console.log(res)
                        let { code, msg } = res.baseinfo;
                        if ( code!= 200 ) {
                            this.$message.error(msg);
                            return;
                        }
                        if (res.announcementsList.length) {
                            //将公告内容维护入store仓库
                            this.$store.commit('userModule/setTeamANM', res.announcementsList)
                        }
                        
                    })
                }
                
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
            },
            //修改自己在群里的昵称
            updateSelfTeamNick () {
                this.$prompt('修改我的群昵称', '',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) =>{
                    if(!value || !value.length || !_trim(value).length) {
                        this.$message.error('未检测到有效输入');
                        return;
                    }
                    //获取当前用户在群里的openid
                    let from = this.$store.state.userModule.teamMemberList.filter(item => {
                        return item.openId == this.$store.state.userModule.chartItem.pb_private.memberInfo.openId
                    })[0].openId
                    //更新群昵称接口
                    updateTeamNick(
                        this.$store.state.userModule.config,//metadata
                        from,//form
                        from,//to
                        _trim(value),//nick
                        this.$store.state.userModule.chartItem.pb_private.tid,//tid
                    ).then(res =>{
                        let { code, msg } = res.baseinfo;
                        if (code != 200) {
                            this.$message.error(msg);
                            return;
                        }
                        this.$message.success('操作成功');
                        //通知store修改相关信息
                        this.$store.commit('userModule/updateNickByUser', {
                            openId : from,
                            teamNick : _trim(value),
                        })
                    })
                })
                
            },
            //取消创建群公告
            createAnnouncementCancel () {
                this.announcementData.title = null;
                this.announcementData.content = null;
                this.createAnnouncementDialog = false;
            },
            //创建群公告确认
            createAnnouncementConfirm () {
                this.$refs.announcementForm.validate( (valid) => {
                    if (valid) {
                        //创建接口
                        createAnnouncement(
                            this.$store.state.userModule.config,//metadata
                            this.announcementData.title,//title
                            _trim(this.announcementData.content),//content
                            this.$store.state.userModule.chartItem.pb_private.tid,//tid
                        ).then(res => {
                            let { code, msg } = res.baseinfo;
                            if (code != 200) {
                                this.$message.error(msg);
                                return;
                            }
                            this.$message.success('操作成功');

                            //通知store更新
                            // this.$store.commit('userModule/createAnnouncementByUser', res.announcement)
                            //执行取消重置相关参数
                            this.createAnnouncementCancel()
                        })
                    } else {
                        return false;
                    }
                })
            },
            deleteAnnouncementHandle (item) {
                deleteAnnouncement(
                    this.$store.state.userModule.config,
                    {
                        id : item.id,
                        tid : item.teamId
                    }
                ).then(res => {
                    this.$message.success('删除成功')
                    //通知store将公告删除
                    this.$store.commit('userModule/deleteAMNTbyUser', item.id)
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .member-list-wrapper {
        .team-member-list {
            flex-wrap : wrap;
            border-bottom: 1px solid #f1f1f1;
            padding-bottom: 10px;
            li {
                width: 50px;
                margin-right: 10px;
                text-align: center;
                cursor: pointer;
            }
            .invite-friend {
                
                span {
                    display: inline-block;
                    border: 1px dashed #ccc;
                    border-radius: 3px;
                    width: 50px;
                    height: 50px;
                    margin-bottom: 3px;
                    line-height: 50px;
                    color: #ccc;
                    font-size: 25px;
                }
                p {
                    font-size: 12px;
                    color: #999;
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
    //公告列表
    .announcemen-list {
        max-height: 300px;
        overflow-y: auto;
        li {
            background: #f1f1f1;
            margin-bottom: 4px;
            border-radius: 4px;
            padding: 6px 8px;
            h1 {
                margin-bottom: 4px;
                color: #666;
            }
            p {
                font-size: 12px;
            }
            .edit-icon {
                margin-left: 15px;
            }
        }
    }
</style>