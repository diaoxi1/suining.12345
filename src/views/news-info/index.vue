<template>
    <div class="work-list">
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
                <div class="title  van-multi-ellipsis--l2">
                    {{title}}
                </div>
                <div class="date">
                    <div>{{ time[0] }} {{time[1]}}</div>
                    <div>{{ reading }}</div>
                </div>
                <div class="line"></div>
                <div class="content">
                    <div class="box html-text" v-html="html"></div>
                </div>
            </template>

            <div class="split-line"></div>
            <copyright></copyright>
    </div>
</template>
<script>
    export default{
        name:'work-list',
        data(){
            return{
                title:'新闻标题',
                html:``,
                reading:0,
                time:'',
                show:true
            }
        },
        methods:{
            onClickLeft() {
                this.$router.go(-1)
            }
        },
        activated(){
            this.show = true
            let { id } = this.$route.params
            this.$api.index.getWork(id).then(res=>{
                this.title = res.title
                this.html = res.detail.join('')
                this.time =res.time
                this.reading = res.reading
                this.show = false
            })
        }
    }
</script>
<style scoped>
    .work-list{
        height: 100%;
    }
    .title{
        height: 50px;
        padding: 0 15px;
        text-align: center;
        font-size: 18px;
        color: #282828;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 20px;
    }
    .date{
        margin-top: 10px;
        height: 20px;
        padding: 0 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #989898;
        margin-bottom: 10px;
    }
    .content{
        padding: 0px 10px 15px 10px;
    }
    .box{
        padding-top: 15px;
        border-top: 1px solid #656565;
        font-size: 14px!important;
        overflow: hidden;
    }
</style>
