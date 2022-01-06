<template>
  <div id="example">
    <button @click="change">切换页面</button>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import home from './home.vue'
import post from './post.vue'
export default {
  components: {
    home,
    post,
  },
  data() {
    return {
      index: 0,
      arr: ["home", "post"],
    };
  },
  computed: {
    currentView() {
      return this.arr[this.index];
    },
  },
  methods: {
    change() {
      this.index = ++this.index % 2;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
