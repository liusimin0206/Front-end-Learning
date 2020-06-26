<template>
  <div class="albums">
    <ul>
      <li class="item" v-for="(item,i) in picinfo" :key="i">
        <div class="pic">
          <a href>
            <img :src="item.url" alt />
          </a>
        </div>
        <a class="link" href>{{item.title}}</a>
        <span class="num">{{item.num}}</span>
        <span>张照片</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    picinfo: Array
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.albums{
  ul{
    li.item{
      width: 170px;
      display: inline-block;
      font-size: 12px;
      margin: 10px 0 0 10px;
      .pic{
        img{
          width: 170px;
          height: 170px;
        }
      }
      .link{
        margin-right: 5px;
      }
      span{

            color: #aaa;
      }
    }
  }
}
</style>
