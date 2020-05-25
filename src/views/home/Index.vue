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
                <chart-container v-if='$store.state.userModule.chartItem'></chart-container>
            </div>
        </div>
    </div>
</template>
<script>
    import leftMenu from './components/LeftMenu'
    import List from './components/List'
    import ChartContainer from './components/ChartContainer'
    export default {
        components : {
            leftMenu,
            List,
            ChartContainer
        }
    }
</script>