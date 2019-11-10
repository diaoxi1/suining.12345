<template>
    <div class="login">
        <div class="logo">
            <img src="../../assets/logo2.png" alt="">
        </div>
        <div class="form">
            <div class="form-box">
                <div class="form-item">
                    <span>用户名：</span>
                    <input type="text" v-model="user">
                </div>
                <div class="form-item">
                    <span>密&nbsp;&nbsp;码：</span>
                    <input type="password" v-model="pwd">
                </div>
            </div>
        </div>
        <div class="form-btn" @click="login">
            <div class="login-btn">
                登陆
            </div>
        </div>
        <div class="regist">
            没有账户？现在去<span @click="register">注册</span>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default{
        name:'login',
        data(){
          return {
              user:'',
              pwd:''
          }
        },
        methods:{
            ...mapMutations(['setToken']),
            login(){
                this.$api.index.login({user:this.user,pwd:this.pwd}).then(res=>{
                    this.setToken(res.token)
                    this.$router.push({ path:'/user' })
                })
            },
            register(){
                this.$router.push({ path:'/register' })
            }
        }
    }
</script>
<style scoped>
    .login{
        height: 100%;
        width: 100%;
        background:url("../../assets/login/bg.png")no-repeat;
        background-size: 100% 100%;
        padding-top: 70px;
    }
    .logo{
        height: 60px;
        width: 100%;
        text-align: center;
        margin-bottom: 40px;
    }
    .logo img{
        height: 100%;
    }
    .form,.form-btn{
        width: 100%;
        padding: 0 10px;
    }
    .form-box{
        width: 100%;
        height: 170px;
        background: rgba(255,255,255,.6);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        margin-bottom: 30px;
    }
    .form-item{
        font-size: 16px;
        padding: 0 30px 0px 30px;
        height: 35px;
        display: flex;
    }
    .form-item span{
        display: inline-block;
        width: 80px;
        text-align: left;
        height: 100%;
        line-height: 35px;
        color: #656565;
    }
    .form-item input{
        border: 0;
        background: #fff;
        border-radius:5px;
        overflow: hidden;
        height: 100%;
        line-height: 35px;
        flex: 1;
        padding-left: 10px;
    }
    .login-btn{
        width: 100%;
        height: 45px;
        background: #1766c0;
        text-align: center;
        line-height: 45px;
        font-size: 15px;
        color: #ffffff;
        border-radius:5px;
    }
    .regist{
        width: 100%;
        padding: 0 10px;
        text-align: right;
        font-size: 13px;
        color: #656565;
        margin-top: 20px;
    }
    .regist span{
        color: #1766c0;
    }
</style>
