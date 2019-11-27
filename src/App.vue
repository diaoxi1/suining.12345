<template>
  <div id="app">
    <keep-alive exclude="user">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
  #app{
    background: #fff;
  }
</style>
