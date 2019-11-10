<template>
    <div class="submit">
        <van-sticky>
            <van-nav-bar
                    :title="title"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </van-sticky>
        <van-cell-group>
            <van-field
                    v-model="type"
                    required
                    clearable
                    label="诉求类型"
                    placeholder="请输选择诉求类型"
            />
            <van-field
                    v-model="city"
                    required
                    clearable
                    label="事件辖区"
                    placeholder="请输选择事件辖区"
            />
            <van-field
                    v-model="heade"
                    required
                    rows="2"
                    autosize
                    label="诉求标题"
                    type="textarea"
                    placeholder="请输入标题"
            />
            <van-field
                    v-model="content"
                    required
                    rows="5"
                    autosize
                    label="诉求内容"
                    type="textarea"
                    placeholder="请输入诉求类荣"
            />
        </van-cell-group>
        <van-button type="primary" style="width: 100%;margin-top: 20px" @click="submit" >立即提交</van-button>
    </div>
</template>

<script>
    export default {
        name:'submit',
        data(){
            return{
                title:'',
                type:null,
                city:null,
                heade:null,
                content:null

            }
        },
        activated(){
            if(this.$route.params.type==='secretary'){
                this.title ='市长信箱'
            }else{
                this.title ='书记信箱'
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            },
            submit(){
               let s =  this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true
                });
                setTimeout(()=>{
                    s.clear();
                    this.$toast.success('诉求提交成功');
                    this.type = null
                    this.city = null
                    this.heade = null
                    this.content = null
                },2000)
            }
        }

    }
</script>

<style scoped>
    
</style>