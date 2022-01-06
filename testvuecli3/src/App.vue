<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    {{ message }}
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <dongtaijujian />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import dongtaijujian from './components/dongtaijujian.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    dongtaijujian
  },
  data() {
    return {
      message:'',
    };
  },
  created(){
    
  },

  mounted(){
    console.log('app mounted');
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
