<template>
    <div class="register">
        <div class="form">
            <div class="form-item">
                <span>用户名：</span>
                <input type="text" v-model="UserName">
            </div>
            <div class="form-item">
                <span>手机号：</span>
                <input type="text" v-model="Phone">
            </div>
            <div class="form-item">
                <span>邮箱：</span>
                <input type="text" v-model="Email">
            </div>
            <div class="form-item">
                <span>密码：</span>
                <input type="password" v-model="Password">
            </div>
            <div class="form-item">
                <span>确认密码：</span>
                <input type="password" v-model="Password1">
            </div>
            <div class="form-item">
                <span>提示问题：</span>
                <input type="text" v-model="TsQestion">
            </div>
            <div class="form-item">
                <span>提示答案：</span>
                <input type="text" v-model="TsAnswer">
            </div>
            <div class="form-item">
                <span>您的姓名：</span>
                <input type="text" v-model="RealName">
            </div>
            <div class="form-item">
                <span>性别：</span>
                <van-radio-group v-model="sex" class="sex">
                    <van-radio name="1">男</van-radio>
                    <van-radio name="0">女</van-radio>
                </van-radio-group>
            </div>
            <div class="form-item">
                <span>身份证号：</span>
                <input type="text" v-model="IDNumber">
            </div>
            <div class="form-item">
                <span>地区：</span>
                <select style="width: 30%;margin-left: 20px">
                    <option value="1">四川省</option>
                </select>
                <select @change="handelChange" style="width: 30%">
                    <template v-for="(value, name) in shi">
                        <option :value="name" :selected="name=='2962'?true:false">{{value}}</option>
                    </template>

                </select>
                <select style="width: 28%" @click="handleQu">
                    <option :value="value.AreaId" v-for="(value) of qu2">{{value.AreaName}}</option>
                </select>
            </div>
            <div class="form-item">
                <span>详细地址：</span>
                <input type="text"  v-model="Address">
            </div>
        </div>
        <div class="submit-btn" @click="handelClick">
            注册
        </div>
    </div>
