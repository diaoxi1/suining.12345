<template>
  <div class="home">
    <van-nav-bar title="12345政府服务热线">
      <van-icon name="user-o" slot="right" size="2em"/>
    </van-nav-bar>
    <div class="banner">

    </div>
    <van-row class="item-array">
      <van-col span="8"></van-col>
      <van-col span="8"></van-col>
      <van-col span="8"></van-col>
    </van-row>

  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>
<style>
  .banner{
    height: 5em;
    width: 100%;
    background: red;
  }
  .item-array{
    height: 2em;
  }
</style>
