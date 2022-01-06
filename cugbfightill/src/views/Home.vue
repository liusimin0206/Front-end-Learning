<template>
  <div class="home">
    <div class="date">
      <div class="content">日期：{{ dateString }}</div>
    </div>

    <applicationEntry v-for="(item, i) in list" :key="i">
      <template v-slot:title>
        <div class="title">{{ item.title }}</div>
      </template>
      <template v-slot:detail>
        <div
          v-for="(idetail, j) in item.detail"
          :key="j"
          class="item"
          @click="handleClick(i, j)"
        >
          {{ idetail }}
        </div>
      </template>
    </applicationEntry>

    <div class="end">
      <span>没有更多了</span>
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
import { date2Str } from "../assets/data/getDate";
export default {
  name: "Home",
  data: function() {
    return {
      dateString: undefined,
      list: [
        {
          title: "每日健康打卡",
          detail: ["打卡", "申请记录和审批状态"]
        },
        {
          title: "当日进出校申请表",
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
        // {
        //   title: "在校生“晨午晚”健康打卡",
        //   detail: ["打卡", "申请记录和审批状态"]
        // },
        {
          title: "校外新冠疫苗接种信息采集表",
          detail: ["申请记录和审批状态"]
        }
      ],
      showLoading: false
    };
  },
  components: {
    applicationEntry
  },
  created() {
    this.dateString = this.date2Str(new Date());
  },
  methods: {
    handleClick(i, j) {
      if (i == 1 && j == 0) {
        this.$router.push("/update");
      } else if (i == 1 && j == 1) {
        this.$router.push("/verify");
      } else if (i == 3 && j == 1) {
        this.$router.push("/verify2");
      } else this.showLoading = true;
    },
    date2Str
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
  border-radius: 10px;
}
.mask .box /deep/.ant-spin-spinning {
  display: block;
  margin-bottom: 10px;
  color: #fff;
}
</style>
