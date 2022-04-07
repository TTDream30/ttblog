<!-- 
	This is the user profile page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <div>
    <!-- Header Background Image -->
    <div
      class="profile-nav-bg"
      style="background-image: url('images/bg-profile2.jpg')"
    ></div>
    <!-- / Header Background Image -->

    <!-- User Profile Card -->
    <a-card
      :bordered="false"
      class="card-profile-head"
      :bodyStyle="{ padding: 0 }"
    >
      <template #title>
        <a-row type="flex" align="middle">
          <a-col :span="24" :md="12" class="col-info">
            <a-avatar
              :size="74"
              shape="square"
              :src="userInfo ? userInfo.img_url : headerImgUrl"
            />
            <div class="avatar-info">
              <h4 class="font-semibold m-0">{{ userInfo.name }}</h4>
              <p>CEO / Co-Founder</p>
            </div>
          </a-col>
          <a-col
            :span="24"
            :md="12"
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
            "
          >
            <a-radio-group
              v-model="profileHeaderBtns"
              size="small"
              @change="profileBtnsChange"
            >
              <a-radio-button value="overview">OVERVIEW</a-radio-button>
              <a-radio-button value="information">INFORMATION</a-radio-button>
              <a-radio-button value="reply">REPLY</a-radio-button>
            </a-radio-group>
          </a-col>
        </a-row>
      </template>
    </a-card>
    <!-- User Profile Card -->

    <a-row type="flex" :gutter="24" v-show="isOverview">
      <!-- Platform Settings Column -->
      <a-col :span="24" :md="8" class="mb-24">
        <!-- Platform Settings Card -->
        <CardPlatformSettings></CardPlatformSettings>
        <!-- / Platform Settings Card -->
      </a-col>
      <!-- / Platform Settings Column -->

      <!-- Profile Information Column -->
      <a-col :span="24" :md="8" class="mb-24">
        <!-- Profile Information Card -->
        <CardProfileInformation></CardProfileInformation>
        <!-- / Profile Information Card -->
      </a-col>
      <!-- / Profile Information Column -->

      <!-- Conversations Column -->
      <a-col :span="24" :md="8" class="mb-24">
        <!-- Conversations Card -->
        <CardConversations :data="conversationsData"></CardConversations>
        <!-- / Conversations Card -->
      </a-col>
      <!-- / Conversations Column -->
    </a-row>

    <!-- 个人信息页 -->
    <template>
      <div v-show="isInfo">
        <a-row :gutter="16" v-show="isEdit">
          <a-col :span="24">
            <a-card title="INFORMATION" :bordered="false">
              <!-- 可编辑状态 -->
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
            </a-card>
          </a-col>
        </a-row>
        <!-- 显示状态 -->
        <a-row :gutter="16" v-show="!isEdit" class="cardInfo">
          <a-col :span="18">
            <a-card title="INFORMATION" :bordered="false">
              <a-row :gutter="16">
                <a-col :span="16">
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
                    <a-descriptions-item label="Introdution">
                      {{
                        userInfo.introduction
                          ? userInfo.introduction
                          : "Our dreams, they feel real while we're in them, right? It's only when we wake up that we realize how things are actually strange. Let me ask you a question, you, you never really remember the beginning of a dream do you? You always wind up right in the middle of what's going on。"
                      }}
                    </a-descriptions-item>
                  </a-descriptions>
                </a-col>
                <a-col :span="8">
                  <a-avatar
                    shape="square"
                    :size="100"
                    :src="userInfo ? userInfo.img_url : headerImgUrl"
                  />
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-button type="primary" size="large" @click="editClick">
              <span>Edit</span>
            </a-button>
          </a-col>
        </a-row>
      </div>
    </template>

    <!-- 待回复消息列表 -->
    <template>
      <card-reply-list v-show="isReply"></card-reply-list>
    </template>

    <!-- Projects Card -->
    <a-card
      :bordered="false"
      class="header-solid h-full mb-24"
      :bodyStyle="{ paddingTop: '14px' }"
      v-show="isOverview"
    >
      <template #title>
        <h6 class="font-semibold">Projects</h6>
        <p>Architects design houses</p>
      </template>

      <a-row type="flex" :gutter="[24, 24]" align="stretch">
        <!-- Project Column -->
        <a-col
          :span="24"
          :md="12"
          :xl="6"
          v-for="(project, index) in projects"
          :key="index"
        >
          <CardProject
            :id="project.id"
            :title="project.title"
            :content="project.content"
            :cover="project.cover"
            :team="project.team"
          ></CardProject>
        </a-col>
        <!-- / Project Column -->

        <!-- Project Column -->
        <a-col :span="24" :md="12" :xl="6">
          <!-- Project Upload Component -->
          <a-upload
            name="avatar"
            list-type="picture-card"
            class="projects-uploader"
            :show-upload-list="false"
          >
            <img v-if="false" src="" alt="avatar" />
            <div v-else>
              <a-icon v-if="false" type="loading" />
              <svg
                v-else
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 6.70711C5.90237 6.31658 5.90237 5.68342 6.29289 5.29289L9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289L13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711C13.3166 7.09763 12.6834 7.09763 12.2929 6.70711L11 5.41421L11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13L9 5.41421L7.70711 6.70711C7.31658 7.09763 6.68342 7.09763 6.29289 6.70711Z"
                  fill="#111827"
                />
              </svg>

              <div class="ant-upload-text font-semibold text-dark">
                Upload New Project
              </div>
            </div>
          </a-upload>
          <!-- / Project Upload Component -->
        </a-col>
        <!-- / Project Column -->
      </a-row>
    </a-card>
    <!-- / Projects Card -->
  </div>
