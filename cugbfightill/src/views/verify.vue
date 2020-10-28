<template>
  <div class="verify">
    <verifyitem
      v-for="(item, i) in list"
      :key="i"
      class="verifyitem"
      @click.native="handleClick"
    >
      <template v-slot:title>
        <div class="left">{{ item.name }}</div>
        <div class="right">{{ item.date }}</div>
      </template>
      <template v-slot:section>
        <div class="left">{{ item.department }}</div>
        <div class="right">{{ item.result }}</div>
      </template>
    </verifyitem>
  </div>
</template>

<script>
import verifyitem from "@/components/verifyitem.vue";
import { dateString } from "../assets/data/getDate";
import { userInfo } from "../assets/data/getInfo";

export default {
  data: function() {
    return {
      list: [
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: dateString
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-10-24"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-10-19"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-10-18"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-10-10"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-10-6"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-10-4"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-09-19"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-09-18"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-09-16"
        },
        {
          name: `${userInfo.name}-${userInfo.id}`,
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-09-15"
        }
      ]
    };
  },
  components: {
    verifyitem
  },
  created() {},
  methods: {
    handleClick() {
      this.$router.push("/result");
    }
  }
};
</script>

<style>
.verify .verifyitem {
  margin: 10px 0;
}
</style>
