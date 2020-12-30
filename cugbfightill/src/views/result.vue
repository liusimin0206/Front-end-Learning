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
          <ul
            class="content"
            v-for="(item, i) in applicationInfor[0]"
            :key="'1-' + i"
          >
            <li>{{ item }}</li>
          </ul>
          <!-- 插入导师证明图片 -->
          <!-- <el-image
            style="width: 100px; height: 100px"
            :src="url1"
            @click="showViewer1 = true"
            fit="cover"
          >
          </el-image>
          <el-image-viewer
            v-if="showViewer1"
            :on-close="closeViewer"
            :url-list="srcList1"
          /> -->
          <ul
            class="content"
            v-for="(item, i) in applicationInfor[1]"
            :key="'2-' + i"
          >
            <li>{{ item }}</li>
          </ul>
          <!-- 插入导师证明图片 -->
          <!-- <el-image
            style="width: 100px; height: 100px"
            :src="url1"
            @click="showViewer1 = true"
            fit="cover"
          >
          </el-image>
          <el-image-viewer
            v-if="showViewer1"
            :on-close="closeViewer"
            :url-list="srcList1"
          /> -->
          <ul
            class="content"
            v-for="(item, i) in applicationInfor[2]"
            :key="'3-' + i"
          >
            <li>{{ item }}</li>
          </ul>
          <!-- 插入健康码图片 -->
          <el-image
            style="width: 100px; height: 200px"
            :src="url2"
            @click="showViewer2 = true"
            fit="cover"
          >
          </el-image>
          <el-image-viewer
            v-if="showViewer2"
            :on-close="closeViewer"
            :url-list="[url2]"
          />
          <ul class="content" v-for="(item, i) in applicationInfor[3]" :key="i">
            <li>{{ item }}</li>
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
              <div class="tit">辅导员</div>
              <div class="text">通过</div>
              <div class="text">审核意见：</div>
            </div>
            <div class="item">
              <div class="tit">学院</div>
              <div class="text">通过</div>
              <div class="text">审核意见：</div>
            </div>
            <div class="item">
              <div class="tit">学工处 [学生处-10001]</div>
              <div class="text">通过 {{ dateString }} {{ time }}</div>
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
    <div class="vover">
      审核完成
    </div>
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
      url1: require("../assets/img/临时进出校审批表1.png"),
      srcList1: [require("../assets/img/临时进出校审批表1.png")],
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
    this.date.setMinutes(this.date.getMinutes() - 51);
    this.time = this.date2timeStr(this.date);
    this.dateString = this.$route.query.date;
    this.url2 =
      localStorage.getItem("jianKangMa") || require("../assets/img/健康码.jpg");
    this.applicationInfor = [
      ["临时进出校类别：临时出校", "出发地："],
      [`进出校日期：${this.dateString}`, "目的地：五道口东源大厦"],
      ["我承诺对上述填写信息的真实性负责：是", "健康码："],
      [
        "出校原因：实习任务",
        "进校原因：",

        "位置信息：北京市海淀区学院路街道成府路中国地质大学(北京)"
      ]
    ];
  }
};
</script>

<style scoped>
@import url("./result.css");
</style>
