<template>
    <div class="add-friend">
        <el-tooltip class="item" effect="dark" content="创建" placement="right">
            <el-dropdown placement="top-end" trigger="click">
            <i class="el-icon-circle-plus icon"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="searchMember">添加好友</el-dropdown-item>
                <el-dropdown-item @click.native="createTeam">创建群</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </el-tooltip>
        <!-- 搜索到用户后的展示dialog -->
        <el-dialog 
            :visible.sync="showSearchUser" 
            class="friend-info" 
            append-to-body width='450px'
            :before-close='cancelApply'>
            <header class="s-b">
                <div class="f-s">
                    <user-avatar :img-path='addUserInfo.avatar' img-width='60px' style="margin-right:15px"></user-avatar>
                    {{addUserInfo.name}}
                </div>
                <el-button @click="addUserForm = true"  size="mini">添加好友</el-button>
            </header>
            <div class="friend-other-info">
                <h1 class="center">个人信息</h1>
                <p>
                   <span>账户</span>{{ addUserInfo.name }}
                </p>
                <p>
                    <span>性别</span>{{ addUserInfo.sex }}
                </p>
                <p>
                    <span>地区</span>{{ addUserInfo.prov+addUserInfo.city+addUserInfo.area }}
                </p>
            </div>
            <!-- 填写好友申请信息 -->
            <div class="input-apply-msg" v-if='addUserForm'>
                <div class="s-b">
                    <span>
                        请输入请求好友说明：
                    </span>
                    <el-button type='text' size='mini' @click='cancelApply'>取消</el-button>
                </div>
                <div class="f-s">
                    <el-input 
                        placeholder="请输入好友信息" 
                        size="small" 
                        v-model.trim='applyMsg'
                        ></el-input>
                    <el-button type='primary' size='small' :disabled="disabledSendApply" @click='sendFriendApply'>发 送</el-button>
                </div>
            </div>
        </el-dialog>
        <!-- 创建群dialog -->
        <el-dialog
            :visible.sync="showCreateTeam" 
            width='650px'
            append-to-body 
            :before-close='cancelCreateTeam'
            >
            <el-transfer
                :titles="['联系人', '加入群聊']"
                filterable
                v-model='selectedContacts'
                :filter-method = 'createTeamFilterMedhod'
                filter-placeholder="请输入好友名称"
                :data='$store.state.userModule.contacts'></el-transfer>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelCreateTeam" size='mini'>取 消</el-button>
                <el-button type="primary" @click="createTeamHandle()" size='mini' :disabled="disabledCreateTeam">确 定</el-button>
            </span>
        </el-dialog>
    </div>
    
