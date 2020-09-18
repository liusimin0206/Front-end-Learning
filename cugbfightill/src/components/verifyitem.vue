<template>
  <div class="verifyitem">
    <div class="title">
      <slot name="title"> </slot>
    </div>
    <div class="section">
      <slot name="section"> </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.verifyitem {
  padding: 18px 15px 10px 15px;
  background-color: #fff;
  font-family: "Microsoft YaHei";
}
.title,
.section {
  display: flex;
  padding: 5px 0;
}
.left {
  flex: 2;
}
.right {
  flex: 1;
  text-align: right;
}

.title .left {
  font-weight: bold;
  font-size: 16px;
}
.title .right {
  font-size: 13px;
  color: #808080;
}
.section .left {
  font-size: 15px;
  color: #808080;
}
.section .right {
  font-size: 15px;
  color: #29bb72;
  font-family: "黑体";
}
</style>
