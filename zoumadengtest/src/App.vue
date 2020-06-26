
<template>
  <div>
    <headerOfDouban></headerOfDouban>
    <LoginContainer></LoginContainer>
  </div>
</template>

<script>
import headerOfDouban from './components/headerOfDouban'
import LoginContainer from './components/LoginContainer'
export default {
  name: 'App',
  data: function () {
    return { }
  },
  components: {
    headerOfDouban,
    LoginContainer
  }
}
</script>

<style>

</style>
