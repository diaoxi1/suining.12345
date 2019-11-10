<template>
    <div class="home">
            <van-sticky>
                <van-nav-bar title="12345政府服务热线">
                        <van-icon name="user-o" slot="right" size="2em" @click="userInfo"/>
                </van-nav-bar>
            </van-sticky>
            <banner></banner>
            <item-bar></item-bar>
            <div class="split-line"></div>
            <dycnamic :work="work" :loading="loading"></dycnamic>
            <div class="split-line"></div>
            <van-loading v-if="loading"></van-loading>
            <charts :ranking="ranking" v-else></charts>
            <div class="split-line"></div>
            <accept :bill="bill" :loading="loading"></accept>
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
    data(){
        return {
            bill:[],
            ranking:[],
            work:[],
            loading:true
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
            console.log(this.$store.getters.getToken)
            if(!this.$store.getters.getToken){
                this.$router.push({name:'login'})
            }else{
                this.$router.push({name:'user'})
            }

        }
    },
    mounted() {
        this.$api.index.index().then(res=>{
            this.bill = res.bill
            this.ranking = res.ranking
            this.work = res.work
            this.loading = false
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
        flex-direction: column
