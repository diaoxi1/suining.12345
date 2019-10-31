<template>
    <div class="copyright">
        <div class="banner van-hairline--top-bottom">
            <div class="left">
                <img src="../assets/copyright/fangxiang.png" alt="">
            </div>
            <div class="centent">
                <img class="content-imgs" :src="item" v-for="(item,index) in images" :key="index">
            </div>
            <div class="right">
                <img src="../assets/copyright/fangxiang2.png" alt="">
            </div>
        </div>
        <div class="link-array van-hairline--top-bottom">
            <span>法律声明</span><span>联系我们</span><span>使用帮助</span>
        </div>
        <div class="infos">
            <span>Copyright © 2011 rsj.scsn.gov.cn All Rights Reserved</span>
            <span>蜀ICP备05028878号　遂公网安备51090002000064</span>
            <span>版权所有：遂宁市政府服务热线 遂宁市效能办</span>
        </div>
    </div>
</template>
<script>
    export default{
        name:'copyright',
        data(){
            return {
                images:[
                    require('../assets/copyright/scsrmzf.png'),
                    require('../assets/copyright/zyrmzf.png'),
                    require('../assets/copyright/scfb.jpg'),
                    require('../assets/copyright/snggzy.jpg'),
                    require('../assets/copyright/snsjw.jpg'),
                    require('../assets/copyright/snxww.jpg'),
                    require('../assets/copyright/tdt.jpg')
                ]
            }
        }
    }
</script>

<style scoped>
    .banner{
        width: 100%;
        height: 80px;
        display: flex;
        padding: 0 10px;
    }
    .left{
        height: 100%;
        width: 14px;
        position: relative;
    }
    .left img,.right img{
        width: 100%;
        height: 22px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .centent{
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: space-around;
    }
    .content-imgs{
        width: 140px;
        height: 45px;
        display: block;
        margin-top: 17.5px;
    }
    .right{
        width: 14px;
        height: 100%;
        position: relative;
    }
    .link-array{
        width: 100%;
        text-align: center;
        height: 40px;
        font-size: 0;
    }
    .link-array span{
        padding: 0 20px;
        display: inline-block;
        font-size: 13px;
        line-height: 20px;
        margin-top: 10px;
        color: #656565;
    }
    .link-array span:nth-child(2){
        border-right: 1px solid #989898;
        border-left: 1px solid #989898;
    }
    .infos{
        font-size: 12px;
        color: #656565;
        text-align: center;
        line-height: 25px;
        margin-bottom: 10px;
    }
    .infos span{
        display: block;
    }
</style>
