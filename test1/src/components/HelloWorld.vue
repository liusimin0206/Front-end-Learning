<template>
  <div>
    <div>helloWorld</div>
    <h2>{{ $store.state.counter }}</h2>
    <h2>+++++++++++++++++++++++++++++++</h2>
    <h2>{{ $store.getters.more20stu(20) }}</h2>
    <h3>{{ $store.state.a.name }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss"></style>
