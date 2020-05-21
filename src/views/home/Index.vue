<template>
    <div class="home c-c">
        <div class="chart-container f-s">
            <div class="left-menu">
                <left-menu></left-menu>
            </div>
            <div class="list">
                <list></list>
            </div>
            <div class="chart">

            </div>
        </div>
    </div>
</template>
<script>
    import leftMenu from './components/LeftMenu'
    import List from './components/List'
    export default {
        components : {
            leftMenu,
            List
        }
    }
</script>