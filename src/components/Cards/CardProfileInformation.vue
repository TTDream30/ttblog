<template>
  <!-- Profile Information Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full card-profile-information"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    :headStyle="{ paddingRight: 0 }"
  >
    <template #title>
      <h6 class="font-semibold m-0">个人信息</h6>
    </template>
    <a-button type="link" slot="extra" @click="editClick" v-show="!isEdit">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="fill-muted"
          d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
          fill="#111827"
        />
        <path
          class="fill-muted"
          d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
          fill="#111827"
        />
      </svg>
    </a-button>
    <!-- 显示状态 -->
    <div v-show="!isEdit">
      <p class="text-dark">
        {{
          userInfo.introduction
            ? userInfo.introduction
            : "Our dreams, they feel real while we're in them, right? It's only when we wake up that we realize how things are actually strange. Let me ask you a question, you, you never really remember the beginning of a dream do you? You always wind up right in the middle of what's going on。"
        }}
      </p>
      <hr class="my-25" />
      <a-descriptions :column="1">
        <a-descriptions-item label="UserName">
          {{ userInfo.name }}
        </a-descriptions-item>
        <a-descriptions-item label="Sex">
          <a-avatar
            :src="
              userInfo.sex == 1
                ? 'https://iconfont.alicdn.com/t/4b96c6e7-83b8-4299-b819-f5060217859c.png'
                : 'https://iconfont.alicdn.com/s/e2db101c-1437-4e12-9cd5-451c594b5306_origin.svg'
            "
          />
        </a-descriptions-item>
        <a-descriptions-item label="Telephone">
          {{ userInfo ? userInfo.telephone : "00000000000" }}
        </a-descriptions-item>
        <a-descriptions-item label="Email">
          {{ userInfo ? userInfo.email : "xxx@qq.com" }}
        </a-descriptions-item>
        <a-descriptions-item label="Team">
          {{ userInfo.team ? userInfo.team : "xxx" }}
        </a-descriptions-item>
        <a-descriptions-item label="CreateTime">
          {{ userInfo ? userInfo.created_at : "xxxx-xx-xx" }}
        </a-descriptions-item>
        <a-descriptions-item label="Social">
          <a href="#" class="mx-5 px-5">
            <a-icon type="twitter" style="color: #3ea1ec" />
          </a>
          <a href="#" class="mx-5 px-5">
            <a-icon type="facebook" style="color: #344e86" />
          </a>
          <a href="#" class="mx-5 px-5">
            <a-icon type="instagram" style="color: #e1306c" />
          </a>
        </a-descriptions-item>
      </a-descriptions>
    </div>
    <!-- 编辑状态 -->
    <div v-show="isEdit">
      <a-form-model
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        class="headerImg"
      >
        <a-form-model-item>
          <div>
            <header-img></header-img>
          </div>
        </a-form-model-item>
        <a-form-model-item label="UserName">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item label="Sex">
          <a-radio-group v-model="form.sex">
            <a-radio value="male"> Male </a-radio>
            <a-radio value="female"> Female </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="Email">
          <span>{{ userInfo.email }}</span>
        </a-form-model-item>
        <a-form-model-item label="Telephone">
          <span>{{ userInfo.telephone }}</span>
        </a-form-model-item>
        <a-form-model-item label="Team">
          <a-input v-model="form.team" />
        </a-form-model-item>
        <a-form-model-item label="CreateTime">
          <span>{{ userInfo.created_at }}</span>
        </a-form-model-item>
        <a-form-model-item label="Introduction">
          <a-input v-model="form.introduction" />
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit"> Update </a-button>
          <a-button style="margin-left: 10px" @click="onCancel">
            Cancel
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </a-card>
  <!-- / Profile Information Card -->
</template>

<script>
import HeaderImg from "../../components/Common/HeaderImg.vue";

export default {
  components: {
    // HeaderImg
    HeaderImg,
  },
  props: {
    userInfo: {
      type: Object,
    },
  },
  data() {
    return {
      isEdit: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 11 },
      headerImgUrl:
        "https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2021/05/26164541/Peter-Greenwood-Folio-Illustration-Ondot-City-Tick.jpg",
      form: {
        name: "",
        sex: "",
        email: "",
        telephone: "",
        team: "",
        introduction: "",
      },
    };
  },
  methods: {
    editClick() {
      this.isEdit = true;
      console.log("2=", this.userInfo);
      this.form.name = this.userInfo.name;
      this.form.sex = this.userInfo.sex ? "male" : "female";
      this.form.email = this.userInfo.email;
      this.form.telephone = this.userInfo.telephone;
      this.form.team = this.userInfo.team;
      this.form.introduction = this.userInfo.introduction;
    },

    onSubmit() {
      console.log("submit!", this.form);
      this.isEdit = false;
    },
    onCancel() {
      console.log("cancel");
      this.isEdit = false;
    },
  },
};
</script>
