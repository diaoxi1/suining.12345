<template>
    <div class="dynamic">
        <div class="title">
            <span class="gzdt">工作动态</span>
            <router-link class="gd" to="/work-list">更多</router-link>
        </div>
        <div class="list">
            <van-loading  v-if="loading"></van-loading>
            <template v-for="(item) in work">
                <div @click="newsInfo(item.id)" class="van-hairline--bottom item"><span class="dian"></span>{{item.text}}</div>
            </template>
        </div>
    </div>
</template>
<script>
export default{
    name:'dynamic-list',
    props:{
        work:{
            type:Array,
            default:()=>[],
            required: true
        },
        loading:[Boolean]
    },
    methods:{
        newsInfo(id){
            this.$router.push({name:'news-info',params:{ id }})
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
</style>
