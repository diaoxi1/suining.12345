<template>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
    >
        <div class="list">
            <div v-for="(item,index) in list"
                 :key="index"
                 :title="item.text"
                 @click="newsInfo(item.id)"
                 class="van-hairline--bottom item">
                <span class="dian"></span>
                {{item.text}}
            </div>
        </div>

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
                error:false,
                pg:1,
                key:null
            }
        },
        activated(){
            this.loading=true
            this.pg = 1
            this.list = []
            this.finished=false
            this.key = this.$route.params.key
            this.onLoad()
        },
        methods: {
            onLoad() {
                this.$api.work.getWork(this.pg,this.key).then(res=>{
                    this.loading = false
                    if(res.if_next){
                        this.pg = res.pg +1
                        this.list.push(...res.work_list)
                    }else {
                        let tmp = []
                        if(res.work_list.length>2){
                            tmp = res.work_list.splice(1,res.work_list.length-1)
                        }
                        this.list.push(...tmp)
                    }
                    this.finished = !res.if_next

                })
            },
            newsInfo(id){
                this.$router.push({name:'news-info',params:{ id }})
            }
        }
    }
</script>
<style scoped>
    .list{
        width: 100%;
        height: calc(100% - 37px);
        padding: 0 10px;
    }
    .list .item{
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        width: 95%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 5px;
        box-sizing: content-box;
    }

    .dian {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        margin: 0 15px;
        background: #656565;
        display: inline-block;
    }
</style>
