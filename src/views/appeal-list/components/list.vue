<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
            <div class="list van-hairline--bottom" @click="getAppeal(item)" v-for="(item,index) in list" :key="index" >
                <div class="img">
                    <img src="../../../assets/wancheng.png" alt="" v-if="item.status==='已办结'">
                    <img src="../../../assets/chuli.png" alt="" v-else>
                </div>
                <div class="list-info">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="item-info">
                        <div class="bh">{{item.id}}</div>
                        <div class="bh">{{item.createTime}}</div>
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
                finished: false,
                page:1
            };
        },
        filters:{
            dateformat(time) {
                let params = 'y-M-d h:m:s'
                let date = new Date(time),
                    year = date.getFullYear(),
                    month = date.getMonth() + 1,
                    day = date.getDate(),
                    hour = date.getHours(),
                    minute = date.getMinutes(),
                    second = date.getSeconds()

                let arr = params.split('')
                let result = ''
                for (let i = 0; i < arr.length; i += 2) {
                    let tem = arr[i + 1] === undefined ? '' : arr[i + 1]
                    switch (arr[i]) {
                        case 'y':
                            result += addZero(year) + tem
                            break
                        case 'M':
                            result += addZero(month) + tem
                            break
                        case 'd':
                            result += addZero(day) + tem
                            break
                        case 'h':
                            result += addZero(hour) + tem
                            break
                        case 'm':
                            result += addZero(minute) + tem
                            break
                        case 's':
                            result += addZero(second)
                            break
                    }
                }
                function addZero(obj) {
                    return obj < 10 ? '0' + obj : obj
                }


                return result
            },
        },
        methods: {
            search(data){
                this.list = []
                this.page = 1
                this.onLoad(data)
                this.loading = true
                this.finished = false
            },
            onLoad(data={}) {
                this.$api.index.getAppeaList({pg:this.page,...data}).then(res=>{
                    this.loading = false
                    if(res.if_next){
                        this.page= this.page + 1
                    }
                    this.list=[...this.list,...res.sq_list]
                    this.finished = !res.if_next
                })

            },
            getAppeal(item){
                this.$router.push({
                    name:'appeal-info',
                    params:{
                        id:item.id,
                        title:item.title
                    }
                })
            },
        }
    }
</script>
<style scoped>
    .van-list{
        width: 100%
    }
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
        height: 40px;
        width: 40px;
    }
    .list-info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 15px;
        width: 90%;
    }
    .item-info{
        display: flex;
        justify-content: space-between;
    }
    .title{
        font-size: 14px;
        text-align: left;
        width: 50%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .bh{
        font-size: 12px;
        color: #656565;
    }
</style>
