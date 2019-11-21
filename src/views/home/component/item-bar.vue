<template>
    <van-row class="item-array">
        <van-col span="12" class="item van-hairline--bottom" @click="$router.push({name:'appeal-list'})">
            <img src="../../../assets/xjcx.png" alt="">
            <span>信件查询</span>
        </van-col>
        <van-col span="12" class="item van-hairline--bottom van-hairline--left" @click="submit('secretary')">
            <img src="../../../assets/sjxx.png" alt="">
            <span>我要写信</span>
        </van-col>
<!--        <van-col span="8" class="item van-hairline&#45;&#45;bottom van-hairline&#45;&#45;left" @click="submit('mayor')">-->
<!--            <img src="../../../assets/swxx.png" alt="">-->
<!--            <span>书记信箱</span>-->
<!--        </van-col>-->
    </van-row>
</template>
<script>
export default{
    name:'item-bar',
    methods:{
        submit(type){
            if(!this.$store.getters.getToken){
                this.$router.push({name:'user'})
                return
            }
            this.$router.push({
                name:'submit',
                params:{ type }
            })
        }
    }
}
</script>

<style scoped>
    .item-array{
        height: 90px;
    }
    .item-array .item{
        height: 100%;
        position: relative;

    }
    .item-array .item img{
        height: 54px;
        width: 54px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .item-array .item span{
        display: inline-block;
        font-size: 14px;
        text-align: center;
        width: 100%;
        position: absolute;
        top: 75%;
    }
</style>
