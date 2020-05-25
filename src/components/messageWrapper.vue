<template>
    <div class="message-wrapper scroll-y-list">
        <message-item></message-item>
    </div>
</template>
<script>
    import messageItem from './messageItem'
    export default {
        components :{
            messageItem
        }
    }
</script>
<style scoped lang='less'>
    .message-wrapper {
        height: 392px;
        padding: 15px;
        background: #fafafa;
        overflow-y: scroll;
    }
</style>