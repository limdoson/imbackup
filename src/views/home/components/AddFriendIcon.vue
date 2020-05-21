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
        <el-dialog :visible.sync="showSearchUser" class="friend-info" append-to-body width='450px'>
            <header class="s-b">
                <div class="f-s">
                    <user-avatar :img-path='addUserInfo.icon' img-width='60px' style="margin-right:15px"></user-avatar>
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
                    <el-button type='primary' size='small' :disabled="disabledInputMsg" @click='sendFriendApply'>发 送</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
    
</template>
<script>
    import { SearchUser } from '@itf/UserActClient'
    import { ApplyFriend } from '@itf/FriendActClient'
    import userAvatar from '@c/UserAvatar'
    export default {
        components : {
            userAvatar
        },
        data () {
            return {
                showSearchUser : false,//是否显示搜索用户结果dialog
                addUserInfo : {
                    icon : null
                },//搜索出结果时的用户信息
                addUserForm : false,//是否显示输入申请好友信息的节点
                applyMsg : '',//申请时填入得信息
            }
        },
        computed : {
            disabledInputMsg () {
                return !(this.applyMsg && this.applyMsg.length)
                // if () {
                //     return false;
                // } else {
                //     return true;
                // }
            }
        },
        methods : {
            //搜索用户
            searchMember () {
                this.$prompt('添加好友', '', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
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
                        console.log(this.addUserInfo)
                    }).catch((r)=>{
                        console.log(r)
                    })
                }).catch(() => {});
            },
            //取消申请好友
            cancelApply () {
                this.addUserInfo = {
                    icon : null
                }
                this.showSearchUser = false;
                this.applyMsg = ''
            },
            //发送好友申请
            sendFriendApply () {
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
            createTeam () {
                
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