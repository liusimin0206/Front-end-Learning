<template>
  <div class="applicationEntry">
    <div class="content">
      <slot name="title"> </slot>
      <div class="detail">
        <slot name="detail"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.applicationEntry {
  background-color: #fff;
  font-family: "Microsoft YaHei";
}
.applicationEntry .content {
  margin: 0 14px;
}
.applicationEntry .content .title {
  border-bottom: 1px solid rgb(237, 237, 237);
  padding: 10px 0;
  /* 字体加粗 */
  font-weight: bold;
  font-size: 18px;
}
.applicationEntry .content .detail {
  text-align: center;
  display: flex;
}
.applicationEntry .content .detail .item {
  flex: 1;
  padding: 10px 0;
  font-size: 14px;
  color: #20a5c6;
  font-weight: 500;
  border-right: 1px solid rgb(237, 237, 237);
}
.applicationEntry .content .detail .item:last-child {
  flex: 1;
  border-right: 0 solid rgb(237, 237, 237);
}
</style>
