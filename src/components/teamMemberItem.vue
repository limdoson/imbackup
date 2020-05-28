<template>
    <div>
        <!-- 非群主或当前成员是自己，则不让修改群昵称 -->
        <template v-if='isTeamOwner && !isSelf'>
             <el-popover 
                trigger="hover">
                <div class='center' >
                    <el-button @click='updateMemberNick' type='primary' size='mini'>修改群昵称</el-button>
                </div>
                <div slot='reference' class="member-info">
                    <user-avatar img-width='50px' :img-path='item.avatar'></user-avatar>
                    <p class="center member-name">{{item.teamNick || item.name}}</p>
                </div>
            </el-popover>
        </template>
        <template v-else>
            <div class="member-info">
                <user-avatar img-width='50px' :img-path='item.avatar'></user-avatar>
                <p class="center member-name">{{item.teamNick || item.name}}</p>
            </div>
        </template>
    </div>
</template>
<script>
    import { updateTeamNick } from '@itf/TeamActClient'
    import { _trim } from '@u/store'

    import userAvatar from './UserAvatar'
    export default {
        components :{
            userAvatar
        },
        props : {
            item : {
                type : Object
            }
        },
        computed :{
            //是否为群主
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
            //是否是自己
            isSelf () {
                return this.$store.state.userModule.chartItem.pb_private.memberInfo.openId == this.item.openId
            }
        },
        methods : {
            //修改成员的群昵称
            updateMemberNick () {
                this.$prompt('修改用户群昵称', '',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) =>{
                    if(!value || !value.length || !_trim(value).length) {
                        this.$message.error('未检测到有效输入');
                        return;
                    }
                    //获取当前用户在群里的openid
                    let from = this.$store.state.userModule.chartItem.pb_private.memberInfo.openId
                    updateTeamNick(
                        this.$store.state.userModule.config,//metadata
                        from,//form
                        this.item.openId,//to
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
                            openId : this.item.openId,
                            teamNick : _trim(value),
                        })
                    })
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../assets/css/_b.less';
    .member-info {
        .center {
            font-size: 12px;
        }
    }
    .owner-change-member-nick {
        text-align: center;
        cursor: pointer;
        margin-bottom: 15px;
        color: #999;
    }
</style>