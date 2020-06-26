<template>
  <div class="section">
    <div class="wrapper clearfix">
      <!-- 左边栏 -->
      <div class="aside-left">左边栏</div>

      <!-- 右边栏 -->
      <div class="aside-right">右边栏</div>

      <!-- 主区域 -->
      <div class="main">
        <h2>热点内容······</h2>
        <span>
          <a href>更多</a>
        </span>
        <Albums :picinfo="picinfo"></Albums>
        <div class="notes"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Albums from './Hotspot/Albums'
export default {
  data () {
    return {
      picinfo: [
        {
          url: require('../assets/img/hotspotpic.webp'),
          title: '孤独宇航员',
          num: 196
        }, {
          url: require('../assets/img/hotspotpic.webp'),
          title: '孤独宇航员',
          num: 196
        }, {
          url: require('../assets/img/hotspotpic.webp'),
          title: '孤独宇航员',
          num: 196
        }, {
          url: require('../assets/img/hotspotpic.webp'),
          title: '孤独宇航员',
          num: 196
        }
      ]
    }
  },
  methods: {},
  components: {
    Albums
  }
}
</script>

<style scoped lang="scss">
.section {
  .wrapper {
    .aside-left {
      float: left;
      width: 100px;
      margin-right: 20px;
    }
    .aside-right {
      float: right;
      width: 265px;
      margin-left: 30px;
    }

    .main {
      overflow: hidden;
    }
  }
}
</style>
