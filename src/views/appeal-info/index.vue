<template>
    <div class="appeal-list">
        <van-sticky>
            <van-nav-bar
                    :title="title"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </van-sticky>
        <van-loading v-if="show"></van-loading>
        <template v-else>
           <div class="van-hairline--bottom">
               <div class="title ">诉求</div>
           </div>
            <div class="h">
                <div class="lable">诉求编号：</div>
                <div class="value">{{BILLID}}</div>
            </div>
            <div class="h">
                <div class="lable">信息来源：</div>
                <div class="value">{{ LYNAME | unicode }}</div>
            </div>
            <div class="h">
                <div class="lable">来电时间：</div>
                <div class="value">{{CREATE_TIME | unicode}}</div>
            </div>
            <div class="h">
                <div class="lable">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题：</div>
                <div class="value">{{KEYWORD | unicode}}</div>
            </div>
            <div class="wnti">
                <div class="lable">问题摘要：</div>
                <div class="value gd">
                    {{CONTENT | unicode}}
                </div>
            </div>
            <div class="split-line"></div>

            <template v-for="item in CB">
                <div class="result">
                    <div class="title">处理结果</div>
                    <div class="result-info">
                        <div class="unit">
                            <span class="unit-title">处理单位：</span>
                            <span class="unit-name">{{item.name | unicode}}</span>
                        </div>
                        <div class="result-content">
                            {{item.cb | unicode}}
                        </div>
                    </div>
                </div>
            </template>

            <div class="split-line"></div>
            <copyright></copyright>
        </template>
    </div>
</template>
<script>
    export default{
        name:'appeal-info',
        data(){
          return {
              title:'',
              BILLID:'',
              LYNAME:'',
              CREATE_TIME:'',
              KEYWORD:'',
              CONTENT:'',
              CB:[],
              show:true
          }
        },
        activated(){
            this.$api.index.getAppealInfo(this.$route.params.id).then(res=>{
                if(res.Data.length){
                    this.title = this.unicodes(res.Data[0].KEYWORD)
                    this.BILLID = res.Data[0].BILLID
                    this.LYNAME = res.Data[0].LYNAME
                    this.CREATE_TIME = res.Data[0].CREATE_TIME
                    this.KEYWORD = res.Data[0].KEYWORD
                    this.CONTENT = res.Data[0].CONTENT
                    res.Data.map(item=>{
                        this.CB.push({
                            name:item.NAME,
                            cb:item.CB_CONTENT
                        })
                    })
                    this.show = false
                }
            })
        },
        methods:{
            onClickLeft() {
                this.$router.go(-1)
            },
            unicodes(code){
                let str = eval("'"+code+"'");
                str = unescape(str.replace(/\u/g, "%u"))
                return str.replace(/[%]/g,"")
            }
        },
        filters:{
            unicode(code){
                let str = eval("'"+code+"'");
                str = unescape(str.replace(/\u/g, "%u"))
                return str.replace(/[%]/g,"")
            }
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
