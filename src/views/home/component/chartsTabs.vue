<template>
    <van-tabs class="tabs-card" v-model="activeName" color="#429bf4" title-active-color="#429bf4" line-height="2px" @change="tabsChange">
        <van-tab title="诉求排名" name="a">
            <div style="text-align:center; margin-top:15px;height:200px;" ref="ECharDiv1"></div>
        </van-tab>
        <van-tab title="诉求占比" name="b">
            <div style="text-align:center; margin-top:15px;height:200px;" ref="ECharDiv2"></div>
        </van-tab>
        <van-tab title="诉求统计" name="c">
            <div class="statistics">
                <div>
                    <span class="statistics-number">{{ranking.sqcount['今日述求']}}</span>
                    <span class="statistics-name">今日诉求</span>
                </div>
                <div>
                    <span class="statistics-number">{{ranking.sqcount['话务量']}}</span>
                    <span class="statistics-name">累计话务量</span>
                </div>
                <div>
                    <span class="statistics-number">{{ranking.sqcount['建单量']}}</span>
                    <span class="statistics-name">累计建单量</span>
                </div>
                <div>
                    <span class="statistics-number">{{ranking.sqcount['办结量']}}</span>
                    <span class="statistics-name">累计办结量</span>
                </div>
            </div>
        </van-tab>
    </van-tabs>
</template>
<script>
export default{
    name:'chartsBabs',
    props:{
        ranking:{
            type:Object,
            default:() => {
                return {}
            },
            required: true
        }
    },
    data(){
        return{
            activeName:'a'
        }
    },
    methods:{
        tabsChange(name){
            if(name==='b'){
                this.$nextTick(()=>{
                    this.charts2(this.ranking.sqtype)
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
            this.charts1(this.ranking.sqarea)
        })
    }
}
</script>
<style scoped>
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
