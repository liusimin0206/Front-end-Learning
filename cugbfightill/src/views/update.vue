<template>
  <div class="update">
    <div class="form">
      <a-input class="form-item" v-model="userName" placeholder="您的姓名">
        <a-icon slot="prefix" type="user" />
      </a-input>
      <a-input
        class="form-item"
        v-model="userId"
        placeholder="您的学号"
        prefix="ID"
      >
      </a-input>
      <a-upload
        class="form-item"
        name="file"
        accept="image/*"
        list-type="picture"
        @change="handleChange"
        :beforeUpload="beforeUpload"
        :fileList="fileList"
      >
        <a-button>上传附件</a-button>
        <span class="uploadtips" @click.stop
          >支持png、jpg、jpeg格式，最大不超过2M。</span
        >
      </a-upload>
      <div class="form-item button">
        <a-button type="primary" @click="storeUserMessage">
          确认
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      userName: "",
      userId: "",
      userPic: ""
    };
  },

  methods: {
    handleChange(info) {
      let fileList = [...info.fileList];
      fileList = fileList.slice(-1);
      this.fileList = fileList;
    },
    beforeUpload(file) {
      const reg = new RegExp(/^.*?\.(jpg|jpeg|png)$/, "i");

      if (!reg.test(file.name)) {
        file.status = "error";
      } else if (file.size > 2097152) {
        file.status = "error";
      }

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userPic = reader.result;
      };
      return false;
    },
    storePicture(base64File) {
      localStorage.setItem("jianKangMa", base64File);
    },
    storeUserInfo(name, id) {
      localStorage.setItem("_name", name);
      localStorage.setItem("_id", id);
    },
    storeUserMessage() {
      this.storePicture(this.userPic);
      this.storeUserInfo(this.userName, this.userId);

      // this.$router.push("/");
      location.replace("./");
    }
  }
};
</script>

<style scoped>
.update {
  margin: 20px;
}
.form-item {
  display: block;
  margin-bottom: 20px;
}
.form-item.button {
  text-align: center;
}
</style>
