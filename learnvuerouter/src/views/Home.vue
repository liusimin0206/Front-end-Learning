<template>
  <div class="home">
    <h1>首页</h1>
    <p>我是首页的相关信息，，，</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view />

  </div>
</template>

<script>
export default {
    data() {
        return {
obj:{}
        };
    },
    computed: {
        
    },
    methods: {

    },
};
</script>
