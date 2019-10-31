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
import banner from './banner'
import itemBar from './item-bar'
import dycnamic from './dynamic-list'
import charts from './chartsTabs'
import accept from './Accept-list'
import info from './infos'
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
