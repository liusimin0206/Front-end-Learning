<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goto()">aaaa</button>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  methods: {
    goto () {
      this.$router.push({
        name: 'aboutChild',
        params: {
          userId: '123'
        }
      })
      console.log(this.$route.params)
    }
  }
}
</script>
