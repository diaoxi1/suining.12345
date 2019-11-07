<template>
    <div class="home">
        <template v-if="!show">
            <van-nav-bar title="12345政府服务热线">
                <van-icon name="user-o" slot="right" size="2em" @click="userInfo"/>
            </van-nav-bar>
            <banner></banner>
            <item-bar></item-bar>
            <div class="split-line"></div>
            <dycnamic :work="work"></dycnamic>
            <div class="split-line"></div>
            <charts :ranking="ranking"></charts>
            <div class="split-line"></div>
            <accept :bill="bill"></accept>
            <div class="split-line"></div>
            <info></info>
            <div class="split-line"></div>
            <copyright></copyright>
        </template>
        <template v-else>
            <div class="loading">
                <van-loading size="24px" vertical>加载中...</van-loading>
            </div>
        </template>
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
    data(){
        return {
            bill:[],
            ranking:[],
            work:[],
            show:true
        }
    },
    components:{
        banner,
        itemBar,
        dycnamic,
        charts,
        accept,
        info
    },
    methods:{
        userInfo(){
            this.$router.push({name:'login'})
        }
    },
    mounted() {
        this.$api.index.index().then(res=>{
            this.bill = res.bill
            this.ranking = res.ranking
            this.work = res.work
            this.show = false
        })
    }
}
</script>
<style scoped>
    .split-line{
        height: 8px;
        width: 100%;
        background: #f6f6fa;
    }
    .loading,.home{
        height: 100%;
    }
    .loading{
        display: flex;
        flex-direction: column;
        justify-content:center ;
    }
</style>
