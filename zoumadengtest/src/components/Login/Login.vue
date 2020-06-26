<template>
  <div class="container">
    <div class="countryChoose" :class="{displayNone : !showCountryChoose}">
      <div class="center">
        <div class="title">选择国际区号</div>
        <ul>
          <li class="clearfix selected">
            <span class="left">国家名1</span>
            <span class="right">+1</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名2</span>
            <span class="right">+2</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名3</span>
            <span class="right">+3</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名4</span>
            <span class="right">+4</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名5</span>
            <span class="right">+5</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名6</span>
            <span class="right">+6</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名7</span>
            <span class="right">+7</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名8</span>
            <span class="right">+8</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名9</span>
            <span class="right">+9</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名10</span>
            <span class="right">+10</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名11</span>
            <span class="right">+11</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名12</span>
            <span class="right">+12</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名13</span>
            <span class="right">+13</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名14</span>
            <span class="right">+14</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名15</span>
            <span class="right">+15</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名16</span>
            <span class="right">+16</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名17</span>
            <span class="right">+17</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名18</span>
            <span class="right">+18</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名19</span>
            <span class="right">+19</span>
          </li>
          <li class="clearfix">
            <span class="left">国家名20</span>
            <span class="right">+20</span>
          </li>
        </ul>
        <button class="close" @click="showCountryChoose=false">
          <i class="iconfont icon-guanbi"></i>
        </button>
      </div>
    </div>
    <div class="ChangeLoginMethod">
      <i
        class="icon"
        :class="{iconQrcode:!LoginMethodisQrCode , iconPc:LoginMethodisQrCode}"
        @click="LoginMethodisQrCode=!LoginMethodisQrCode"
        @mouseenter="showPointer=true"
        @mouseleave="showPointer=false"
        unselectable="on"
      ></i>
      <div class="pointer" :class="{displayNone : !showPointer || LoginMethodisQrCode}">扫码登录</div>
      <div class="pointer" :class="{displayNone : !showPointer || !LoginMethodisQrCode}">短信登录/注册</div>
    </div>
    <!-- 短信登录/注册，密码登录 -->
    <div class="login" :class="{displayNone : LoginMethodisQrCode}">
      <div class="switchMenu clearfix">
        <span :class="{selected : isActive==0}" @click="isActive=0">短信登录/注册</span>
        <span :class="{selected : isActive==1}" @click="isActive=1">密码登录</span>
      </div>
      <form class="form" :class="{displayNone : isActive!=0}">
        <div>
          <div class="formItem">
            <p class="txt">
              请仔细阅读
              <a href>豆瓣使用协议、隐私政策</a>
            </p>
          </div>
          <div class="formItem">
            <input type="text" class="phoneNum" placeholder="手机号" />
            <div class="countryCode" @click="showCountryChoose=true">
              <div class="codeSelected">+86</div>
            </div>
          </div>
          <div class="formItem">
            <input type="text" class="captcha" placeholder="验证码" />
            <a href class="captchaRight">获取验证码</a>
          </div>
          <div class="formItem">
            <button login class="btn">登录豆瓣</button>
          </div>
          <div class="formItem tip autoLogin clearfix">
            <label class="left">
              <input type="checkbox" />
              下次自动登录
            </label>
            <span class="right">
              <a href>收不到验证码</a>
            </span>
          </div>
        </div>
      </form>
      <form class="form" :class="{displayNone : isActive!=1}">
        <div>
          <div class="formItem tip clearfix">
            <span class="right">
              <a href>找回密码</a>
            </span>
          </div>

          <div class="formItem">
            <input type="text" class="phoneNumorEmail" placeholder="手机号/邮箱" />
          </div>
          <div class="formItem">
            <input type="text" class="password" placeholder="密码" />
          </div>
          <div class="formItem">
            <button login class="btn">登录豆瓣</button>
          </div>
          <div class="formItem tip autoLogin clearfix">
            <label class="left">
              <input type="checkbox" />
              下次自动登录
            </label>
            <span class="right">
              <a href>海外手机登录</a>
            </span>
          </div>
        </div>
      </form>
      <div class="thirdPpart">
        <span class="msg">第三方登录:</span>
        <span>
          <i weixin class="iconfont icon-weixin"></i>
          <i weibo class="iconfont icon-weibo1"></i>
        </span>
      </div>
    </div>
    <!-- 扫码登录 -->
    <div class="qrCode" :class="{displayNone : !LoginMethodisQrCode}">
      <div class="title">二维码登录</div>
      <div class="qrCodeContainer">
        <img class="qrCodePic" src="../../assets/img/qrlogin_code.png" alt />
      </div>
      <div class="tip">请打开豆瓣客户端扫一扫</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: 0,
      showCountryChoose: false,
      LoginMethodisQrCode: false,
      showPointer: false
    }
  },
  methods: {
    handleClick () {}
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 300px;
  height: 300px;
  line-height: 2;

  padding: 23px 10px 10px 10px;
  box-sizing: border-box;
  color: #9b9b9b;
  position: relative;
  .countryChoose {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 2;
    .center {
      width: 285px;
      height: 80%;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      border: 1px solid #bbb;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 5px;
      overflow: hidden;
      .title {
        background-color: #ebf5eb;
        height: 42px;
        line-height: 42px;
        padding-left: 10px;
        color: #060;
        font-weight: bold;
      }
      ul {
        height: calc(100% - 42px);
        box-sizing: border-box;
        padding: 0 10px;
        overflow-y: auto;
        font-size: 14px;
        color: #494949;
        font-weight: 700;
        li {
          height: 38px;
          line-height: 38px;
          border-top: 1px solid #e5e5e5;
          cursor: pointer;
        }
        .right {
          float: right;
          color: #aaa;
          font-weight: normal;
        }
        .left {
          float: left;
        }
        .selected {
          .left,
          .right {
            color: #42bd56;
          }
          .left::after {
            content: "\e625";
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin-left: 10px;
          }
        }
      }
      .close {
        position: absolute;
        right: 10px;
        top: 14px;
      }
      .close:hover {
        color: #fab0b6;
      }
    }
  }
  a {
    color: #41ac52;
    text-decoration: none;
  }
  a:visited {
    color: #41ac52;
    text-decoration: none;
  }

  .login {
    .switchMenu {
      border-bottom: 1px solid #ececec;
      font-size: 13px;
      span {
        width: 140px;
        float: left;
        text-align: center;
        cursor: pointer;
      }
      .selected {
        color: #333;
        font-weight: bold;
        border-bottom: 1px solid #494949;
      }
    }
    .form {
      .formItem {
        position: relative;
        margin: 10px 0;
        .txt {
          font-size: 10px;
        }
        input[type="text"] {
          width: 100%;
          border: 1px solid #e4e6e5;
          box-sizing: border-box;
          height: 33px;
          padding-top: 8px;
          padding-bottom: 8px;
          padding-left: 10px;
          background-color: #fff;
          border-radius: 4px;
          font-size: 13px;
        }
        input.phoneNum {
          padding-left: 60px;
          padding-right: 40px;
        }
        .countryCode {
          .codeSelected {
            position: absolute;
            height: 22px;
            width: 51px;
            left: 0;
            top: 7px;
            text-align: center;
            color: #333;
            font-weight: bold;
            font-size: 15px;
            line-height: 22px;
            border-right: 1px solid #e4e6e5;
            cursor: pointer;
          }
        }
        .captcha {
          padding-right: 100px;
        }
        .captchaRight {
          position: absolute;
          right: 15px;
          top: 4px;
          font-size: 13px;
        }
        .btn[login] {
          width: 100%;
          height: 34px;
          font-size: 15px;
        }
      }
      .formItem.tip {
        font-size: 12px;
        color: #333;
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
      .formItem.tip.autoLogin {
        font-size: 13px;
      }
    }
    .thirdPpart {
      width: 80%;
      border-top: 1px solid #ddd;
      .msg {
        font-size: 11px;
        vertical-align: 2px;
      }
      .iconfont {
        margin-left: 12px;
      }
      .iconfont[weixin] {
        color: #34950e;
        font-size: 22px;
      }
      .iconfont[weibo] {
        color: #ea5d5c;
        font-size: 22px;
      }
    }
  }
  .qrCode {
    font-size: 13px;
    .title {
      color: #333;
      border-bottom: 1px solid #ececec;
      font-weight: 600;
    }
    .qrCodeContainer {
      text-align: center;
      font-size: 0;
      margin: 20px 0;
    }
    .qrCodePic {
      width: 170px;
      height: 170px;
    }
    .tip {
      width: 183px;
      height: 25px;
      line-height: 25px;
      background-color: rgba(0, 0, 0, 0.08);
      color: #494949;
      margin: 0 auto;
      text-align: center;
      border-radius: 12.5px;
    }
  }
  .ChangeLoginMethod {
    .icon {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 5px;
      top: 5px;
      cursor: pointer;
    }
    .icon.iconQrcode {
      background: url("../../assets/img/icon-qrcode.png") no-repeat left
        top/100% 100%;
    }
    .icon.iconPc {
      background: url("../../assets/img/icon-pc.png") no-repeat left top/100%
        100%;
    }
    .pointer {
      position: absolute;
      right: 38px;
      top: 8px;
      height: 28px;
      line-height: 28px;
      border: 1px solid rgba(66, 189, 86, 0.3);
      color: #666;
      font-size: 13px;
      background: #f5faf9;
      padding: 0 5px;
    }
  }
}
</style>
