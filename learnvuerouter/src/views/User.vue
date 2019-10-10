<template>
  <div class="home">
    <h1>用户</h1>
    我是用户的相关信息，，，
    <div>{{userId}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    computed: {
        userId() {
            return this.$route.params.userId; 
        }
    },
    methods: {

    },
};
</script>

<style scoped lang="scss">

</style>
