<style lang="less" scoped>
    .test{
        font-size: 18px;
        h2{
            color: aqua;
        }
    }
</style>

<template>
    <div class="test">
        <h2>这是{{title}}页</h2>
        <router-link :to="{name: 'Admin'}">user</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: '测试'
        }
    }
}
</script>
