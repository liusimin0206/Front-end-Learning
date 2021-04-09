<template>
 <div>
 </div>
</template>

<script>
export default {
  inject: ['getNum'],
  mounted () {
    console.log(this.getNum)
  }
}
</script>

<style scoped>

</style>
