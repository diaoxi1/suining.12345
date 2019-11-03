<template>
    <div class="register">
        <div class="form">
            <div class="form-item">
                <span>用户名：</span>
                <input type="text">
            </div>
            <div class="form-item">
                <span>手机号：</span>
                <input type="text">
            </div>
            <div class="form-item">
                <span>邮箱：</span>
                <input type="text">
            </div>
            <div class="form-item">
                <span>密码：</span>
                <input type="password">
            </div>
            <div class="form-item">
                <span>确认密码：</span>
                <input type="password">
            </div>
            <div class="form-item">
                <span>提示问题：</span>
                <input type="text">
            </div>
            <div class="form-item">
                <span>提示答案：</span>
                <input type="text">
            </div>
            <div class="form-item">
                <span>您的姓名：</span>
                <input type="text">
            </div>
            <div class="form-item">
                <span>性别：</span>
                <van-radio-group v-model="sex" class="sex">
                    <van-radio name="1">男</van-radio>
                    <van-radio name="2">女</van-radio>
                </van-radio-group>
            </div>
            <div class="form-item">
                <span>身份证号：</span>
                <input type="text">
            </div>
            <div class="form-item">
                <span>地区：</span>
                <input type="text">
            </div>
            <div class="form-item">
                <span>详细地址：</span>
                <input type="text">
            </div>
        </div>
        <div class="submit-btn">
            注册
        </div>
    </div>
</template>
<script>
    export default{
        name:'register',
        data(){
            return {
                sex:1
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
</style>