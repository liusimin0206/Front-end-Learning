<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new Promise(resolve => {
        setTimeout(() => {
          resolve("aaa");
        }, 3000);
      })
        .then(res => {
          console.log(res, "第一层");
          return new Promise(resolve => resolve(res + "111"));
        })
        .then(res => {
          console.log(res, "第二层");
          return new Promise(resolve => resolve(res + "222"));
        })
        .then(res => {
          console.log(res, "第三层");
        });
    }
  }
};
</script>

<style scoped lang="scss"></style>
