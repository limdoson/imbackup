<template>
    <div class="user-setting">
        <!-- 设置按钮 -->
        <el-popover
            class='mini-popover'
            placement="right"
            width="80px"
            ref='settingMenu'
            trigger="click">
            <ul class="setting-menu">
                <li @click="viewBlackList">
                    黑名单列表
                </li>
                <li>
                    <el-dropdown style="width : 100%" @command='settingMenuItemClick'>
                        <span class="el-dropdown-link">
                            设置
                        </span>
                        <el-dropdown-menu slot="dropdown" style="width:100;">
                            <el-dropdown-item command='addFriendSetting'>加好友设置</el-dropdown-item>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li @click='logoutDialog = true'>退出</li>
            </ul>
            <i class="iconfont icon" title='设置' slot='reference'>&#xe851;</i>
        </el-popover>
        <!-- 退出提示 -->
        <el-dialog
            title="提示"
            :visible.sync="logoutDialog"
            width="30%"
            append-to-body
            center>
            <div style="text-align:center;">是否退出登录?</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="logoutDialog = false" size='mall'>取 消</el-button>
                <el-button type="primary" @click="logoutHandle" size='mall'>确 定</el-button>
            </span>
        </el-dialog>
        <!-- 加好友设置 -->
        <el-dialog
            title="加好友设置"
            :visible.sync="showAddFriendSetting"
            width="500px"
            append-to-body
            :close-on-click-modal="false"
            :show-close='false'
            center>
            <el-form 
                size='small' 
                label-width='100px' 
                :model="friendSettingFromData" 
                :rules="friendSettingRules"
                ref='friendSettingForm'>
                <el-form-item label='验证方式'>
                    <el-radio-group v-model='friendSettingFromData.addType'>
                        <el-radio :label='FriendValidate.MESSAGE'>需要验证消息</el-radio>
                        <el-radio :label='FriendValidate.QUESTION'>需要正确回答问题</el-radio>
                    </el-radio-group>
                </el-form-item>
                <template v-if='friendSettingFromData.addType == 2'>
                     <el-form-item label='问题' prop='question'>
                        <el-input placeholder="请填写问题" maxlength="20" v-model="friendSettingFromData.question"></el-input>
                    </el-form-item>
                    <el-form-item label='答案' prop='answer'>
                        <el-input placeholder="请填写问题答案" maxlength="20" v-model='friendSettingFromData.answer'></el-input>
                    </el-form-item>
                </template>
               
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addFriendSettingCancel" size='mini'>取 消</el-button>
                <el-button type="primary" @click="addFriendSettingConfirm" size='mini'>确 定</el-button>
            </span>
        </el-dialog>
        <!-- 密码修改 -->
    </div>
    
</template>
<script>
    import { FriendValidate } from '@itf/common/common_pb'
    import { SetAddTypeSetting, GetAddTypeSetting } from '@itf/UserActClient'
    export default {
        data () {
            return {
                FriendValidate,
                logoutDialog : false,//是否显示等出去提示dialog
                showAddFriendSetting : false,//是否显示添加好友设置dialog
                friendSettingFromData : {
                    addType : this.$store.state.userModule.userInfo.addType,//验证方式
                    question : this.$store.state.userModule.userInfo.addFriendIssue,//问题
                    answer : this.$store.state.userModule.userInfo.addFriendAnswer//答案
                }
                
            }
        },
        created () {
            console.log(this.friendSettingFromData,FriendValidate)
        },
        computed :{
            friendSettingRules () {
                if (this.friendSettingFromData.addType == FriendValidate.QUESTION) {
                    return {
                        question : [
                            {required: true, message: '请填写验证问题', trigger: 'blur'}
                        ],
                        answer : [
                            {required: true, message: '请填写问题答案', trigger: 'blur'}
                        ]
                    }
                } else {
                    return null
                }
            },
        },
        methods : {
            //登录逻辑
            logoutHandle () {
                //清空相关数据
                this.$store.commit('userModule/userLogout');
                this.$store.commit('initNotice', [], {root : true});
                this.$store.commit('changeUserInput', '', {root : true})
                this.$router.replace('/login')
            },
            //设置菜单点击
            settingMenuItemClick (comman) {
                console.log(comman)
                if (comman == 'addFriendSetting') {
                    //获取登录账号的好友设置参数
                    this.showAddFriendSetting = true;
                }
            },
            //查看黑名单
            viewBlackList (){
                this.$refs.settingMenu.doClose()
                this.$store.commit('userModule/tabChange', {tab : 'black'})
            },
            //加好友设置取消
            addFriendSettingCancel () {
                this.showAddFriendSetting =false;
                this.question = null;
                this.answer = null;
            },
            //加好友设置确认
            addFriendSettingConfirm () {
                this.$refs.friendSettingForm.validate( valid => {
                    if (valid) {
                        //提交设置
                        this.submitFriendSettingHandle()
                    } else {
                        return false;
                    }
                })
            },
            //提交加好友设置
            submitFriendSettingHandle () {
                SetAddTypeSetting(this.$store.state.userModule.config, this.friendSettingFromData)
                    .then(res => {
                        let {code, msg} = res.baseinfo;
                        if (code == 200) {
                            this.$message.success('设置成功')
                            //更新userInfo中的相关参数：addType,addFriendIssue，addFriendAnswer
                            this.$store.commit('userModule/updateUserFriendSetting', this.friendSettingFromData)
                        } else {
                            this.$message.error(msg)
                        }
                        this.showAddFriendSetting = false;
                        this.friendSettingFromData.question = this.$store.state.userModule.userInfo.addFriendIssue;
                        this.friendSettingFromData.answer = this.$store.state.userModule.userInfo.addFriendAnswer;
                    })
            },
        }
    }
</script>
<style lang="less" scoped>
    @import '../../../assets/css/_b.less';
    .setting-menu {
        li {
            padding: 10px 0;
            text-align: center;
            font-size: 14px;
            cursor: pointer;
            &:nth-child(1) {
                border-bottom: 1px solid #f1f1f1;
            }
            &:hover {
                color: @mainColor;
            }
        }
    }
    .user-setting {
        /deep/.el-popover {
            min-width: 50px;
        }
    }
</style>