<template>
    <div class="home">
        <van-nav-bar title="12345政府服务热线">
            <van-icon name="user-o" slot="right" size="2em"/>
        </van-nav-bar>
        <banner></banner>
        <item-bar></item-bar>
        <div class="split-line"></div>
        <dycnamic></dycnamic>
        <div class="split-line"></div>
        <charts></charts>
        <div class="split-line"></div>
        <accept></accept>
        <div class="split-line"></div>
        <info></info>
        <div class="split-line"></div>
        <copyright></copyright>
    </div>
</template>
<script>
import banner from './component/banner'
import itemBar from './component/item-bar'
import dycnamic from './component/dynamic-list'
import charts from './component/chartsTabs'
import accept from './component/Accept-list'
import info from './component/infos'
export default{
    name:'home',
    components:{
        banner,
        itemBar,
        dycnamic,
        charts,
        accept,
        info
    }
}
</script>
<style scoped>
    .split-line{
        height: 8px;
        width: 100%;
        background: #f6f6fa;
    }
</style>
