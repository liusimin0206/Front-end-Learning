<template>
  <div>
    father----------------
    <son></son>
  </div>
</template>

<script>
import son from './son'
export default {
  data() {
    return {};
  },
  components:{
    son
  },
  methods: {},
  beforeCreate() {
    console.log("beforeCreateF");
  },
  created() {
    console.log("createdF");
  },
  beforeMount() {
    console.log("beforeMountF");
  },
  mounted() {
    console.log("mountedF");
  },
  mounted() {
    console.log("mountedF");
  },
};
</script>

<style scoped lang="scss">
</style>
