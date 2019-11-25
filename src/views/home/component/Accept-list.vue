<template>
    <div class="dynamic">
        <div class="title">
            <span class="gzdt">受理公开</span>
            <span class="gd" @click="$router.push({name:'appeal-list'})">更多</span>
        </div>
        <div class="list">
            <table>
                <tr class="list-title">
                    <td>来电标题</td>
                    <td>来电时间</td>
                    <td>处理情况</td>
                </tr>
                <van-loading  v-if="loading"></van-loading>
                <template v-for="item in bill">
                    <tr @click="acceptClick(item.id)">
                        <td>{{item.title}}</td><td>{{item.createTime}}</td><td>{{item.status}}</td>
                    </tr>
                </template>
            </table>
        </div>
    </div>
</template>
<script>
    export default{
        name:'accept-list',
        props:{
            bill:{
                type:Array,
                default:()=> [],
                required:true
            },
            loading:[Boolean]
        },
        methods:{
            acceptClick(id){
                this.$router.push({name:'appeal-info',params:{ id }})
            }
        },
        filters:{
            dataTime(tiem){
                return tiem.split(' ')[0]
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
    .list{
        padding: 0 10px;
    }
    table{
        width: 100%;
    }
    table tr{
        font-size: 0;
        border-bottom:1px solid #f2f2f2;
        display: flex;
        justify-content: space-between;
    }
    table tr td:first-child{
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    table td{
        display: inline-block;
        font-size: 12px;
        color: #686868;
        text-align: center;
        height: 30px;
        line-height: 30px;
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
