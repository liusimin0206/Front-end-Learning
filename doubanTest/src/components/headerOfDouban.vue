<template>
  <div>
    <div class="headerNav clearfix">
      <div class="indexIcon">
        <a href>豆瓣</a>
      </div>
      <div class="searchInput">
        <form>
          <input type="text" class="txt" placeholder="书籍、电影、音乐" />
          <button>
            <i class="iconfont icon-sousuosearch82"></i>
          </button>
        </form>
      </div>
      <div class="nav clearfix">
        <ul class="header-nav">
          <li v-for="(item,i) in headerNav" :key="item.id">
             <a href="" :style="{backgroundPositionX: -60*i+'px'}">
               {{item.name}}
             </a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 应该写到外面
      headerNav: [
        {
          name: '读书',
          id: 'book'
        }, {
          name: '电影',
          id: 'movie'
        }, {
          name: '音乐',
          id: 'music'
        }, {
          name: '小组',
          id: 'groups'
        }, {
          name: 'FM',
          id: 'FM'
        }, {
          name: '同城',
          id: 'city'
        }, {
          name: '东西',
          id: 'item'
        }, {
          name: '豆品',
          id: 'doupin'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.headerNav {
  width: 1080px;
  height: 34px;
  margin: 30px auto;
  background-color: white;
  .indexIcon {
    height: 34px;
    float: left;
    a {
      display: block;
      height: 0px;
      padding-top: 34px;
      width: 160px;

      background: url(../assets/img/logo_db.png) no-repeat left top/100%;

      overflow: hidden;
      // cursor: pointer;
    }
  }
  .searchInput {
    // width: 270px;
    height: 30px;
    border: 1px solid #c3c3c3;
    float: left;
    margin-left: 20px;
    .txt {
      width: 240px;
      height: 20px;
      padding: 5px;
      font-size: 13px;
    }
    .txt::placeholder {
      color: #ccc;
    }

    button {
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: #c3c3c3;
    }
  }
  .nav {
    float: right;
    width: 515px;
    height: 21px;
    overflow: hidden;
    margin-top: 10px;
    ul{
      float:right;
      padding-right: 5px;
      li{
         float: left;
         margin-left: 10px;
         a{
            height: 0px;
            width: 43px;
            padding-top: 20px;
            display:block;
            background-image: url("../assets/img/anony_nav_logo.png");
            background-size: 463px 20px;

         }
      }
    }
  }
}
</style>
