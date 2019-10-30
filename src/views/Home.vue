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
    <div class="split-line"></div>
    <!--  列表数据  -->
    <div class="dynamic">
        <div class="title">
          <span class="gzdt">工作动态</span>
          <span class="gd">更多</span>
         </div>
        <div class="list">
          <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
          <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
          <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
          <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
          <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
          <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
        </div>
    </div>
    <div class="split-line"></div>
    <!-- 数据统计    -->
    <van-tabs class="tabs-card" v-model="activeName" color="#429bf4" title-active-color="#429bf4" line-height="2px" @change="tabsChange">
      <van-tab title="诉求排名" name="a">
        <div style="text-align:center; margin-top:15px;height:220px;" ref="ECharDiv1"></div>
      </van-tab>
      <van-tab title="诉求占比" name="b">
        <div style="text-align:center; margin-top:15px;height:220px;" ref="ECharDiv2"></div>
      </van-tab>
      <van-tab title="诉求统计" name="c">
        <div class="statistics">
          <div>
            <span class="statistics-number">123456</span>
            <span class="statistics-name">今日诉求</span>
          </div>
          <div>
            <span class="statistics-number">123456</span>
            <span class="statistics-name">累计话务量</span>
          </div>
          <div>
            <span class="statistics-number">123456</span>
            <span class="statistics-name">累计建单量</span>
          </div>
          <div>
            <span class="statistics-number">123456</span>
            <span class="statistics-name">累计办结量</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      value:'',
      activeName:'a'
    }
  },
  methods:{
    tabsChange(name){
      if(name==='b'){
        this.$nextTick(()=>{
          this.charts2([
            {"name":"求决类","value":"1804294"},{"name":"其他","value":"519236"},{"name":"咨询","value":"374780"},{"name":"揭发控告类","value":"26103"},{"name":"意见建议类","value":"14357"},{"name":"申诉类","value":"1371"}
          ])
        })
      }
    },
   charts1(Data){
     let dw = []
     for (var i = 0; i < Data.length; i++) {
       dw.push(Data[i].name);
     }
     let myCharta = this.$echarts.init(this.$refs.ECharDiv1);
     let option = {
       color: ['#FB7802'],
       tooltip: {
         trigger: 'axis',
         axisPointer: {
           type: 'shadow'
         }
       },
       grid: {
         top: '10px',
         left: '3%',
         right: '4%',
         bottom: '3%',
         containLabel: true
       },
       xAxis: [
         {
           type: 'category',
           data: dw,
           axisTick: {
             alignWithLabel: true
           },
           axisLabel: { rotate: 60 }
         }
       ],
       yAxis: [
         {
           type: 'value'
         }
       ],
       series: [
         {
           name: '诉求量',
           type: 'bar',
           barMaxWidth: "15px",
           itemStyle: { normal: { barBorderRadius: [10, 10, 0, 0] } },
           data: Data
         }
       ]
     };
     myCharta.setOption(option, true);
   },
    charts2(Data){
      var myCharta1 = this.$echarts.init(this.$refs.ECharDiv2);
      var option1 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'bottom'
          //, data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '诉求量',
            type: 'pie',
            radius: ['60%', '90%'],
            center: ["40%", '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: Data
          }
        ]
      };
      myCharta1.setOption(option1, true);
    }
  },

  mounted() {
    this.$nextTick(()=>{
      this.charts1([
        {"name":"射洪县政府","value":"230672"},{"name":"船山区政府","value":"217398"},{"name":"蓬溪县政府","value":"200296"},{"name":"安居区政府","value":"199261"},{"name":"大英县政府","value":"184982"},{"name":"遂宁经开区管委会","value":"138662"},{"name":"市河东新区管委会","value":"61057"},{"name":"市公安局","value":"59137"}
      ])
    })
  }
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
  .dynamic{
    width: 100%;
  }
  .title{
    height: 37px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 37px;
  }
  .gzdt{
    margin-left: 10px;
    font-size: 14px;
    color: #282828;
    font-weight: bold;
  }
  .gd{
    margin-right: 10px;
    font-size: 12px;
    color: #656565;
  }
  .list{
    width: 100%;
    height: calc(100% - 37px);
    padding: 0 10px;
  }
  .list .item{
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
    box-sizing: content-box;
  }

  .dian{
    width: 3px;
    height: 3px;
    border-radius: 50%;
    margin: 0 15px;
    background: #656565;
    display: inline-block;
  }
  .split-line{
    height: 8px;
    width: 100%;
    background: #f6f6fa;
  }
  .tabs-card{
    height: 266px;
  }
  .statistics{
    width: 100%;
    height: 220px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-content: space-around;
  }
  .statistics div{
    width: 173px;
    height: 93px;
    border-radius: 10px;
    border:1px solid #999999;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    font-size: 0;
  }
  .statistics div span{
    display: block;
    width: 100%;
    text-align: center;
  }
  .statistics-number{
    font-size: 20px;
    color: #f95d44;
    font-weight: bold;
  }
  .statistics-name{
    font-size: 14px;
    color: #282828;
  }
</style>