</template>
<script>
    import { SearchUser } from '@itf/UserActClient'
    import { ApplyFriend } from '@itf/FriendActClient'
    import { CreateTeam } from '@itf/TeamActClient'
    import userAvatar from '@c/UserAvatar'
    export default {
        components : {
            userAvatar
        },
        data () {
            return {
                /* 
                    添加好友相关
                 */
                showSearchUser : false,//是否显示搜索用户结果dialog
                addUserInfo : {
                    icon : null
                },//搜索出结果时的用户信息
                addUserForm : false,//是否显示输入申请好友信息的节点
                applyMsg : '',//申请时填入得信息
                /* 
                    创建群相关
                 */
                showCreateTeam : false,//是否显示创建群dialog
                selectedContacts : [],//已选的联系人
                createTeamFilterMedhod (query, item) {//创建群中的搜索函数
                    return item.label.indexOf(query) > -1
                },
                
            }
        },
        computed : {
            //是否允许点击发送好友申请按钮
            disabledSendApply () {
                return !(this.applyMsg && this.applyMsg.length)
            },
            //是否允许点击创建群中的确认
            disabledCreateTeam () {
                return !this.selectedContacts.length
            }
        },
        methods : {
            //搜索用户
            searchMember () {
                this.$prompt('添加好友', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {


                    //不能搜索自己的账号
                    if (value == this.$store.state.userModule.userInfo.showUserName) {
                        this.$message({message: '不能添加自己为好友哟', type: 'error'})
                        return;
                    }

                    SearchUser(this.$store.state.userModule.config, value).then((r) => {
                        
                        if (r.baseinfo.code == 400) {
                            this.$message({message: r.baseinfo.msg, type: 'error'})
                            return
                        }
                        this.addUserInfo = r.result.common
                        this.addUserInfo.accid = r.result.accid
                        switch(this.addUserInfo.gender) {
                            case 1:
                                this.addUserInfo.sex = "男"
                                break;
                            case 2:
                                this.addUserInfo.sex = "女"
                                break;
                            default:
                                this.addUserInfo.sex = "未知"
                                break;
                        }
                        this.showSearchUser = true;
                    }).catch((r)=>{
                        console.log(r)
                    })
                }).catch(() => {});
            },
            //取消申请好友
            cancelApply () {
                //重置相关数据
                this.addUserInfo = {
                    icon : null
                }
                this.showSearchUser = false;
                this.addUserForm = false;
                this.applyMsg = ''
            },
            //发送好友申请
            sendFriendApply () {
                /* 
                    @params(当前用户的信息，申请添加的好友的accid，提交的信息)
                */
                ApplyFriend(this.$store.state.userModule.config, this.addUserInfo.accid, this.applyMsg).then((result)=>{
                    if (result.baseinfo.code == 400) {
                        this.$message({message: result.baseinfo.msg, type: 'error'})
                    } else {
                        this.$message({message: '发送成功', type: 'success'})
                        this.showSearchUser = false
                    }
                    
                }).catch(()=>{
                    this.$message({message: '好友添加失败！', type: 'error'})
                })
            },
            //点击创建群按钮
            createTeam () {
                if (this.$store.state.userModule.contacts.length == 0) {
                    this.$message({
                        message : '您还没有任何好友，无法创建群聊',
                        type : 'error'
                    })
                    return;
                }
                this.showCreateTeam = true
            },
            //创建群逻辑
            createTeamHandle() {
                CreateTeam(
                    this.$store.state.userModule.config,//发起者的信息
                    this.getTeamName(),//群名
                    this.selectedContacts,//群成员的accid集合
                ).then(res => {
                    let baseinfo = res.baseinfo
                    if (baseinfo.code === "fail") {
                        this.$message({message: baseinfo.msg, type: 'error'})
                    } else {
                        this.$store.commit('userModule/createTeam', res.teaminfo)
                        this.$message({message: '群聊创建成功', type: 'success'})
                        this.showCreateTeam = false;
                        this.selectedContacts = [] // 重置选择框（必须）
                    }
                    console.log(res)
                })
            },
            //取消创建群
            cancelCreateTeam () {
                //重置相关数据
                this.selectedContacts = []
                this.showCreateTeam = false;
            },
            //获取群名称工具函数
            getTeamName(){
                let memberNames = []
                memberNames.push(this.$store.state.userModule.userInfo.name);
                this.selectedContacts.map(item => {
                    if (this.$store.state.userModule.usersMap[item].name) {
                        memberNames.push(this.$store.state.userModule.usersMap[item].name)
                    }
                })
                return memberNames.join('、')
            }
        }
    }
</script>
<style lang="less" scoped>
    
    .friend-info {
        header {
            height: 94px;
            background: url(https://g.alicdn.com/dingding/desktop-assets/1.1.1/img/profile_modal_bg.png) no-repeat;
            background-size: 100% 100%;
            padding: 0 30px;
            color: #fff;
        }
        .friend-other-info {
            padding: 15px 50px;
            h1 {
                margin-bottom: 30px;
                font-size: 18px;
                color: #000;
            }
            p {
                margin: 15px;
                font-size: 14px;
                span {
                    margin-right: 30px;
                }
            }
        }
        .input-apply-msg {
            padding: 15px;
            background: #eee;
            border-top: solid #ccc 1px;
            .el-button {
                margin-left: 15px;
            }
        }

    }
    
</style>