</template>

<script>
import CardPlatformSettings from "../components/Cards/CardPlatformSettings";
import CardProfileInformation from "../components/Cards/CardProfileInformation";
import CardConversations from "../components/Cards/CardConversations";
import CardProject from "../components/Cards/CardProject";
import { mapState } from "vuex";
import HeaderImg from "../components/Common/HeaderImg.vue";
import CardReplyList from "../components/Cards/CardReplyList.vue";

// Conversation's list data.
const conversationsData = [
  {
    id: "1",
    title: "Sophie B.",
    code: "Hi! I need more information…",
    avatar: "images/face-3.jpg",
  },
  {
    id: "2",
    title: "Anne Marie",
    code: "Awesome work, can you…",
    avatar: "images/face-4.jpg",
  },
  {
    id: "3",
    title: "Ivan",
    code: "About files I can…",
    avatar: "images/face-5.jpeg",
  },
  {
    id: "4",
    title: "Peterson",
    code: "Have a great afternoon…",
    avatar: "images/face-6.jpeg",
  },
  {
    id: "5",
    title: "Nick Daniel",
    code: "Hi! I need more information…",
    avatar: "images/face-2.jpg",
  },
];

// Project cards data
const projects = [
  {
    id: 1,
    title: "Modern",
    content:
      "As Uber works through a huge amount of internal management turmoil.",
    cover: "images/home-decor-3.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Scandinavian",
    content:
      "Music is something that every person has his or her own specific opinion about.",
    cover: "images/home-decor-2.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Minimalist",
    content:
      "Different people have different taste, and various types of music, Zimbali Resort.",
    cover: "images/home-decor-1.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
];

export default {
  components: {
    CardPlatformSettings,
    CardProfileInformation,
    CardConversations,
    CardProject,
    // HeaderImg
    HeaderImg,
    CardReplyList,
  },
  data() {
    return {
      // Active button for the "User Profile" card's radio button group.
      profileHeaderBtns: "overview",

      // Associating Conversation's list data with its corresponding property.
      conversationsData,

      // Project cards data
      projects,

      //   切换到项目部分
      isInfo: false,
      isReply: false,
      isOverview: true,
      isEdit: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
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
    profileBtnsChange(val) {
      //   console.log("val=", val.target.value);
      //   初始化
      this.isInfo = false;
      this.isReply = false;
      this.isOverview = false;
      switch (val.target.value) {
        case "information":
          this.isInfo = true;
          break;
        case "reply":
          this.isReply = true;
          break;
        case "overview":
          this.isOverview = true;
          break;
        default:
          this.isInfo = true;
          break;
      }
    },
    onSubmit() {
      console.log("submit!", this.form);
      this.isEdit = false;
    },
    onCancel() {
      console.log("cancel");
      this.isEdit = false;
    },
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
  },
  computed: mapState({
    userInfo: (state) => state.users.userInfo,
  }),
};
</script>

<style lang="scss"></style>
