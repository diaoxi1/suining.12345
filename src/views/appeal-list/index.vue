<template>
    <div class="appeal-list">
        <van-nav-bar
                title="诉求列表"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <searchTbas></searchTbas>
        <list></list>
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
        methods:{
            onClickLeft() {
                this.$router.go(-1)
            },
        }
    }
</script>
<style scoped>
    .appeal-list{
        width: 100%;
        height: 100%;
    }

</style>
