<template>
    <div class="login c-c">
        <div class="form-container">
            <el-form size='small' :model="formData" :rules='rules' ref='loginFrom'>
                <el-form-item label='accid' prop='accid'>
                    <el-input v-model="formData.accid"></el-input>
                </el-form-item>
                <el-form-item label='appid' prop='appid'>
                    <el-input v-model="formData.appid" ></el-input>
                </el-form-item>
                <el-form-item label='token' prop='token'>
                    <el-input v-model="formData.token" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click='login' type='primary'>登 录</el-button>
                    <el-button @click='oauth2Login' type='primary'>授权登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import { LoginRequest } from "@itf/im/message_pb"
    import { Login } from "@itf/ServerClient"
    import jsmd5 from 'js-md5'
    export default {
        data () {
            return {
                formData : {
                    accid : 'test_e0688b54576a41949046df69c5d',
                    appid : 'test',
                    token : 'fGXVYky7kx5UAiug'
                },
                rules : {
                    appid: [
                        { required: true, message: '请输入 appid'},
                    ],
                    accid: [
                        { required: true, message: '请输入 accid'}
                    ],
                    token: [
                        { required: true, message: '请输入 token'},
                    ],
                }
            }
        },
        created () {
            // console.log(this.$store.getters['userModule/isLogin'])
        },
        methods : {
            //登录方法
            login () {
                this.$refs.loginFrom.validate((valid) => {
                    if (valid) {
                        // TODO: 登录业务
                        this.loginHandle()
                    } else {
                        return false;
                    }
                });
            },
            //登录逻辑
            loginHandle () {
                let req = new LoginRequest()
                req.setDeviceOs("web")
                req.setDevice("web")
                req.setDeviceToken("token")
                Login({
                    accid: this.formData.accid,
                    appid: this.formData.appid,
                    token : this.formData.token,
                    sign: this.getSignMd5()
                },req).then(res =>{
                    let {code} = res;
                    if (code != 200) {
                        this.$message({
                            message : res.msg,
                            type : 'error'
                        })
                    }
                    if (code == 200) {
                        this.$message({
                            message : '登录成功',
                            type : 'success'
                        })
                        //登录成功，向store传入数据
                        this.$store.dispatch('userModule/userLogin',{
                            accid: this.formData.accid,
                            appid: this.formData.appid,
                            sign: this.getSignMd5(),
                            token: res.token
                        })
                        this.$router.replace('/')
                    }
                })

            },
            //授权登录
            oauth2Login () {
                location.href = process.env.VUE_APP_OAUTH2_LOGIN_URL
            },
            //md5加密登录数据
            getSignMd5 () {
                return jsmd5(`${this.formData.accid}${this.formData.appid}${this.formData.token}`)
            }
        }
    }
</script>