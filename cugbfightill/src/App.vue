<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view @refresh="refresh" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    refresh() {
      location.reload();
    }
  }
};
</script>
<style>
#app {
  overflow: hidden;
}
</style>
