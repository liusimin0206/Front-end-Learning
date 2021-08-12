<template>
  <div class="update">
    <a-form-model
      ref="form"
      :model="form"
      :rules="rules"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-form-model-item label="姓名" prop="userName">
        <a-input v-model="form.userName" placeholder="您的姓名">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="学号" prop="userId">
        <a-input v-model="form.userId" placeholder="您的学号" prefix="ID">
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="健康码" prop="userPic">
        <a-upload
          name="file"
          accept="image/*"
          list-type="picture"
          @change="handleChange"
          :beforeUpload="beforeUpload"
          :fileList="fileList"
        >
          <a-button>上传附件</a-button>
          <span class="uploadtips" @click.stop
            >支持png、jpg、jpeg格式，最大不超过2M。
          </span>
        </a-upload>
      </a-form-model-item>
      <a-form-model-item label="行程码" prop="routePic">
        <a-upload
          name="file"
          accept="image/*"
          list-type="picture"
          @change="handleChange($event, 1)"
          :beforeUpload="beforeUpload1"
          :fileList="fileList1"
        >
          <a-button>上传附件</a-button>
          <span class="uploadtips" @click.stop
            >支持png、jpg、jpeg格式，最大不超过2M。
          </span>
        </a-upload>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
        <a-button type="primary" @click="storeUserMessage"> 确认 </a-button>
        <a-button style="margin-left: 10px" @click="resetForm"> 重置 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      fileList1: [],
      form: {
        userName: "",
        userId: "",
        userPic: "",
        routePic: "",
      },
      rules: {
        userName: [
          {
            required: true,
            message: "Please input name",
            trigger: "blur",
          },
        ],
        userId: [
          {
            required: true,
            message: "Please input userId",
            trigger: "blur",
          },
        ],
        userPic: [
          {
            required: true,
            message: "Please upload picture",
            trigger: "blur",
          },
        ],
        routePic: [
          {
            required: true,
            message: "Please upload picture",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    handleChange(info, type) {
      if (type === 1) {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1);
        this.fileList1 = fileList;
      } else {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1);
        this.fileList = fileList;
      }
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
        this.form.userPic = reader.result;
      };
      return false;
    },
    beforeUpload1(file) {
      const reg = new RegExp(/^.*?\.(jpg|jpeg|png)$/, "i");

      if (!reg.test(file.name)) {
        file.status = "error";
      } else if (file.size > 2097152) {
        file.status = "error";
      }

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.routePic = reader.result;
      };
      return false;
    },
    storePicture(base64File) {
      localStorage.setItem("jianKangMa", base64File);
    },
    storePicture1(base64File) {
      localStorage.setItem("xingChenMa", base64File);
    },
    storeUserInfo(name, id) {
      localStorage.setItem("_name", name);
      localStorage.setItem("_id", id);
    },
    storeUserMessage() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.storePicture(this.form.userPic);
          this.storePicture1(this.form.routePic);
          this.storeUserInfo(this.form.userName, this.form.userId);
          this.$router.push("/");
          this.$emit("refresh");
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style scoped>
.update {
  margin: 20px;
}
</style>
