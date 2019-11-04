<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
        <div class="list van-hairline--bottom" v-for="(item,index) in list" :key="index" @click="getAppeal(item)">
            <div class="img">
                <img src="../../../assets/wancheng.png" alt="">
            </div>
            <div class="list-info">
                <div class="title">
                    {{item.title}}
                </div>
                <div class="item-info">
                    <div class="bh">{{item.code}}</div>
                    <div class="bh">{{item.time}}</div>
                </div>
            </div>
        </div>
    </van-list>
</template>
<script>
    export default{
        name:'appeal-list',
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push({
                            code: 2019102700765,
                            title:'咨询在异地办理的保安证能否在射洪市使用',
                            time:'2019/10/28'
                        });
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            },
            getAppeal(item){
                this.$router.push({
                    name:'appeal-info',
                    params:{
                        id:item.code,
                        title:item.title
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .list{
        width: 100%;
        height: 60px;
        padding:  5px 10px;
        display: flex;
        justify-content: space-around;
    }
    .img{
        height: 40px;
        width: 40px;
        margin-top: 5px;
        margin-left: 5px;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .list-info{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 15px;
    }
    .item-info{
        display: flex;
        justify-content: space-between;
    }
    .title{
        font-size: 14px;
        text-align: left;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .bh{
        font-size: 12px;
        color: #656565;
    }
</style>
