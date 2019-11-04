<template>
    <div class="appeal-list">
        <van-nav-bar
                :title="title"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
       <div class="van-hairline--bottom">
           <div class="title ">诉求</div>
       </div>
        <div class="h">
            <div class="lable">诉求编号：</div>
            <div class="value">2019101501573</div>
        </div>
        <div class="h">
            <div class="lable">信息来源：</div>
            <div class="value">12345政府服务热线</div>
        </div>
        <div class="h">
            <div class="lable">来电时间：</div>
            <div class="value">2019/10/15 19:29:34</div>
        </div>
        <div class="h">
            <div class="lable">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题：</div>
            <div class="value">路灯未开启</div>
        </div>
        <div class="wnti">
            <div class="lable">问题摘要：</div>
            <div class="value gd">
                地址：蓬溪县城南高速出口至新县医院路段 事件：先生致电反映，该路段的路灯从10月13日开始便未开启，截止10月15日仍未恢复，
            </div>
        </div>
        <div class="split-line"></div>
        <div class="result">
            <div class="title">处理结果</div>
            <div class="result-info">
                <div class="unit">
                    <span class="unit-title">处理单位：</span>
                    <span class="unit-name">县住建局</span>
                </div>
                <div class="result-content">
                    住建局接件后2019年10月16日工作人员何云根据来电人的诉求，到投诉地点进行核查，来电人诉求属实。该投诉地段路灯线路故障导致。
                </div>
            </div>
        </div>
        <div class="result">
            <div class="result-info">
                <div class="unit">
                    <span class="unit-title">处理单位：</span>
                    <span class="unit-name">蓬溪县政府</span>
                </div>
                <div class="result-content">
                    2019年10月16日，住建局工作人员何云根据来电人的诉求，到投诉地点进行核查，来电人诉求属实。该投诉地段路灯线路故障导致路灯
                </div>
            </div>
        </div>
        <div class="split-line"></div>
        <copyright></copyright>
    </div>
</template>
<script>
    export default{
        name:'appeal-info',
        data(){
          return {
              title:''
          }
        },
        mounted(){
          this.title = this.$route.params.title
        },
        methods:{
            onClickLeft() {
                this.$router.go(-1)
            },
        }
    }
</script>
<style scoped>

.title{
    height: 40px;
    line-height: 40px;
    text-align: left;
    color: #656565;
    font-size: 14px;
    padding-left: 20px;
}
    .h{
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        font-size: 14px;
        justify-content: space-between;
    }
    .h:nth-child(2n+2){
        background: #a6dffa;
    }
    .lable{
        font-size: 14px;
        line-height: 40px;
        height: 100%;
        padding-left: 20px;
        font-weight: 500;
        width: 90px;
    }
    .value{
        flex: 1;
        padding-left: 20px;
        font-size: 12px;
        color: #656565;
        line-height: 40px;
    }
    .wnti{
        width: 100%;
        display: flex;
        line-height: 40px;
        font-size: 14px;
        justify-content: space-between;
    }
    .wnti .lable{
        font-size: 14px;
        line-height: 40px;
        height: 100%;
        padding-left: 20px;
        font-weight: 500;
        width: 90px;
    }
    .wnti .value{
        line-height: 25px;
        padding-top: 8px;
    }
    .split-line{
        height: 8px;
        width: 100%;
        background: #f6f6fa;
    }
    .result{
        padding: 0 10px;
        margin-bottom: 15px;
    }
    .result .title{
        text-align: center;
        font-size: 14px;
        color: #282828;
        height: 40px;
        line-height: 40px;
        padding: 0;
    }
    .result-info{
        border: 1px solid #989898;
    }
    .unit{
        width: 100%;
        border-bottom: 1px solid #989898;
        position: relative;
        font-size: 0;
        display: flex;
    }
    .unit-title,.unit-name{
        display: inline-block;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
    }
    .unit-title{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .unit-name{
       flex: 1;
        padding: 0 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .result-content{
        padding: 10px 10px;
        font-size: 13px;
        color: #656565;
    }
</style>
