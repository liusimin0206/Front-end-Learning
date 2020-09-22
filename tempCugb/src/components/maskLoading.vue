<template>
  <div class="mask" v-show="showLoading" @click="showLoading = false">
    <div class="box">
      <a-spin>
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      </a-spin>
      加载中
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showLoading: false
    };
  }
};
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.mask .box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: #444;
  padding: 28px;
  font-size: 12px;
}
.mask .box /deep/.ant-spin-spinning {
  display: block;
  margin-bottom: 10px;
  color: #fff;
}
</style>
