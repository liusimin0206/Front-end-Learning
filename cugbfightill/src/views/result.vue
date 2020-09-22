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
          <el-image
            style="width: 100px; height: 100px"
            :src="url1"
            :preview-src-list="srcList1"
            fit="cover"
          >
          </el-image>
          <ul
            class="content"
            v-for="(item, i) in applicationInfor[1]"
            :key="'2-' + i"
          >
            <li>{{ item }}</li>
          </ul>
          <!-- 插入导师证明图片 -->
          <el-image
            style="width: 100px; height: 100px"
            :src="url1"
            :preview-src-list="srcList1"
            fit="cover"
          >
          </el-image>
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
            :preview-src-list="srcList2"
            fit="cover"
          >
          </el-image>
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
              <div class="tit">辅导员 [吕菲菲-2020020010]</div>
              <div class="text">通过 {{ dateString }} {{ time }}</div>
              <div class="text">审核意见：</div>
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
    <div class="vover">
      审核完成
    </div>
  </div>
</template>

<script>
import { dateString, time } from "../assets/data/getDate";
export default {
  data: function() {
    return {
      dateString,
      time,
      title: "刘思民-临时进出校申请表",
      basicInfor: [
        "学号：2004190034",
        "姓名：刘思民",
        "性别：男",
        "学院：信息工程学院",
        "年级：2019",
        "导师：邢廷炎"
      ],
      applicationInfor: [
        [
          "联系电话：18310511830",
          "临时进出校类别：临时出校",
          "进校原因：",
          "出发地：",
          "预计进校时刻：",
          "导师/辅导员同意入校证明："
        ],
        [
          "出校原因：实习任务",
          `出校日期：${dateString}`,
          "预计出校时刻：8点",
          "目的地：北京市海淀区 中关村大厦1508室北京AI研发中心 15层",
          `进校日期：${dateString}`,
          "预计进校时刻：21点",
          "导师/辅导员同意出校证明："
        ],
        ["我承诺对上述填写信息的真实性负责：是", "健康码："],
        [
          "宿舍楼：学19楼",
          "宿舍号：0537",
          "位置信息：北京市海淀区学院路街道成府路中国地质大学(北京)"
        ]
      ],

      activeKey: ["2", "3"],
      url1: require("../assets/img/临时进出校审批表1.png"),
      srcList1: [require("../assets/img/临时进出校审批表1.png")],
      url2: require("../assets/img/健康码.jpg"),
      srcList2: [require("../assets/img/健康码.jpg")]
    };
  }
};
</script>

<style scoped>
@import url("./result.css");
</style>
