<template>
    <el-image
        slot="reference"
        :src="imgPath"
        fit="cover"
        :style="{width : imgWidth}"
        style="border-radius : 4px">
        <img 
            :src="require('@ast/images/default_avatar.jpg')" 
            alt="用户头像" 
            class="default_avatar" 
            slot="error" >
    </el-image>
</template>
<script>
    export default {
        props : {
            imgWidth :  {
                type : String,
                default : '100%'
            },
            imgPath :{
                type : String,
                default : require('@ast/images/default_avatar.jpg')
            }
        }
    }
</script>
<style scoped lang='less'>
    
</style>