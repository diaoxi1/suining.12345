<template>
    <div class="dynamic">
        <div class="title">
            <span class="gzdt">工作动态</span>
            <span class="gd">更多</span>
        </div>
        <div class="list">
            <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
            <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
            <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
            <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
            <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
            <div class="van-hairline--bottom item"><span class="dian"></span>列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</div>
        </div>
    </div>
</template>
<script>
export default{
    name:'dynamic-list',
}
</script>
<style scoped>
    .dynamic{
        width: 100%;
    }
    .title{
        height: 37px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        line-height: 37px;
    }
    .gzdt{
        margin-left: 10px;
        font-size: 14px;
        color: #282828;
        font-weight: bold;
    }
    .gd{
        margin-right: 10px;
        font-size: 12px;
        color: #656565;
    }
    .list{
        width: 100%;
        height: calc(100% - 37px);
        padding: 0 10px;
    }
    .list .item{
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        width: 95%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 5px;
        box-sizing: content-box;
    }

    .dian{
        width: 3px;
        height: 3px;
        border-radius: 50%;
        margin: 0 15px;
        background: #656565;
        display: inline-block;
    }
</style>
