<template>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
    >
        <van-cell
            v-for="item in list"
              :key="item.id"
              :title="item.title"
              :value="item.time"/>
    </van-list>
</template>
<script>
    export default{
        name:'work-list',
        data(){
            return{
                list: [],
                loading: false,
                finished: false,
                error:false
            }
        },
        methods: {
            onLoad() {
                this.loading = false;
                this.finished = true;
                // this.$api.work.getWork().then(res=>{
                //     this.loading = false;
                //     if (this.list.length >= 40) {
                //         this.finished = true;
                //     }
                // })
                // 异步更新数据

            }
        }
    }
</script>
<style scoped>

</style>
