<template>
  <div class="home">
    <div class="date">
      <div class="content">日期：{{ dateString }}</div>
    </div>

    <applicationEntry
      v-for="(item, i) in list"
      :key="i"
      class="applicationEntry"
    >
      <template v-slot:title>
        <div class="title">{{ item.title }}</div>
      </template>
      <template v-slot:detail>
        <div
          v-for="(idetail, i) in item.detail"
          :key="i"
          class="item"
          @click="handleClick(i)"
        >
          {{ idetail }}
        </div>
      </template>
    </applicationEntry>

    <div class="end">
      没有更多了
    </div>
    <div class="mask" v-show="showLoading" @click="showLoading = false">
      <div class="box">
        <a-spin>
          <a-icon
            slot="indicator"
            type="loading"
            style="font-size: 24px"
            spin
          />
        </a-spin>
        加载中
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import applicationEntry from "@/components/applicationEntry.vue";
import { dateString } from "../assets/data/getDate";
export default {
  name: "Home",
  data: function() {
    return {
      dateString: dateString,
      list: [
        // {
        //   title: "2020年秋季学期新生报到申请表",
        //   detail: ["申请记录和审批状态"]
        // },
        {
          title: "临时进出校申请表",
          detail: ["申请", "申请记录和审批状态"]
        },
        {
          title: "学生返校申请表",
          detail: ["申请", "申请记录和审批状态"]
        },
        {
          title: "在校生离校申请表",
          detail: ["申请", "申请记录和审批状态"]
        },
        {
          title: "在校生“晨午晚”健康打卡",
          detail: ["打卡", "申请记录和审批状态"]
        },
        {
          title: "每日健康打卡",
          detail: ["打卡", "申请记录和审批状态"]
        },
        {
          title: "学生返京（非返校）申请表",
          detail: ["申请", "申请记录和审批状态"]
        },
        {
          title: "学生离京（非离校）申请表",
          detail: ["申请", "申请记录和审批状态"]
        }
      ],
      showLoading: false
    };
  },
  components: {
    applicationEntry
  },
  methods: {
    handleClick(i) {
      if (i == 0) {
        this.showLoading = true;
      }
      if (i == 1) {
        this.$router.push("/verify");
      }
    }
  }
};
</script>

<style scoped>
.date {
  background-color: #fff;
  font-family: "Microsoft YaHei";
}

.date .content {
  margin: 8px 17px;
  padding: 4px 0;
  font-size: 15px;
}

.applicationEntry {
  margin-bottom: 8px;
}
.end {
  text-align: center;
  font-size: 10px;
  color: #969696;
  margin: 20px 0;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.mask .box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: #444;
  padding: 28px;
  font-size: 12px;
}
.mask .box /deep/.ant-spin-spinning {
  display: block;
  margin-bottom: 10px;
  color: #fff;
}
</style>
