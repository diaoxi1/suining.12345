<template>
    <div class="user">
        <van-sticky>
            <van-nav-bar
                    title="个人中心"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </van-sticky>
        <div class="info van-hairline--bottom">
            <img src="../../assets/touxiang.png" alt="">
            <span>{{name}}</span>
        </div>
        <item_bar></item_bar>
        <div class="list-box">
                <div class="title">
                    我的诉求
                </div>
            <van-list
                    v-if="list2"
                    v-model="loading"
                    :finished="finished"
                    finished-text="您还没有诉求"
                    @load="onLoad">
                <div class="list van-hairline--bottom" v-for="(item,index) in list" :key="index" @click="getAppeal(item)">
                    <div class="img">
                        <img src="../../assets/wancheng.png" alt="" v-if="item.status==='已办结'">
                        <img src="../../assets/chuli.png" alt="" v-else>
                    </div>
                    <div class="list-info">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="item-info">
                            <div class="bh">{{item.id}}</div>
                            <div class="bh">{{item.time | dateformat}}</div>
                        </div>
                    </div>
                </div>
            </van-list>
        </div>
    </div>
</template>
<script>
    import item_bar from '../home/component/item-bar'
    export default {
        name:'user',
        data(){
            return{
                list: [],
                loading: false,
                finished: false,
                page:1,
                list2:true,
                name:'欢迎您，用户'
            }
        },
        components:{
            item_bar
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
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            },
            onLoad() {
                this.$api.index.myAppealInfo({pg:this.page}).then(res=>{
                    this.loading = false
                    this.name = res.userName
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
    .info{
        height: 150px;
        width: 100%;
        position: relative;
    }
    .info img{
        width: 70px;
        height: 70px;
        overflow: hidden;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .info span{
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
    }

    .title{
        width: 50%;
        height: 40px;
        font-size: 14px;
        text-align: left;
        padding-left: 15px;
        color: #656565;
        line-height: 40px;
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