</template>
<script>
    export default{
        name:'register',
        data(){
            return {
                shi:{
                    "2955": "成都市",
                    "2956": "自贡市",
                    "2957": "攀枝花市",
                    "2958": "泸州市",
                    "2959": "德阳市",
                    "2960": "绵阳市",
                    "2961": "广元市",
                    "2962": "遂宁市",
                    "2963": "内江市",
                    "2964": "乐山市",
                    "2965": "南充市",
                    "2966": "眉山市",
                    "2967": "宜宾市",
                    "2968": "广安市",
                    "2969": "达州市",
                    "2970": "雅安市",
                    "2971": "巴中市",
                    "2972": "资阳市",
                    "2973": "阿坝藏族羌族自治州",
                    "2974": "甘孜藏族自治州",
                    "2975": "凉山彝族自治州"
                },
                qu:{
                    "2955": [{
                        "AreaId": "2976",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "2977",
                        "AreaName": "锦江区"
                    }, {
                        "AreaId": "2978",
                        "AreaName": "青羊区"
                    }, {
                        "AreaId": "2979",
                        "AreaName": "金牛区"
                    }, {
                        "AreaId": "2980",
                        "AreaName": "武侯区"
                    }, {
                        "AreaId": "2981",
                        "AreaName": "成华区"
                    }, {
                        "AreaId": "2982",
                        "AreaName": "龙泉驿区"
                    }, {
                        "AreaId": "2983",
                        "AreaName": "青白江区"
                    }, {
                        "AreaId": "2984",
                        "AreaName": "新都区"
                    }, {
                        "AreaId": "2985",
                        "AreaName": "温江区"
                    }, {
                        "AreaId": "2986",
                        "AreaName": "金堂县"
                    }, {
                        "AreaId": "2987",
                        "AreaName": "双流县"
                    }, {
                        "AreaId": "2988",
                        "AreaName": "郫县"
                    }, {
                        "AreaId": "2989",
                        "AreaName": "大邑县"
                    }, {
                        "AreaId": "2990",
                        "AreaName": "蒲江县"
                    }, {
                        "AreaId": "2991",
                        "AreaName": "新津县"
                    }, {
                        "AreaId": "2992",
                        "AreaName": "都江堰市"
                    }, {
                        "AreaId": "2993",
                        "AreaName": "彭州市"
                    }, {
                        "AreaId": "2994",
                        "AreaName": "邛崃市"
                    }, {
                        "AreaId": "2995",
                        "AreaName": "崇州市"
                    }],
                    "2956": [{
                        "AreaId": "2996",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "2997",
                        "AreaName": "自流井区"
                    }, {
                        "AreaId": "2998",
                        "AreaName": "贡井区"
                    }, {
                        "AreaId": "2999",
                        "AreaName": "大安区"
                    }, {
                        "AreaId": "3000",
                        "AreaName": "沿滩区"
                    }, {
                        "AreaId": "3001",
                        "AreaName": "荣县"
                    }, {
                        "AreaId": "3002",
                        "AreaName": "富顺县"
                    }],
                    "2957": [{
                        "AreaId": "3003",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3004",
                        "AreaName": "东区"
                    }, {
                        "AreaId": "3005",
                        "AreaName": "西区"
                    }, {
                        "AreaId": "3006",
                        "AreaName": "仁和区"
                    }, {
                        "AreaId": "3007",
                        "AreaName": "米易县"
                    }, {
                        "AreaId": "3008",
                        "AreaName": "盐边县"
                    }],
                    "2958": [{
                        "AreaId": "3009",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3010",
                        "AreaName": "江阳区"
                    }, {
                        "AreaId": "3011",
                        "AreaName": "纳溪区"
                    }, {
                        "AreaId": "3012",
                        "AreaName": "龙马潭区"
                    }, {
                        "AreaId": "3013",
                        "AreaName": "泸县"
                    }, {
                        "AreaId": "3014",
                        "AreaName": "合江县"
                    }, {
                        "AreaId": "3015",
                        "AreaName": "叙永县"
                    }, {
                        "AreaId": "3016",
                        "AreaName": "古蔺县"
                    }],
                    "2959": [{
                        "AreaId": "3017",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3018",
                        "AreaName": "旌阳区"
                    }, {
                        "AreaId": "3019",
                        "AreaName": "中江县"
                    }, {
                        "AreaId": "3020",
                        "AreaName": "罗江县"
                    }, {
                        "AreaId": "3021",
                        "AreaName": "广汉市"
                    }, {
                        "AreaId": "3022",
                        "AreaName": "什邡市"
                    }, {
                        "AreaId": "3023",
                        "AreaName": "绵竹市"
                    }],
                    "2960": [{
                        "AreaId": "3024",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3025",
                        "AreaName": "涪城区"
                    }, {
                        "AreaId": "3026",
                        "AreaName": "游仙区"
                    }, {
                        "AreaId": "3027",
                        "AreaName": "三台县"
                    }, {
                        "AreaId": "3028",
                        "AreaName": "盐亭县"
                    }, {
                        "AreaId": "3029",
                        "AreaName": "安县"
                    }, {
                        "AreaId": "3030",
                        "AreaName": "梓潼县"
                    }, {
                        "AreaId": "3031",
                        "AreaName": "北川羌族自治县"
                    }, {
                        "AreaId": "3032",
                        "AreaName": "平武县"
                    }, {
                        "AreaId": "3033",
                        "AreaName": "江油市"
                    }],
                    "2961": [{
                        "AreaId": "3034",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3035",
                        "AreaName": "利州区"
                    }, {
                        "AreaId": "3036",
                        "AreaName": "昭化区"
                    }, {
                        "AreaId": "3037",
                        "AreaName": "朝天区"
                    }, {
                        "AreaId": "3038",
                        "AreaName": "旺苍县"
                    }, {
                        "AreaId": "3039",
                        "AreaName": "青川县"
                    }, {
                        "AreaId": "3040",
                        "AreaName": "剑阁县"
                    }, {
                        "AreaId": "3041",
                        "AreaName": "苍溪县"
                    }],
                    "2962": [{
                        "AreaId": "3043",
                        "AreaName": "船山区"
                    }, {
                        "AreaId": "3044",
                        "AreaName": "安居区"
                    }, {
                        "AreaId": "3045",
                        "AreaName": "蓬溪县"
                    }, {
                        "AreaId": "3046",
                        "AreaName": "射洪县"
                    }, {
                        "AreaId": "3047",
                        "AreaName": "大英县"
                    }],
                    "2963": [{
                        "AreaId": "3048",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3049",
                        "AreaName": "市中区"
                    }, {
                        "AreaId": "3050",
                        "AreaName": "东兴区"
                    }, {
                        "AreaId": "3051",
                        "AreaName": "威远县"
                    }, {
                        "AreaId": "3052",
                        "AreaName": "资中县"
                    }, {
                        "AreaId": "3053",
                        "AreaName": "隆昌县"
                    }],
                    "2964": [{
                        "AreaId": "3054",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3055",
                        "AreaName": "市中区"
                    }, {
                        "AreaId": "3056",
                        "AreaName": "沙湾区"
                    }, {
                        "AreaId": "3057",
                        "AreaName": "五通桥区"
                    }, {
                        "AreaId": "3058",
                        "AreaName": "金口河区"
                    }, {
                        "AreaId": "3059",
                        "AreaName": "犍为县"
                    }, {
                        "AreaId": "3060",
                        "AreaName": "井研县"
                    }, {
                        "AreaId": "3061",
                        "AreaName": "夹江县"
                    }, {
                        "AreaId": "3062",
                        "AreaName": "沐川县"
                    }, {
                        "AreaId": "3063",
                        "AreaName": "峨边彝族自治县"
                    }, {
                        "AreaId": "3064",
                        "AreaName": "马边彝族自治县"
                    }, {
                        "AreaId": "3065",
                        "AreaName": "峨眉山市"
                    }],
                    "2965": [{
                        "AreaId": "3066",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3067",
                        "AreaName": "顺庆区"
                    }, {
                        "AreaId": "3068",
                        "AreaName": "高坪区"
                    }, {
                        "AreaId": "3069",
                        "AreaName": "嘉陵区"
                    }, {
                        "AreaId": "3070",
                        "AreaName": "南部县"
                    }, {
                        "AreaId": "3071",
                        "AreaName": "营山县"
                    }, {
                        "AreaId": "3072",
                        "AreaName": "蓬安县"
                    }, {
                        "AreaId": "3073",
                        "AreaName": "仪陇县"
                    }, {
                        "AreaId": "3074",
                        "AreaName": "西充县"
                    }, {
                        "AreaId": "3075",
                        "AreaName": "阆中市"
                    }],
                    "2966": [{
                        "AreaId": "3076",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3077",
                        "AreaName": "东坡区"
                    }, {
                        "AreaId": "3078",
                        "AreaName": "仁寿县"
                    }, {
                        "AreaId": "3079",
                        "AreaName": "彭山县"
                    }, {
                        "AreaId": "3080",
                        "AreaName": "洪雅县"
                    }, {
                        "AreaId": "3081",
                        "AreaName": "丹棱县"
                    }, {
                        "AreaId": "3082",
                        "AreaName": "青神县"
                    }],
                    "2967": [{
                        "AreaId": "3083",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3084",
                        "AreaName": "翠屏区"
                    }, {
                        "AreaId": "3085",
                        "AreaName": "南溪区"
                    }, {
                        "AreaId": "3086",
                        "AreaName": "宜宾县"
                    }, {
                        "AreaId": "3087",
                        "AreaName": "江安县"
                    }, {
                        "AreaId": "3088",
                        "AreaName": "长宁县"
                    }, {
                        "AreaId": "3089",
                        "AreaName": "高县"
                    }, {
                        "AreaId": "3090",
                        "AreaName": "珙县"
                    }, {
                        "AreaId": "3091",
                        "AreaName": "筠连县"
                    }, {
                        "AreaId": "3092",
                        "AreaName": "兴文县"
                    }, {
                        "AreaId": "3093",
                        "AreaName": "屏山县"
                    }],
                    "2968": [{
                        "AreaId": "3094",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3095",
                        "AreaName": "广安区"
                    }, {
                        "AreaId": "3096",
                        "AreaName": "前锋区"
                    }, {
                        "AreaId": "3097",
                        "AreaName": "岳池县"
                    }, {
                        "AreaId": "3098",
                        "AreaName": "武胜县"
                    }, {
                        "AreaId": "3099",
                        "AreaName": "邻水县"
                    }, {
                        "AreaId": "3100",
                        "AreaName": "华蓥市"
                    }],
                    "2969": [{
                        "AreaId": "3101",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3102",
                        "AreaName": "通川区"
                    }, {
                        "AreaId": "3103",
                        "AreaName": "达川区"
                    }, {
                        "AreaId": "3104",
                        "AreaName": "宣汉县"
                    }, {
                        "AreaId": "3105",
                        "AreaName": "开江县"
                    }, {
                        "AreaId": "3106",
                        "AreaName": "大竹县"
                    }, {
                        "AreaId": "3107",
                        "AreaName": "渠县"
                    }, {
                        "AreaId": "3108",
                        "AreaName": "万源市"
                    }],
                    "2970": [{
                        "AreaId": "3109",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3110",
                        "AreaName": "雨城区"
                    }, {
                        "AreaId": "3111",
                        "AreaName": "名山区"
                    }, {
                        "AreaId": "3112",
                        "AreaName": "荥经县"
                    }, {
                        "AreaId": "3113",
                        "AreaName": "汉源县"
                    }, {
                        "AreaId": "3114",
                        "AreaName": "石棉县"
                    }, {
                        "AreaId": "3115",
                        "AreaName": "天全县"
                    }, {
                        "AreaId": "3116",
                        "AreaName": "芦山县"
                    }, {
                        "AreaId": "3117",
                        "AreaName": "宝兴县"
                    }],
                    "2971": [{
                        "AreaId": "3118",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3119",
                        "AreaName": "巴州区"
                    }, {
                        "AreaId": "3120",
                        "AreaName": "恩阳区"
                    }, {
                        "AreaId": "3121",
                        "AreaName": "通江县"
                    }, {
                        "AreaId": "3122",
                        "AreaName": "南江县"
                    }, {
                        "AreaId": "3123",
                        "AreaName": "平昌县"
                    }],
                    "2972": [{
                        "AreaId": "3124",
                        "AreaName": "市辖区"
                    }, {
                        "AreaId": "3125",
                        "AreaName": "雁江区"
                    }, {
                        "AreaId": "3126",
                        "AreaName": "安岳县"
                    }, {
                        "AreaId": "3127",
                        "AreaName": "乐至县"
                    }, {
                        "AreaId": "3128",
                        "AreaName": "简阳市"
                    }],
                    "2973": [{
                        "AreaId": "3129",
                        "AreaName": "汶川县"
                    }, {
                        "AreaId": "3130",
                        "AreaName": "理县"
                    }, {
                        "AreaId": "3131",
                        "AreaName": "茂县"
                    }, {
                        "AreaId": "3132",
                        "AreaName": "松潘县"
                    }, {
                        "AreaId": "3133",
                        "AreaName": "九寨沟县"
                    }, {
                        "AreaId": "3134",
                        "AreaName": "金川县"
                    }, {
                        "AreaId": "3135",
                        "AreaName": "小金县"
                    }, {
                        "AreaId": "3136",
                        "AreaName": "黑水县"
                    }, {
                        "AreaId": "3137",
                        "AreaName": "马尔康县"
                    }, {
                        "AreaId": "3138",
                        "AreaName": "壤塘县"
                    }, {
                        "AreaId": "3139",
                        "AreaName": "阿坝县"
                    }, {
                        "AreaId": "3140",
                        "AreaName": "若尔盖县"
                    }, {
                        "AreaId": "3141",
                        "AreaName": "红原县"
                    }],
                    "2974": [{
                        "AreaId": "3142",
                        "AreaName": "康定县"
                    }, {
                        "AreaId": "3143",
                        "AreaName": "泸定县"
                    }, {
                        "AreaId": "3144",
                        "AreaName": "丹巴县"
                    }, {
                        "AreaId": "3145",
                        "AreaName": "九龙县"
                    }, {
                        "AreaId": "3146",
                        "AreaName": "雅江县"
                    }, {
                        "AreaId": "3147",
                        "AreaName": "道孚县"
                    }, {
                        "AreaId": "3148",
                        "AreaName": "炉霍县"
                    }, {
                        "AreaId": "3149",
                        "AreaName": "甘孜县"
                    }, {
                        "AreaId": "3150",
                        "AreaName": "新龙县"
                    }, {
                        "AreaId": "3151",
                        "AreaName": "德格县"
                    }, {
                        "AreaId": "3152",
                        "AreaName": "白玉县"
                    }, {
                        "AreaId": "3153",
                        "AreaName": "石渠县"
                    }, {
                        "AreaId": "3154",
                        "AreaName": "色达县"
                    }, {
                        "AreaId": "3155",
                        "AreaName": "理塘县"
                    }, {
                        "AreaId": "3156",
                        "AreaName": "巴塘县"
                    }, {
                        "AreaId": "3157",
                        "AreaName": "乡城县"
                    }, {
                        "AreaId": "3158",
                        "AreaName": "稻城县"
                    }, {
                        "AreaId": "3159",
                        "AreaName": "得荣县"
                    }],
                    "2975": [{
                        "AreaId": "3160",
                        "AreaName": "西昌市"
                    }, {
                        "AreaId": "3161",
                        "AreaName": "木里藏族自治县"
                    }, {
                        "AreaId": "3162",
                        "AreaName": "盐源县"
                    }, {
                        "AreaId": "3163",
                        "AreaName": "德昌县"
                    }, {
                        "AreaId": "3164",
                        "AreaName": "会理县"
                    }, {
                        "AreaId": "3165",
                        "AreaName": "会东县"
                    }, {
                        "AreaId": "3166",
                        "AreaName": "宁南县"
                    }, {
                        "AreaId": "3167",
                        "AreaName": "普格县"
                    }, {
                        "AreaId": "3168",
                        "AreaName": "布拖县"
                    }, {
                        "AreaId": "3169",
                        "AreaName": "金阳县"
                    }, {
                        "AreaId": "3170",
                        "AreaName": "昭觉县"
                    }, {
                        "AreaId": "3171",
                        "AreaName": "喜德县"
                    }, {
                        "AreaId": "3172",
                        "AreaName": "冕宁县"
                    }, {
                        "AreaId": "3173",
                        "AreaName": "越西县"
                    }, {
                        "AreaId": "3174",
                        "AreaName": "甘洛县"
                    }, {
                        "AreaId": "3175",
                        "AreaName": "美姑县"
                    }, {
                        "AreaId": "3176",
                        "AreaName": "雷波县"
                    }]
                },
                city:'2962',
                qu2:{},
                quValue:'3044',
                sex:'1',
                UserName:null,
                Phone:null,
                Email:null,
                Password:null,
                Password1:null,
                TsQestion:null,
                TsAnswer:null,
                RealName:null,
                IDNumber:null,
                AreaID:null,
                Address:null
            }
        },
        mounted(){
          this.qu2 = this.qu['2962']
        },
        methods:{
            handelClick(){
                let data = {
                        UserName:this.UserName,
                        Phone:this.Phone,
                        Email:this.Email,
                        Password:this.Password,
                        Password1:this.Password1,
                        TsQestion:this.TsQestion,
                        TsAnswer:this.TsAnswer,
                        RealName:this.RealName,
                        IDNumber:this.IDNumber,
                        AreaID:this.quValue,
                        Address:this.Address,
                        sex:this.sex
                }
                this.$api.index.reg(data).then(res=>{
                    Toast.success('注册成功');
                    this.$router.push({ name:'login'})
                })
            },
            onClose(){
                this.show=false
            },
            handelChange(e){
                this.city = e.target.value
                this.qu2 = this.qu[this.city]
            },
            handleQu(e){
                console.log(e)
                this.quValue = e.target.value
            }
        }
    }
