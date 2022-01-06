<template>
  <div class="result">
    <div class="header">
      <div class="pic"></div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="container">
      <a-collapse
        v-model="activeKey"
        expand-icon-position="right"
        :bordered="false"
      >
        <a-collapse-panel key="1" header="基本信息" class="subtitle">
          <ul class="content" v-for="(item, i) in basicInfor" :key="i">
            <li>{{ item }}</li>
          </ul>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="申请信息" class="subtitle">
          <ul class="content" v-for="(item, i) in applicationInfor" :key="i">
            <li v-if="item.type === 'string'">{{ item.content }}</li>
            <li v-if="item.type === 'jiankangbao'">
              <!-- 插入图片 -->
              <el-image
                style="width: 100px; height: 200px"
                :src="item.content"
                @click="showViewer2 = true"
                fit="cover"
              >
              </el-image>
              <el-image-viewer
                v-if="showViewer2"
                :on-close="closeViewer"
                :url-list="[item.content]"
              />
            </li>
            <!-- 插入导师证明图片 -->
            <li v-if="item.type === 'daoshizhengming'">
              <el-image
                style="width: 100px; height: 50px"
                :src="item.content"
                @click="showViewer1 = true"
                fit="cover"
              >
              </el-image>
              <el-image-viewer
                v-if="showViewer1"
                :on-close="closeViewer"
                :url-list="[item.content]"
              />
            </li>
          </ul>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="审核信息" class="subtitle vinfo">
          <div class="passIcons">
            <a-icon class="passiconitem" type="check-circle" theme="filled" />
            <div class="heightLine"></div>
            <a-icon class="passiconitem" type="check-circle" theme="filled" />
            <div class="heightLine"></div>
            <a-icon class="passiconitem" type="check-circle" theme="filled" />
          </div>

          <div class="vresults">
            <div class="item">
              <div class="tit">辅导员 [吕菲菲-2020020010]</div>
              <div class="text">通过 {{ dateString }} {{ time }}</div>
              <div class="text">审核意见</div>
            </div>
            <div class="item">
              <div class="tit">学院</div>
              <div class="text">通过</div>
              <div class="text">审核意见：</div>
            </div>
            <div class="item">
              <div class="tit">学工处</div>
              <div class="text">通过</div>
              <div class="text">审核意见：</div>
            </div>
          </div>
        </a-collapse-panel>
        <template v-slot:expandIcon="props">
          <a-icon type="down" :rotate="props.isActive ? 180 : 0"> </a-icon>
        </template>
      </a-collapse>
    </div>
    <div class="bottom"></div>
    <div class="vover">审核完成</div>
  </div>
</template>

<script>
import { userInfo } from "../assets/data/getInfo";
import ElImageViewer from "../components/image-viewer";
export default {
  data: function() {
    return {
      dateString: "",
      time: "",
      date: undefined,
      title: `${userInfo.name}-在校生离校申请表`,
      basicInfor: [
        `学号：${userInfo.id}`,
        `姓名：${userInfo.name}`,
        "学院：信息工程学院",
        "年级：2019",
        "导师：王建业"
      ],
      applicationInfor: [],

      activeKey: ["2", "3"],
      url1: require("../assets/img/王建业电子签名.png"),

      url2: require("../assets/img/健康码.jpg"),
      url4: require("../assets/img/临时进出校审批表2.png"),
      showViewer1: false,
      showViewer2: false
    };
  },

  components: {
    ElImageViewer
  },
  methods: {
    closeViewer() {
      this.showViewer1 = false;
      this.showViewer2 = false;
    },
    date2timeStr(date) {
      function bu2Wei(str) {
        str = String(str);
        while (str.length < 2) {
          str = "0" + str;
        }
        return str;
      }
      return [
        bu2Wei(date.getHours()),
        bu2Wei(date.getMinutes()),
        bu2Wei(date.getSeconds())
      ].join(":");
    }
  },
  created() {
    this.date = new Date();
    // 调整时间
    this.date.setMinutes(this.date.getMinutes() - 11);
    this.time = this.date2timeStr(this.date);
    this.dateString = this.$route.query.date;
    this.url2 =
      localStorage.getItem("jianKangMa") || require("../assets/img/健康码.jpg");
    this.url3 =
      localStorage.getItem("xingChenMa") || require("../assets/img/健康码.jpg");
    this.url4 =
      localStorage.getItem("shenpibiao") ||
      require("../assets/img/临时进出校审批表2.png");
    this.applicationInfor = [
      { type: "string", content: "联系电话：18310621826" },
      { type: "string", content: "北京健康宝绿码：" },
      { type: "jiankangbao", content: this.url2 },
      { type: "string", content: `出发时间：${this.dateString}` },
      { type: "string", content: "目的地：江西省，南昌市，红谷滩小区301" },
      { type: "string", content: "行程安排（交通工具及车次/航班）：火车D737" },

      {
        type: "string",
        content: "是否告知导师/辅导员离校相关信息，并取得导师同意：是"
      },
      {
        type: "string",
        content: "是否告知家长离校相关信息，并取得家长同意：是"
      },
      { type: "string", content: "离校原因：回家探亲" },
      { type: "string", content: "宿舍楼：学19楼" },
      { type: "string", content: "宿舍号：537" },
      { type: "string", content: "离校类型：离校且离京" },
      { type: "string", content: "预计返校时间：2022-02-20" },

      { type: "string", content: " 导师/家长知情同意证明：" },
      { type: "jiankangbao", content: this.url4 },
      { type: "string", content: "我承诺对上述填写信息的真实性负责：是" },
      { type: "string", content: "出行时间是否超过一周：是" },
      { type: "string", content: "请上传“通信大数据行程卡”截图：" },
      { type: "jiankangbao", content: this.url3 }
    ];
  }
};
</script>

<style scoped>
@import url("./result.css");
</style>
