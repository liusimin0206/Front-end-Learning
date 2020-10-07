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
export default {
  data: function() {
    return {
      list: [
        {
          name: "刘思民-2004190034",
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: dateString
        },
        {
          name: "刘思民-2004190034",
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-10-4"
        },
        {
          name: "刘思民-2004190034",
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-09-19"
        },
        {
          name: "刘思民-2004190034",
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-09-18"
        },
        {
          name: "刘思民-2004190034",
          department: "部门/学院: 信息工程学院",
          result: "审核完成",
          date: "2020-09-16"
        },
        {
          name: "刘思民-2004190034",
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
