<template>
    <el-popover
        class='user-avatar'
        placement="right"
        title="我的信息"
        width="260"
        trigger="click">
        <!-- 我的信息内容 -->
        <div class="user-info">
            <header class="s-b">
                <div class="info-detail">
                    <!-- 账号 -->
                    <!-- <h1>{{$store.state.userModule.userInfo.accid}}</h1> -->
                    <!-- 昵称&& 性别 -->
                    <p>{{$store.state.userModule.userInfo.name}} {{gender}}</p>
                    <!-- 电话 -->
                    <p>
                        电话：{{$store.state.userModule.userInfo.mobile || '-'}}
                    </p>
                </div>
                <user-avatar img-width='45px'></user-avatar>
            </header>
            <!-- 其他信息 -->
            <ul class="other-info">
                <li>
                    邮箱：{{$store.state.userModule.userInfo.email || '-'}}
                </li>
                <li>
                    生日：{{$store.state.userModule.userInfo.birth || '-'}}
                </li>
                <li>
                    签名：{{$store.state.userModule.userInfo.birth || '-'}}
                </li>
                <li>
                    所在地区：{{$store.state.userModule.userInfo.prov}}{{$store.state.userModule.userInfo.city}}{{$store.state.userModule.userInfo.area}}
                </li>
            </ul>
            <div class="center">
                <el-button type="primary" icon="el-icon-edit" circle size='small' @click='showEditDialog = true'></el-button>
            </div>
        </div>
        <!-- 头像占位符 -->
        <user-avatar style="margin-bottom: 15px" slot='reference' :img-path='$store.state.userModule.userInfo.icon'></user-avatar>
        <!-- 标记用户信息 -->
        <el-dialog
            class="no-body-padding-dialog"
            append-to-body
            :close-on-click-modal='false'
            center
            :visible.sync='showEditDialog'
            title='修改信息'
            width='300px'>
            <el-form size='mini' inline label-width="60px" :model="userInfo" :rules='rules' ref='editUserInfoForm'>
                <el-form-item label='头像'>
                    <el-upload
                        class="avatar-uploader"
                        action=""
                        accept="image/*"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :http-request="avatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 60px">
                        <user-avatar v-else img-width='50px'></user-avatar>
                    </el-upload>
                </el-form-item>
                <el-form-item label='昵称' prop='name'>
                    <el-input placeholder="请输入昵称" v-model.trim="userInfo.name" style="width:100%"></el-input>
                </el-form-item>
                <el-form-item label='性别'>
                    <el-select v-model='userInfo.gender'>
                        <el-option label='男' :value='1'></el-option>
                        <el-option label='女' :value='2'></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label='地址'>
                    <el-cascader :options='cityData' :props="{label : 'label', value:'label'}" v-model='fullCityData'></el-cascader>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size='mini' @click='showEditDialog = false'>取 消</el-button>
                <el-button type="primary" size='mini' @click='editConfirm'>确 定</el-button>
            </span>
        </el-dialog>
    </el-popover>
</template>
<script>
    import userAvatar from '@c/UserAvatar'
    import cityData from '@u/cityData'
    import { UpdateMyInfo,UPDATE_MY_AVATAR } from '@itf/UserActClient'
    import { CommonUserInfo } from '@itf/common/common_pb'
    import { UploadFile } from '@itf/UploadFile'
    export default {
        components :{
            userAvatar
        },
        computed : {
            gender () {
                switch (this.$store.state.userModule.userInfo.gender) {
                    case 1:
                        return '男'
                        break;
                    case 2:
                        return '女'
                        break;
                    default:
                        return '-'
                        break;
                }
            },
            userInfo () {
                return this.$store.state.userModule.userInfo
            }
        },
        data () {
            return {
                showEditDialog : false,//是否显示编辑信息dialog
                //填写信息表单校验规则
                rules : {
                    name: [
                        { required: true, message: '请填写昵称', trigger: 'blur' },
                    ],
                },
                imageUrl : require('@ast/images/default_avatar.jpg'),
                cityData,//城市数据源
                //完整的城市数据数组
                fullCityData : [this.$store.state.userModule.userInfo.prov, this.$store.state.userModule.userInfo.city, this.$store.state.userModule.userInfo.area]
            }
        },
        methods : {
            //编辑确认逻辑
            editConfirm () {
                this.$refs.editUserInfoForm.validate( (valid) =>{
                    if (valid) {
                        //提交更新后的用户信息
                        this.updateHandle()
                    } else {
                        return false;
                    }
                })
            },
            //更新逻辑
            updateHandle () {
                let userInfo = new CommonUserInfo();
                userInfo.setName(this.userInfo.name)
                userInfo.setGender(this.userInfo.gender)
                userInfo.setProv(this.fullCityData.length ? this.fullCityData[0] : '')
                userInfo.setCity(this.fullCityData.length ? this.fullCityData[1] : '')
                userInfo.setArea(this.fullCityData.length ? this.fullCityData[2] : '')
                UpdateMyInfo(this.$store.state.userModule.config, userInfo)
                .then(res =>{
                    if (res.baseinfo.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '资料修改成功!'
                        })

                        this.userInfo.fullCityData = this.fullCityData || ['', '', '']

                        this.$store.commit('userModule/updateUserInfo', this.userInfo)
                        this.showEditDialog = false;
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.baseinfo.msg
                        })
                    }
                })
            },
            beforeAvatarUpload (file) {
                const limit = file.size / 1024 / 1024 < process.env.VUE_APP_LIMIT_UPLOAD_SIZE;

                if (!limit) {
                    this.$message.error('上传图片不得超过50M')
                }
                // UploadFile()
                return limit;
            },
            //图片上传
            avatarUpload (file) {
                UploadFile(this.$store.state.userModule.config,file)
                // console.log(reader.readAsDataURL(_file))
            },
            //上传成功回调
            handleAvatarSuccess (res) {
                console.log(res)
            }
        }
    }
</script>
<style scoped lang='less'>
    .user-info {
        header {
            border-bottom: 1px solid #f1f1f1;
            padding-bottom: 10px;
            margin-bottom: 10px;
            h1 {
                color: #666;
                font-size: 14px;
                margin-bottom: 5px;
            }
            p {
                margin-bottom: 5px;
                font-size: 12px;
                color: #999;
            }
        }
        .other-info {
            li {
                font-size: 12px;
                margin-bottom: 5px;
                color: #999;
            }
        }
    }
</style>
