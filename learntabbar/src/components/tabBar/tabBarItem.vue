<template>
  <div class="tab-bar-item" :style="isActive" @click="switchPage">
      
       <slot name='item-text' ></slot>
  </div>
</template>

<script>
export default {
  props: {
    itemName: {
      type: "",
      default: "未命名"
    }
  },
  data() {
    return {
     
    };
  },
  methods: {
    switchPage(){
 this.$router.push('/'+this.itemName)
    }
  },
  computed: {
    isActive() {
      if(this.$route.path.indexOf(this.itemName) != -1){ return {color:'red'}}
     else return {color:'black'}
    }
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>
