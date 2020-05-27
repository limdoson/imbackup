<template>
    <i class="el-icon-user icon"
        title="好友列表"
        @click="$store.dispatch('userModule/tabChange', 'contacts')"></i>
</template>
