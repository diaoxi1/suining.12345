<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
        <div class="list">
            <div class="img">
                <img src="../../../assets/wancheng.png" alt="">
            </div>
            <div class="list-info">

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
                            id: 1234+i,
                            title:'标题'+i,
                            time:'2019-11-03'
                        });
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
    }
</script>
<style scoped>
    .list{
        width: 100%;
        height: 50px;
        padding:  0 10px;
        display: flex;
        justify-content: space-around;
    }
    .img{
        height: 50px;
        width: 50px;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .list-info{
        flex: 1;

    }
</style>
