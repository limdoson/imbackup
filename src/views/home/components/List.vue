<template>
    <div class="frient-and-team-list">
        <!-- 搜索 -->
        <div class="search f-s">
            <!-- 搜索 -->
            <el-input
                v-model.trim="searchText"
                @input="changeSearchText"
                :disabled="enableInput"
                placeholder="搜索"
                prefix-icon="el-icon-search"
                size="mini"
                maxlength=5
                clearable>
            </el-input>
            <!-- 创建群聊 -->
            <el-button
                title='发起群聊'
                size="mini"
                icon="el-icon-plus">
            </el-button>
        </div>
        <!-- 列表 -->
        <ul class="chart-list ">
            <!-- 顶部通用的消息中心 -->
            <li class="f-s" @click='openMsg'>
                <el-badge :value="$store.getters.systemMsgLength" class="item">
                    <img :src="require('@ast/images/notice.png')" alt="通知">
                </el-badge>
                <span>消息中心</span>
            </li>
            <!-- 好友列表 && 群列表-->
            <template v-if='$store.state.userModule.list && $store.state.userModule.list.length' >
                <template v-for='item in $store.state.userModule.list'>
                    <li class="f-s"  :key='item.accid' v-if='item.isShow'>
                        <img :src="firendAvatar(item)" alt="">
                        <span>
                            <template v-if='$store.state.tab == `contacts`'>
                                {{item | showName}}
                            </template>
                            <template v-if='$store.state.tab == `teams`'>
                                {{item.base.name ? item.base.name : '无'}}
                            </template>
                        </span>
                    </li>
                </template>
                
            </template>
            <template v-else>
                <li class="center">
                    <template v-if='$store.state.tab == `chats`'>
                        暂无最近聊天信息
                    </template>
                    <template v-if='$store.state.tab == `contacts`'>
                        暂无任何好友
                    </template>
                    <template v-if='$store.state.tab == `teams`'>
                        暂无任何群信息
                    </template>
                </li>
            </template>
        </ul>
        <!-- 
            消息中心数据列表
            消息类型包含：
                1、别人申请加我为好友的通知 (通过、拒绝操作)
                2、别人拉我进群的系统通知 (通过、拒绝操作)
         -->
        <el-dialog
            class='no-body-padding-dialog'
            title="消息中心"
            append-to-body
            :visible.sync="msgOpen"
            width="400px">
            <ul class="system-msg-list scroll-y-list">
                <li class="s-b" v-for='item in $store.state.messageModule.noticeCenter.systemMsg' :key='item.timestamp'>
                    <user-avatar :img-path='item.fromAvatar' img-width='40px'></user-avatar>
                    <div class="form-info">
                        <h1>来自{{item.fromNick}}的好友申请</h1>
                        <p>申请信息：{{item.msg || '-'}}</p>
                    </div>
                    <template v-if='item.status == FriendAddType.ADD || item.status == FriendAddType.APPLY'>
                        <div class="handle-btns">
                            <el-button type='primary' size='mini' @click='passFriendApplyHandle(item)'>通过</el-button>
                            <el-button type='warning' size='mini' @click='rejectFriendApplyHandle(item)'>拒绝</el-button>
                        </div>
                    </template>
                    <template v-if='item.status == FriendAddType.PASS'>
                        <div class="handle-btns">
                            已通过
                        </div>
                    </template>
                    <template v-if='item.status == FriendAddType.REJECT'>
                        <div class="handle-btns">
                            已拒绝
                        </div>
                    </template>
                    <template v-if='item.status == FriendAddType.OVERTIME'>
                        <div class="handle-btns">
                            已超时
                        </div>
                    </template>
                </li>
            </ul>
        </el-dialog>
    </div>
