<template>
  <div class="verify">
    <verifyitem
      v-for="(item, i) in list"
      :key="i"
      class="verifyitem"
      @click.native="handleClick(item.date)"
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
import { date2Str } from "../assets/data/getDate";
import { userInfo } from "../assets/data/getInfo";

export default {
  data: function() {
    return {
      date: undefined,
      dateList: [],
      list: []
    };
  },
  components: {
    verifyitem
  },
  created() {
    this.date = new Date();
    this.dateList = this.getBefore100Date(this.date);
    this.dateList.forEach(item => {
      let tempDateStr = this.date2Str(item);
      let tempObj = {
        name: `${userInfo.name}-${userInfo.id}`,
        department: "部门/学院: 信息工程学院",
        result: "审核完成",
        date: tempDateStr,
        detailDate: item
      };
      this.list.push(tempObj);
    });
  },
  methods: {
    handleClick(date) {
      this.$router.push({ path: `/result2`, query: { date } });
    },
    getBefore100Date(date) {
      let dateList = [];
      for (let i = 0; i < 100; i++) {
        if (i === 0 || Math.random() > 0.2) {
          let tempDate = new Date();
          tempDate.setDate(date.getDate() - i);
          dateList.push(tempDate);
        }
      }
      return dateList;
    },
    date2Str
  }
};
</script>

<style>
.verify .verifyitem {
  margin: 10px 0;
}
</style>
