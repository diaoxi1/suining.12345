<template>
    <div class="banner van-hairline--bottom">
        <img src="../../assets/logo2.png" class="logo2">
        <div class="search">
            <input class="search-input" type="text">
            <img src="../../assets/sousuo.png" alt="" class="sousuo">
        </div>
    </div>
</template>
<script>
    export default{
        name:'index-banner'
    }
</script>
<style scoped>
    .banner{
        height: 123px;
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .logo2{
        position: absolute;
        left: 50%;
        top: 15px;
        transform: translateX(-50%);
        width: 126px;
        height: 34px;
    }
    .search{
        width: 80%;
        margin:53.3px 0 0 10%;
        position: relative;
    }
    .search-input{
        outline:none;
        width: 100%;
        height: 44px;
        margin: 0;
        line-height: 44px;
        font-size: 14px;
        border: 1px solid #989898;
        padding-left: 10px;
    }
    .sousuo{
        position: absolute;
        top: 50%;
        height: 24px;
        width: 24px;
        right: 8px;
        transform: translateY(-50%);
    }
</style>
