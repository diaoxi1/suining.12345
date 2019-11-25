<template>
    <div class="appeal-list">
        <van-nav-bar
                title="诉求列表"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        >
            <van-icon name="user-o" slot="right" size="2em" @click="userInfo"/>
        </van-nav-bar>
        <searchTbas @search="search"></searchTbas>
        <list ref="list"></list>
    </div>
</template>
<script>
    import searchTbas from './components/search'
    import list from './components/list'
    export default{
        name:'appeal-list',
        components:{
            searchTbas,
            list
        },
        data(){
            return{
                active:0,
                datas:{}
            }
        },
        methods:{
            onClickLeft() {
                this.$router.go(-1)
            },
            search(data){
                this.$refs.list.search(data)
            },
            userInfo(){
                if(!this.$store.getters.getToken){
                    this.$router.push({name:'login'})
                }else{
                    this.$router.push({name:'user'})
                }

            }
        }
    }
</script>
<style scoped>
    .appeal-list{
        width: 100%;
        height: 100%;
    }

</style>
