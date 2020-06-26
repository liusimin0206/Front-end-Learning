
<template>
  <div>
    <headerOfDouban></headerOfDouban>
    <LoginContainer></LoginContainer>
    <Hotspot></Hotspot>

  </div>
</template>

<script>
import headerOfDouban from './components/headerOfDouban'
import LoginContainer from './components/LoginContainer'
import Hotspot from './components/Hotspot'
export default {
  name: 'App',
  data: function () {
    return { }
  },
  components: {
    headerOfDouban,
    LoginContainer,
    Hotspot
  }
}
</script>

<style>

</style>
