<template>
  <div class="section">
    <div class="wrapper clearfix">
      <!-- 左边栏 -->
      <div class="aside-left displayNone">左边栏</div>

      <!-- 右边栏 -->
      <div class="aside-right">
        <div class="section-topic-title">
          <h3 class="title">热门话题 · · · · · ·</h3>
          <span>
            <a class="link" href>去话题广场</a>
          </span>
        </div>
        <ul class="hot-list">
          <li v-for="(item , i) in hotList" :key="i">
            <div class="title">
              <a class="link" href>{{item.title}}</a>
            </div>
            <div class="notes">
              <span>{{item.notes}}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- 主区域 -->
      <div class="main">
        <div class="section-topic-title">
          <h3 class="title">热点内容 · · · · · ·</h3>
          <span>
            <a class="link" href>更多</a>
          </span>
        </div>

        <Albums class="hot-albums" :picinfo="picinfo"></Albums>
        <div class="content">
          <ul>
            <li>
              <div class="title">
                <a class="link" href>聊一聊产后哄睡</a>
              </div>
              <div class="author">肥肥鱼的日记</div>
              <p>之前聊了[产后抑郁]的成因，常见的除了激素和家庭关系，很重要的原因就是，睡不饱...</p>
            </li>
            <li>
              <div class="title">
                <a class="link" href>以外</a>
              </div>
            </li>
            <li>
              <div class="title">
                <a class="link" href>电影的当代性</a>
              </div>
            </li>
            <li>
              <div class="title">
                <a class="link" href>一张毕业证引发的流浪人生：大学生不告而别16年，回家时已满头白发</a>
              </div>
            </li>
          </ul>
        </div>
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
        },
        {
          url: require('../assets/img/hotspotpic2.webp'),
          title: '彩画集',
          num: 52
        },
        {
          url: require('../assets/img/hotspotpic.webp'),
          title: '孤独宇航员',
          num: 196
        },
        {
          url: require('../assets/img/hotspotpic.webp'),
          title: '孤独宇航员',
          num: 196
        }
      ],
      hotList: [
        {
          title: '为猫咪花色起个文艺的名字',
          notes: '77.5万次浏览'
        },
        {
          title: '端午包粽子大赛',
          notes: '43.5万次浏览'
        },
        {
          title: '把生活中的场景唱成歌',
          notes: '24.2万次浏览'
        },
        {
          title: '哪些食物在一起吃产生了新的味道',
          notes: '4.0万次浏览'
        },
        {
          title: '你镜头下的屋檐',
          notes: '4.1万次浏览'
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
      ul.hot-list {
        li {
          margin-top: 10px;
          margin-bottom: 15px;
          .title {
            margin-bottom: 6px;
            font-size: 14px;
          }
          .notes {
            font-size: 13px;
            color: #aaa;
          }
        }
      }
    }

    .main {
      overflow: hidden;
      .hot-albums {
        margin: -10px 30px 0 -10px;
        width: 360px;
        float: left;
      }
      .content {
        overflow: hidden;
        line-height: 1.62;
        li{
          margin-bottom: 12px;
          font-size: 12px;
          .author{
            color: #999;
          }
          p{
            color: #666;
          }
        }
      }
    }
  }
}
</style>
