<template>
    <div class="work-list">
        <van-nav-bar
                title="工作动态"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <list></list>
    </div>
</template>
<script>
    import list from './component/list'
    export default{
        name:'work-list',
        components:{
            list
        },
        methods:{
            onClickLeft() {
               this.$router.go(-1)
            },
        }
    }
</script>
<style scoped>
    .work-list{
        width: 100%;
        height: 100%;
    }

</style>
