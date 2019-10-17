<template>
  <div>
    <button @click="up">浪起来</button>
    <button @click="down">低调</button>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "猥琐发育别浪!",
      interval: null
    };
  },
  computed: {},
  mounted() {},
  methods: {
    up() {
      console.log(this.interval);
      if (this.interval != null) return;
      this.interval = setInterval(() => {
        let start = this.msg.substring(0, 1);

        let end = this.msg.substring(1);

        this.msg = end + start;
      }, 400);
    },
    down() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</script>

<style scoped lang="scss"></style>
