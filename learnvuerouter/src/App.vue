<template>
  <div id="app">
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link :to="'/user/'+userId">用户</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: "lisi"
    };
  },
  methods: {}
};
</script>
<style>
</style>
