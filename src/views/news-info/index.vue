<template>
    <div class="work-list">
        <van-nav-bar
                title="title"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="title  van-multi-ellipsis--l2">
            市热线办党支部赴蓬溪县开展“不忘初心、牢记使命”红色主题教育活动
        </div>
        <div class="date">
            <div>发布时间:2019-11-12 15:41</div>
            <div>阅读量:1234</div>
        </div>
        <div class="line"></div>
        <div class="content">
            <div class="box html-text" v-html="html">
            </div>
        </div>
        <div class="split-line"></div>
        <copyright></copyright>
    </div>
</template>
<script>
    export default{
        name:'work-list',
        components:{
        },
        data(){
            return{
                title:'新闻标题',
                html:`
                 <p style="text-align: center;">
                 <img src="http://12345.suining.gov.cn//Upload/ueditor/20191022/6370733930008557792174251.png" title="图片1.png" alt="图片1.png" width="470" height="408"></p>
                 <p style="text-indent:42px;line-height:41px"><br></p><p style="text-indent:42px;line-height:41px">
                 <span style="font-family: 'Times New Roman';font-size: 21px">2019</span><span style="font-family: 仿宋_GB2312;font-size: 21px">
                 <span style="font-family:仿宋_GB2312">年是新中国成立</span></span><span style="font-family: 'Times New Roman';font-size: 21px">70</span>
                 <span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">周年。市热线办</span></span>
                 <span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">党</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px">
                 <span style="font-family:仿宋_GB2312">支部结合本次</span>“不忘初心、牢记使命”主题教育活动，为缅怀革命先驱，牢记革命宗旨，促使党员干部牢记“为民服务”的初心，践行“为人民谋幸福”的使命。</span>
                 <span style="font-family: " times="" new="" roman";="" font-size:="" 21px;"="">10<span style="font-family:仿宋_GB2312">月</span>16<span style="font-family:仿宋_GB2312">日</span></span>
                 <span style="font-family: 仿宋_GB2312; font-size: 21px;">，</span><span style="font-family: 仿宋_GB2312; font-size: 21px;">
                 市热线办党支部率领全体党员干部赴蓬溪县旷继勋纪念馆开展“不忘初心、牢记使命”红色主题教育活动。</span></p>
                 <p style="text-indent:42px;line-height:41px"><span style="font-family: 仿宋_GB2312;font-size: 21px"></span></p>
                 <p style="text-indent:42px;line-height:41px"><span style="font-family: 仿宋_GB2312;font-size: 21px"></span></p>
                 <p style="text-indent:43px;line-height:41px"><span style="font-family: 仿宋_GB2312;font-size: 21px">
                 <span style="font-family:仿宋_GB2312">在蓬溪县旷继勋纪念馆广场，举行重温入党誓词宣誓仪式，全体党员面对鲜红的党旗庄严宣誓，进一步强化党章意识、增强党性修养。在馆内，大家怀着崇敬的心情，
                 认真聆听解说员讲述旷继勋烈士的光辉事迹，详细了解旷继勋烈士的成长及发动蓬溪起义的全过程，瞻仰老一辈革命家在艰苦环境下勇往直前、浴血奋战的光辉形象，缅怀革命先烈，接受革命传统</span>
                 “红色”教育洗礼。</span></p><p style="text-indent: 42px; line-height: 41px; text-align: center;">
                 <img src="http://12345.suining.gov.cn/Upload/ueditor/20191022/6370733936161208604515324.png" title="图片2.png" alt="图片2.png" width="487" height="432">
                 <span style="font-family: 仿宋_GB2312;font-size: 21px"></span><br></p><p style="margin-top:0;margin-bottom:0;text-indent:32px;line-height:41px">&nbsp; &nbsp;
                 <span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">
                 随后，全体人员来到镜苑和书苑，参观学习了清朝官吏、</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px">
                 <span style="font-family:仿宋_GB2312">水利专家</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px">
                 <span style="font-family:仿宋_GB2312">张鹏翮清</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px">
                 <span style="font-family:仿宋_GB2312">廉一生的事迹</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px">
                 <span style="font-family:仿宋_GB2312">。</span></span></p><p style="margin-top:0;margin-bottom:0;text-indent:43px;line-height:41px">
                 <span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">
                 通过此次活动的开展，广大党员加强了党性锤炼，培养了爱国感情，陶冶了道德情操。大家纷纷表示，要以此次主题教育活动为契机，以旷继勋烈士为榜样，弘扬革命先烈精神，不忘初心</span></span>
                 <span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">、</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">牢记使命，砥砺前行，争当模范先锋</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">；</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">以张鹏翮为楷模，刚正不阿，公正清廉，服务人民，继续在</span></span><span style="font-family: 'Times New Roman';font-size: 21px">“</span><span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">争先进、高效率、零差错、好形象</span></span><span style="font-family: 'Times New Roman';font-size: 21px">”</span><span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">上狠下功夫</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">；</span></span><span style="font-family: 仿宋_GB2312;font-size: 21px"><span style="font-family:仿宋_GB2312">牢记初心、践行使命，以更加昂扬的精神、饱满的热情、负责的态度、有效的举措、务实的作风，努力开创工作新局面。</span></span></p><p><br></p>`
            }
        },
        methods:{
            onClickLeft() {
                this.$router.go(-1)
            },
        }
    }
</script>
<style scoped>
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
