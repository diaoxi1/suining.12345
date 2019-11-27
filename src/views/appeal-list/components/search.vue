<template>
    <div >
        <van-sticky>
            <div class="searchTbas">
                <van-tabs v-model="active" class="tbs">
                    <van-tab title="简单查询">
                        <van-field v-model="id" placeholder="请输入上单编号" label="上单编号" clearable/>
                        <van-field v-model="phone" placeholder="请输入电话号码" label="电话号码" clearable/>
                    </van-tab>
                    <van-tab title="多条件查询">
                        <van-field v-model="startTime" placeholder="请选择开始时间" label="开始时间" readonly clearable @click="startDate(true)"/>
                        <van-field v-model="endTime" placeholder="请选择结束时间" label="结束时间" readonly clearable @click="startDate(false)"/>
                        <van-cell title="情况" :value="status" @click="show2=true" />
                    </van-tab>
                </van-tabs>
                <div class="search-button" @click="handelClick">
                    查询
                </div>
            </div>

        </van-sticky>
        <van-popup v-model="show" position="bottom" @close="onClose" >
            <van-datetime-picker
                    class
                    v-model="currentDate"
                    type="date"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @confirm="confirm"
            />
        </van-popup>
        <van-action-sheet v-model="show2" :actions="actions" @select="onSelect" />
    </div>

</template>
<script>
    export default{
        name:'searchTbas',
        data(){
            return {
                active: 0,
                id: null,
                phone: null,
                startTime: null,
                endTime:null,
                status:'全部',
                statusValue:1,
                show: false,
                minHour: 10,
                maxHour: 20,
                minDate: new Date(2000,1,1),
                maxDate: new Date(),
                currentDate: new Date(),
                isStart:true,
                show2: false,
                actions: [
                    { name: '全部',value:1},
                    { name: '已受理',value:2},
                    { name: '已结办',value:3}
                ]
            }
        },
        methods: {
            startDate(tmp) {
                this.isStart = true
                if(!tmp){
                    this.isStart = false
                }
                this.show = true
            },
            onClose() {
                this.show = false
            },
            confirm(value) {
                if(this.isStart){
                    this.startTime = this.dateformat('y-M-d',value)
                }else{
                    this.endTime = this.dateformat('y-M-d',value)
                }
                this.show = false
            },
            onSelect(item) {
                this.status = item.name
                this.statusValue = item.value
                this.show2 = false;
            },
            dateformat(params,time) {
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
                            result += this.addZero(year) + tem
                            break
                        case 'M':
                            result += this.addZero(month) + tem
                            break
                        case 'd':
                            result += this.addZero(day) + tem
                            break
                        case 'h':
                            result += this.addZero(hour) + tem
                            break
                        case 'm':
                            result += this.addZero(minute) + tem
                            break
                        case 's':
                            result += this.addZero(second)
                            break
                    }
                }
                return result
            },
            addZero(obj) {
                return obj < 10 ? '0' + obj : obj
            },
            handelClick(){
                let data = {}
                if(this.active===0){
                    data.id=this.id
                    data.phone=this.phone
                }else{
                    data.beginTime=this.startTime
                    data.endTime = this.endTime
                    data.state = this.statusValue
                    data.flag = 1
                }
                this.$emit('search',data)
            }
        }
    }
</script>
<style scoped>
    .searchTbas{
        background: #fff;
    }
    .tbs{
        margin-bottom: 10px;
    }
    .search-button{
        width: 90%;
        margin-left: 5%;
        height: 35px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #c1c1c1;
        line-height: 35px;
        border-radius: 5px;
        color: #989898;
    }
</style>
