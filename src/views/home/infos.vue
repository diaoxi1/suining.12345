<template>
    <div class="dynamic">
        <div class="title">
            <span class="gzdt">12345政府服务热线</span>
            <span class="gd">更多</span>
        </div>
        <div class="bg">
            <img src="../../assets/gk.png" alt="">
        </div>
        <div class="content">
            {{content}}
        </div>
    </div>
</template>
<script>
    export default{
        name:'infos',
        data(){
            return{
                content:'一、主要职责 承担全市12345服务热线平台和书记、市长信箱的受理、分办、回访、评价等工作；综合分析和处理群众对政府及部门工作的意见和建议，反馈各类社情民意。' +
                    '协助做好网格化管理工作有关事务性工作。二、内设机构市政府服务热线中心设下列内设机构：（一）综合科。主要承担全市热线工作的综合协调，负责文电会务、后勤保…'
            }
        }
    }
</script>
<style scoped>
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
    .bg{
        width: 100%;
        height: 70px;
    }
    .bg img{
        height: 100%;
        width: 100%;
    }
    .content{
        padding: 10px 10px;
        font-size: 14px;
        line-height: 20px;
    }
</style>
