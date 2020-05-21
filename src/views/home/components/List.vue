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
        <ul class="chart-list">
            <!-- 顶部通用的消息中心 -->
            <li class="f-s">
                <el-badge :value="unReadSystemMsg" class="item">
                    <img :src="require('@ast/images/notice.png')" alt="通知">
                </el-badge>
                <span>消息中心</span>
            </li>
            <!-- 好友列表 && 群列表-->
            <template v-if='$store.state.userModule.list && $store.state.userModule.list.length'>
                <li class="f-s" v-for='item in $store.state.userModule.list' :key='item.accid' v-if='showItemCondition(item)'>
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
    </div>
</template>
<script>
    import { throttle } from '@u/store'
    export default {
        data () {
            return {
                searchText : null,//搜索关键字
                searchLast : null,//上一次的搜索关键字
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
                return this.$store.state.messageModule.noticeCenter.systemMsg.length 
                    ? this.$store.state.messageModule.noticeCenter.systemMsg.length 
                    : null
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
            showItemCondition (item) {
                return item.isShow
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