<template>
    <ul class="user-input-btns f-s">
        <li title='表情'>
            <el-popover
                placement="top-start"
                width="550">
                <!-- emoji -->
                <ul class="emoji-list f-s">
                    <li v-for='item in $store.state.emojis' :key='item.id' :title='item.tag' @click='inputEmoji(item)'>
                        <img :src="require(`@ast/images/default/${item.file}`)" :alt="item.tag">
                    </li>
                </ul>
                <img src="../assets/images/ic_emoji_pressed.png" slot="reference" alt="表情">
            </el-popover>
        </li>
        <li title='文件'>
            <img src="../assets/images/ic_file_normal.png" alt="文件">
        </li>
        <li title='聊天记录'>
            <img src="../assets/images/ic_history_normal.png" alt="聊天记录">
        </li>
    </ul>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        data () {
            return {

            }
        },
        computed : {
            userInput : {
                get (){
                    return this.$store.state.messageModule.userInput
                },
                set (v) {
                    this.$store.commit(changeUserInput, v)
                }
            }
        },
        methods :{
            //输入表情
            inputEmoji (item) {
                this.$store.commit('changeUserInput', this.userInput + item.tag)
                // console.log(this.userInput, item)
            }
        }
    }
</script>
<style lang="less" scoped>
    .user-input-btns {
        padding: 5px 10px;
        li {
            cursor: pointer;
            margin-right: 15px;
        }
    }
    .emoji-list {
        flex-wrap: wrap;
        li {
            width: 22px;
            height: 22px;
            padding: 4px;
            cursor: pointer;
            // margin-right: 3px;
            // margin-bottom: 3px;
        }
    }
</style>