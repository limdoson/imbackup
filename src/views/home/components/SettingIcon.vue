<template>
    <div>
        <el-popover
            placement="right"
            width="80px"
            trigger="click">
            <ul class="setting-menu">
                <li @click='search'>搜索</li>
                <li @click='logoutDialog = true'>退出</li>
            </ul>
            <i class="iconfont icon" title='设置' slot='reference'>&#xe851;</i>
        </el-popover>
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
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                logoutDialog : false,//是否显示等出去提示dialog
            }
        },
        methods : {
            //登录逻辑
            logoutHandle () {
                this.$store.commit('userModule/userLogout');
                this.$router.replace('/login')
                // console.log('log')
            },
            //搜索
            search () {}
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
</style>