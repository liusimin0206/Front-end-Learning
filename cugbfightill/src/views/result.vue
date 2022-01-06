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
      title: `${userInfo.name}-当日进出校申请表`,
      basicInfor: [
        `学号：${userInfo.id}`,
        `姓名：${userInfo.name}`,
        "性别：男",
        "学院：信息工程学院",
        "年级：2019",
        "导师：王建业",
        "联系电话：18310621826"
      ],
      applicationInfor: [],

      activeKey: ["2", "3"],
      url1: require("../assets/img/王建业电子签名.png"),

      url2: require("../assets/img/健康码.jpg"),

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
    this.applicationInfor = [
      { type: "string", content: "临时进出校类别：临时出校" },
      { type: "string", content: "出发地：" },
      { type: "string", content: `进出校日期：${this.dateString}` },
      { type: "string", content: "目的地：北医三" },
      { type: "string", content: "出校原因：看病" },
      { type: "string", content: "行程安排：公交" },
      { type: "string", content: "请上传“北京健康宝”健康绿码截图：" },
      { type: "jiankangbao", content: this.url2 },
      { type: "string", content: "请上传“通信大数据行程卡”截图：" },
      { type: "jiankangbao", content: this.url3 },
      {
        type: "string",
        content: "位置信息：北京市海淀区学院路街道成府路中国地质大学(北京)"
      }
    ];
  }
};
</script>

<style scoped>
@import url("./result.css");
</style>
