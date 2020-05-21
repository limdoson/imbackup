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
        </div>
        <!-- 头像占位符 -->
        <user-avatar style="margin-bottom: 15px" slot='reference'></user-avatar>
    </el-popover>
</template>
<script>
    import userAvatar from '@c/UserAvatar'
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
