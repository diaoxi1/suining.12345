<template>
  <div class="home">
    <van-nav-bar title="12345政府服务热线">
      <van-icon name="user-o" slot="right" size="2em"/>
    </van-nav-bar>
    <div class="banner van-hairline--bottom">
      <img src="../assets/logo2.png" class="logo2">
      <div class="search">
        <input class="search-input" type="text">
        <img src="../assets/sousuo.png" alt="" class="sousuo">
      </div>
    </div>
    <van-row class="item-array">
      <van-col span="8" class="item van-hairline--bottom">
        <img src="../assets/xjcx.png" alt="">
      </van-col>
      <van-col span="8" class="item van-hairline--bottom van-hairline--left">
        <img src="../assets/sjxx.png" alt="">
      </van-col>
      <van-col span="8" class="item van-hairline--bottom van-hairline--left">
        <img src="../assets/swxx.png" alt="">
      </van-col>
    </van-row>

  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      value:''
    }
  }
}
</script>
<style>
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
  }
  .sousuo{
    position: absolute;
    top: 50%;
    height: 24px;
    width: 24px;
    right: 8px;
    transform: translateY(-50%);
  }
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