</template>
<script>

    import {ApplyType} from "@itf/common/common_pb"
    import {PassFriendApply, RejectFriendApply} from "@itf/FriendActClient"
    import {AcceptInvite, RejectInvite} from "@itf/TeamActClient"
    import { FriendAddType } from "@itf/common/common_pb"
    import userAvatar from '@c/UserAvatar'
    export default {
        components : {
            userAvatar
        },
        data () {
            return {
                FriendAddType,
                searchText : null,//搜索关键字
                searchLast : null,//上一次的搜索关键字
                msgOpen : false,//是否打开消息中心列表dialog

            }
        },
        computed : {
            /* 
                如果当前激活的tab下没有任何列表数据，则不允许输入
            */
            enableInput () {
                return  (!this.$store.state.userModule.list ||  !this.$store.state.userModule.list.length)
            },
            /* 
                未读系统通知数量
            */
            unReadSystemMsg () {
                if (this.$store.state.messageModule.noticeCenter.systemMsg.length ) {
                    // 仅计算status = 1 （直接添加好友） status = 2 （普通添加好友）
                    let effect = this.$store.state.messageModule.noticeCenter.systemMsg.filter(item => item.status == 2 || item.status == 1);

                    //消息超过99就显示...
                    if (effect.length) {
                        return effect.length <= 99 ? effect.length : null
                    } else {
                        return false;
                    }
                } else {
                    return null
                }
            }
        },
        methods :{
            changeSearchText () {
                if (this.searchText || this.searchLast) {
                    this.$store.dispatch('userModule/searchList', this.searchText)
                    this.searchLast = this.searchText
                }
            },
            //好友头像处理，如果没有头像，则给一个默认头像
            firendAvatar (item) {
                //群聊
                if (item.avatar) {
                    return item.avatar
                } else {
                    return require('../../../assets/images/default_avatar.jpg')
                }
            },
            //通过好友申请
            passFriendApplyHandle (notice) {
                //根据消息类型来区分业务
                //人对人加好友  type = 0
                if (notice.type == ApplyType.P2P) {
                    PassFriendApply(this.$store.state.userModule.config, notice)
                        .then((result) => {
                            let baseinfo = result.baseinfo

                            if (baseinfo.code == 200) {
                                this.$message({type: 'success', message: '同意操作成功'})
                            } else {
                                this.$message({type: 'error', message: baseinfo.msg})
                            }
                            //如果处理正常，则后端会返回一个处理结果，applyStatus
                            notice.status = result.applyStatus
                            this.$store.dispatch('updateNoticeStatus', notice, {root : true})
                        })
                } else if (notice.type == ApplyType.T2P) { //通过群加好友

                }
            },
            //拒绝好友申请
            rejectFriendApplyHandle (notice) {
                if (notice.type == ApplyType.P2P) {
                    RejectFriendApply(this.$store.state.userModule.config, notice)
                    .then((result) => {
                        let baseinfo = result.baseinfo
                        if (baseinfo.code == 200) {
                            this.$message({type: 'success', message: '拒绝操作成功'})
                        } else {
                            this.$message({type: 'error', message: baseinfo.msg})
                        }

                        notice.status = result.applyStatus
                        this.$store.dispatch('updateNoticeStatus', notice);

                        this.msgOpen = false;

                    })
                }
            },
            //点击消息中心，如果有消息则打开消息列表
            openMsg () {
                if (this.$store.state.messageModule.noticeCenter.systemMsg.length) {
                    this.msgOpen = true
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .frient-and-team-list {
        
        height: 100%;
        .search {
            padding: 0 10px;
            .el-input {
                flex: 1;
            }
            .el-button {
                width: 28px;
                height: 28px;
                margin-left: 10px;
                text-align: center;
                padding: 0;
            }
        }
        .chart-list {
            height: calc(~"100%" - 18px);
            overflow-y: scroll;
            &::-webkit-scrollbar {/*滚动条整体样式*/
                width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
                height: 4px;
            }
            &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                border-radius: 18px;
                -webkit-box-shadow: inset 0 0 5px #252525;
                box-shadow: inset 0 0 5px #252525;
                background: #000;
            }
            &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                border-radius: 0;
                background: rgba(0,0,0,0.1);
            }
            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                // margin-right: 15px;
            }
            li {
                padding: 10px;
                border-bottom: 1px solid #fafafa;
                cursor: pointer;
                span {
                    margin: 15px;
                    color: #666;
                    font-size: 13px;
                }
            }
            .center {
                cursor: auto;
                border: none;
                font-size: 12px;
                color: #ccc;
            }
        }
    }
</style>