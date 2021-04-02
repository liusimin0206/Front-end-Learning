<template>
 <div>
  <component1></component1>
 </div>
</template>

<script>
import component1 from './component1'
export default {
  data () {
    return {
      num2: 123
    }
  },
  components: {
    component1
  }

}
</script>

<style scoped>

</style>
