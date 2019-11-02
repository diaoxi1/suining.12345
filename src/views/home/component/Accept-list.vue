<template>
    <div class="dynamic">
        <div class="title">
            <span class="gzdt">受理公开</span>
            <span class="gd">更多</span>
        </div>
        <div class="list">
            <table>
                <tr class="list-title">
                    <td>来电标题</td>
                    <td>来电时间</td>
                    <td>处理情况</td>
                </tr>
                <tr>
                    <td>路灯未开启路灯未开</td>
                    <td>2019-10-15</td>
                    <td>已结办</td>
                </tr>
                <tr>
                    <td>路灯未开启</td>
                    <td>2019-10-15</td>
                    <td>已结办</td>
                </tr>
                <tr>
                    <td>路灯未开启</td>
                    <td>2019-10-15</td>
                    <td>已结办</td>
                </tr>
                <tr>
                    <td>路灯未开启</td>
                    <td>2019-10-15</td>
                    <td>已结办</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default{
        name:'accept-list',
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
    .list{
        padding: 0 10px;
    }
    table{
        width: 100%;
    }

    table td{
        font-size: 12px;
        color: #686868;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-bottom:1px solid #f2f2f2;
    }
    .list-title{
        width: 100%;
        font-size: 14px;
        text-align: center;
    }
    .list-title td{
        color: #282828!important;
    }
    table tr td:first-child{
        text-align: left;
    }
    table tr td:last-child{
        text-align: right;
    }

</style>
