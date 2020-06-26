<template>
  <div>
    <div class="loginContainer">
      <div class="wrapper clearfix">
        <Login class="login"></Login>
        <div class="download">
          <div class="title">
            豆瓣
            <span>6.0</span>
          </div>
          <div class="dld-area">
            <button class="btn">下载豆瓣app</button>
            <div class="qrcode" @mouseenter="showbigqrcode=true" @mouseleave="showbigqrcode=false">
              <img src="../assets/img/icon_qrcode_green.png" alt />
              <div class="bigqrcode" :class="{displayNone : !showbigqrcode}">
                <img src="../assets/img/doubanapp_qrcode.png" alt />
                <p>iOS / Android 扫码直接下载</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login/Login'
export default {
  data () {
    return {
      showbigqrcode: false
    }
  },
  methods: {},
  components: { Login }
}
</script>

<style scoped lang="scss">
.loginContainer {
  height: 300px;
  min-width: 980px;
  margin: 0 auto;
  background: url("../assets/img/loginContainer.png") no-repeat;
  background-position: calc(50% - 305px) top;
  background-size: auto 100%;
  background-color: #edf4ed;
  .download {
    margin-top: 88px;
    margin-right: 28px;
    float: right;
    .title {
      font-size: 25px;
      color: #111;
      span {
        margin-left: 10px;
      }
    }
    .dld-area {
      margin-top: 25px;
      .btn {
        width: 115px;
        height: 30px;
        font-size: 12px;
        line-height: 30px;
        margin-right: 10px;
      }
      .qrcode {
        position: relative;
        display: inline-block;
        width: 28px;
        height: 28px;
        border: 1px solid #48aa0d;
        border-radius: 2px;
        vertical-align: bottom;
        img {
          width: 100%;
          height: 100%;
        }
        .bigqrcode {
          position: absolute;
          left: -1.6px;
          top: -1.6px;
          width: 200px;
          padding: 15px;
          background-color: #fff;
          box-sizing: border-box;
          border-radius: 4px;
          p {
            color: #666;
            font-size: 13px;
            text-align: center;
            line-height: 2;
          }
        }
      }
    }
  }
  .login {
    float: right;
  }
}
</style>
