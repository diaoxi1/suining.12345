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
                    label="诉求类型"
                    @click="type_show = true"
                    placeholder="请输选择诉求类型"
            />
            <van-field
                    v-model="ACCEPT_TYPE"
                    required
                    label="诉求类别"
                    @click="ACCEPT_TYPE_SHOW = true"
                    placeholder="请输选择诉求类型"
            />
            <van-field
                    v-model="AREA"
                    required
                    label="事件辖区"
                    @click="AREA_SHOW = true"
                    placeholder="请输选择事件辖区"

            />
            <van-field
                    v-model="data.KEYWORD"
                    required
                    rows="2"
                    autosize
                    label="诉求标题"
                    type="textarea"
                    placeholder="请输入标题"
            />
            <van-field
                    v-model="data.CONTENT"
                    required
                    rows="5"
                    autosize
                    label="诉求内容"
                    type="textarea"
                    placeholder="请输入诉求类荣"
            />
        </van-cell-group>
        <van-button type="primary" style="width: 100%;margin-top: 20px" @click="submit" >立即提交</van-button>

        <van-popup
                v-model="type_show"
                position="bottom">
            <van-picker :columns="HANDLE_TYPE" @cancel="type_show = false" show-toolbar @confirm="typeChange"/>
        </van-popup>

        <van-popup
                v-model="ACCEPT_TYPE_SHOW"
                position="bottom">
            <van-picker :columns="ACCEPT_TYPE_list" @cancel="ACCEPT_TYPE_SHOW = false" show-toolbar @confirm="ACCEPT_TYPE_Changed"/>
        </van-popup>

        <van-popup
                v-model="AREA_SHOW"
                position="bottom">
            <van-picker :columns="AREA_LIST" @cancel="AREA_SHOW = false" show-toolbar @confirm="AREA_Changed"/>
        </van-popup>

    </div>
</template>

<script>
    export default {
        name:'submit',
        data(){
            return{
                title:'',
                heade:null,
                content:null,

                type:null,
                type_show:false,
                HANDLE_TYPE:['意见建议类','申诉类','求决类','揭发控告类','咨询','其他'],
                data:{
                    HANDLE_TYPE:'',
                    ACCEPT_TYPE:'',
                    AREA:'',
                    KEYWORD:'',
                    CONTENT:''
                },

                ACCEPT_TYPE:null,
                ACCEPT_TYPE_SHOW:false,
                ACCEPT_TYPE_list:['政治综合','经济综合','宣传舆论','纪检监察','劳动社保','教育','卫生计生','科技文体','组织人事','交通能源环保','民政','农村农业','国土资源水利林业','城乡建设','城乡建设','信息产业','商贸旅游','其他','政法'],

                AREA:null,
                AREA_SHOW:false,
                AREA_LIST:['安居区','蓬溪县','大英县','射洪县','船山区','遂宁开发区','河东新区','市直','高新区']
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
            typeChange( value){
                this.type_show = false
                this.type = value
                let arr = {
                    "意见建议类": "601001",
                    "申诉类": "601002",
                    "求决类": "601003",
                    "揭发控告类": "601004",
                    "咨询": "601005",
                    "其他": "601006"
                }
                this.data.HANDLE_TYPE = arr[value]
            },
            submit(){
                console.log(this.data)
                let { HANDLE_TYPE,ACCEPT_TYPE,AREA,KEYWORD,CONTENT } = this.data
                if(!HANDLE_TYPE||!ACCEPT_TYPE||!AREA||!KEYWORD||!CONTENT){
                    this.$toast.fail('必填项不能为空');
                    return
                }
                let s =  this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true
                });
                this.$api.index.putAppeal({ HANDLE_TYPE,ACCEPT_TYPE,AREA,KEYWORD,CONTENT } ).then(res=>{
                    this.$router.go(-1)
                })

            },
            ACCEPT_TYPE_Changed(value){
                this.ACCEPT_TYPE_SHOW = false
                this.ACCEPT_TYPE = value
                let arr = {
                    "政治综合": "602001",
                    "经济综合": "602002",
                    "宣传舆论": "602003",
                    "纪检监察": "602004",
                    "劳动社保": "602006",
                    "教育": "602007",
                    "卫生计生": "602008",
                    "科技文体": "602009",
                    "组织人事": "602010",
                    "交通能源环保": "602011",
                    "民政": "602012",
                    "农村农业": "602013",
                    "国土资源水利林业": "602014",
                    "城乡建设": "602015",
                    "信息产业": "602016",
                    "商贸旅游": "602017",
                    "其他": "602018",
                    "政法": "602005"
                }
                this.data.ACCEPT_TYPE = arr[value]
            },
            AREA_Changed(value){
                this.AREA_SHOW = false
                this.AREA = value
                let arr = {
                    "安居区": "400001",
                    "蓬溪县": "400002",
                    "大英县": "400003",
                    "射洪县": "400004",
                    "船山区": "400005",
                    "遂宁开发区": "400007",
                    "河东新区": "400008",
                    "市直": "400009",
                    "高新区": "400010"
                }
                this.data.AREA = arr[value]
            }
        }

    }
</script>

<style scoped>

</style>
