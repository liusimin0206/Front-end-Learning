<template>

  <div id="app">
   <tabBar>
     <tabbarItem itemName='home'> 
       <div slot='item-text'>首页</div>
    </tabbarItem>
    <tabbarItem itemName='classify'> 
       <div slot='item-text'>分类</div>
    </tabbarItem>
    <tabbarItem itemName='cart'> 
       <div slot='item-text'>购物车</div>
    </tabbarItem>
      <tabbarItem itemName='profile'> 
       <div slot='item-text'>我的</div>
    </tabbarItem>
   </tabBar>
  <router-view/>
  </div>
</template>

<script>
import tabBar from './components/tabBar/tabBar';
import tabbarItem from './components/tabBar/tabBarItem'
export default {
  name: 'App',
  components: {
    tabBar,tabbarItem
  },
  
}
</script>
<style>
body{
  padding: 0;
  margin: 0;
}

</style>
