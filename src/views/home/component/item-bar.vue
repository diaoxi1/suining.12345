<template>
    <van-row class="item-array">
        <van-col span="8" class="item van-hairline--bottom">
            <img src="../../../assets/xjcx.png" alt="">
        </van-col>
        <van-col span="8" class="item van-hairline--bottom van-hairline--left">
            <img src="../../../assets/sjxx.png" alt="">
        </van-col>
        <van-col span="8" class="item van-hairline--bottom van-hairline--left">
            <img src="../../../assets/swxx.png" alt="">
        </van-col>
    </van-row>
</template>
<script>
export default{
    name:'item-bar',
}
</script>

<style scoped>
    .item-array{
        height: 80px;
    }
    .item-array .item{
        height: 100%;
        position: relative;
    }
    .item-array .item img{
        height: 54px;
        width: 54px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>
