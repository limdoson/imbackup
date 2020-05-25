<template>
    <div class="main-chart-container">
        <header class="s-b">
            <span>好友名称</span>
            <span>操作按钮</span>
        </header>
        <message-wrapper></message-wrapper>
        <!-- 输入区 -->
        <user-input-area></user-input-area>
    </div>
</template>
<script>
    import messageWrapper from '@c/messageWrapper'
    import userInputArea from '@c/userInputArea'
    export default {
        components :{
            messageWrapper,
            userInputArea
        }
    }
</script>