</script>
<style scoped>
    .register{
        width: 100%;
        background:url("../../assets/login/bg.png")no-repeat;
        background-size: 100% 100%;
        padding: 10px 10px 15px 10px;
    }
    .form{
        width: 100%;
        background: rgba(255,255,255,.6);
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    .form-item{
        font-size: 16px;
        padding: 0 30px 0px 30px;
        height: 35px;
        display: flex;
        margin-bottom: 15px;
    }
    .form-item:last-child{
        margin-bottom: 0;
    }
    .form-item span{
        display: inline-block;
        width: 90px;
        text-align: left;
        height: 100%;
        line-height: 35px;
        color: #656565;
    }
    .form-item input[type='text'],.form-item input[type='password']{
        border: 0;
        background: #fff;
        border-radius:5px;
        overflow: hidden;
        height: 100%;
        line-height: 35px;
        flex: 1;
        padding-left: 10px;
    }
    .sex{
       width: 100%;
        padding-left: 20px;
    }
    .sex .van-radio{
        width: 100px;
        float: left;
    }
    .submit-btn{
        width: 100%;
        height: 45px;
        background: #fff;
        text-align: center;
        line-height: 45px;
        font-size: 15px;
        color: #656565;
        border-radius:5px;
    }
    select{
        border: 0;
    }
    .form-item select:first-child{
        -moz-border-radius-bottomleft:5px;
        -moz-border-radius-topleft: 5px;
    }
</style>