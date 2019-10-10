<template>
  <div>
    <p>{{ message }}</p>
    <h2>{{ counter }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="$store.commit('decrement', { name: 'name' })">-</button>
    <button @click="$store.commit('increment')">+</button>
    <HelloWorld :counter="counter" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  data() {
    return {
      message: "我是App组件",
      counter: 0
    };
  },
  methods: {},
  components: {
    HelloWorld
  }
};
</script>

<style scoped lang="scss"></style>
