<template>
    <div class="user-input-area">
        <!-- 按钮区  表情，文件，聊天记录 -->
        <user-input-btns></user-input-btns>
        <!-- 文字输入区域 -->
        <textarea 
            v-model.trim='userInput' 
            style="resize : none" 
            class="input-textarea"
            @keyup.shift="aitTeamMember($event)"
            @keyup.ctrl.enter="sendTextMessage()"></textarea>
        <!-- <input type="textarea" v-model='userInput'> -->
        <div style='text-align: right' class="send-msg-btn">
            按下 ctrl + enter 发送  <el-button type='primary' size='small'>发 送</el-button>
        </div>
    </div>
</template>
<script>
    import { SendMsgRequest, MsgContentType, SessionTypes } from '@itf/common/common_pb'
    import { SendMessage } from '@itf/SendMsgForWebIMClient'
    import { Encrypt } from "@u/encrypt"
    import { makeUuid } from "@u/utils"

    import userInputBtns from './userInputBtns'
    import { mapState} from 'vuex'
    export default {
        components :{
            userInputBtns
        },
        data () {
            return {

            }
        },
        computed : {
            //mapstate中的userInput
            userInput : {
                get () {
                    return this.$store.state.messageModule.userInput
                },
                set (v) {
                    this.$store.commit('changeUserInput', v)
                }
            }
        },
        methods : {
            /* 
                @谁，只有在群聊的时候才有效
            */
            aitTeamMember () {

            },
            //发送效果
            sendTextMessage () {

            },
            //send
            sendMessageHandle () {

            },
            //消息处理函数
            msgHandle (content, contentType) {
                let appMsg =  new SendMsgRequest();
                // let from = this.isTeamChat() ? 
            },
            //判断是否为群聊
            isTeamChat () {
                return this.$store.state.userModule.chartItem.sessionType === SessionTypes.TEAM
            }
        }
    }
</script>
<style lang="less" scoped>
    .user-input-area {
        // padding: 10px;
        border-top: 1px solid #e4e4e4;
        /deep/.el-textarea__inner {
            border: none;
            height: 148px;
        }
        .input-textarea {
            height: 142px;
            border: none;
            width: calc(~"100% - 21px");
            color: #000;
            font-size: 13px;
            padding: 0 10px;
            font-family: Helvetica, Arial, Tahoma, '\E5\BE\AE\E8\BD\AF\E9\203A\2026\E9\BB\2018';
            &:focus {
                outline: none;
            }
        }
        .send-msg-btn {
            text-align: right;
            padding: 10px;
            font-size: 12px;
            color: #666;
            .el-button {
                margin-left: 20px;
            }
        }
    }
</style>