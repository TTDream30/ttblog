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
              <a-radio-button value="reply">REPLY</a-radio-button>
            </a-radio-group>
          </a-col>
        </a-row>
      </template>
    </a-card>
    <!-- User Profile Card -->

    <a-row type="flex" :gutter="24" v-show="isOverview">
      <!-- Platform Settings Column -->
      <!-- <a-col :span="24" :md="8" class="mb-24"> -->
      <!-- Platform Settings Card -->
      <!-- <CardPlatformSettings></CardPlatformSettings> -->
      <!-- / Platform Settings Card -->
      <!-- </a-col> -->
      <!-- / Platform Settings Column -->

      <!-- Profile Information Column -->
      <a-col :span="24" :md="14" class="mb-24">
        <!-- Profile Information Card -->
        <CardProfileInformation :userInfo="userInfo"></CardProfileInformation>
        <!-- / Profile Information Card -->
      </a-col>
      <!-- / Profile Information Column -->

      <!-- Conversations Column -->
      <a-col :span="24" :md="10" class="mb-24">
        <!-- Conversations Card -->
        <CardConversations :data="conversationsData"></CardConversations>
        <!-- / Conversations Card -->
      </a-col>
      <!-- / Conversations Column -->
    </a-row>

    <!-- 个人信息页 -->

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
        <h6 class="font-semibold">图库</h6>
        <p>Upload the picture you want to save here</p>
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
              <a-icon v-else type="plus" />
              <!-- <svg
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
              </svg> -->

              <div class="ant-upload-text font-semibold text-dark">
                创建相册
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
    title: "街头一角",
    content: "记录扫街的点点滴滴",
    cover: "images/home-decor-3.jpeg",
    // team: [
    //   "images/face-1.jpg",
    //   "images/face-4.jpg",
    //   "images/face-2.jpg",
    //   "images/face-3.jpg",
    // ],
  },
  {
    id: 2,
    title: "夏日风情",
    content: "夏天的风，浪漫的情",
    cover: "images/home-decor-2.jpeg",
    // team: [
    //   "images/face-1.jpg",
    //   "images/face-4.jpg",
    //   "images/face-2.jpg",
    //   "images/face-3.jpg",
    // ],
  },
  {
    id: 3,
    title: "黑白摄影",
    content: "荧幕的一开始，是黑与白",
    cover: "images/home-decor-1.jpeg",
    // team: [
    //   "images/face-1.jpg",
    //   "images/face-4.jpg",
    //   "images/face-2.jpg",
    //   "images/face-3.jpg",
    // ],
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
      isReply: false,
      isOverview: true,
    };
  },
  methods: {
    profileBtnsChange(val) {
      //   console.log("val=", val.target.value);
      //   初始化
      this.isReply = false;
      this.isOverview = false;
      switch (val.target.value) {
        case "reply":
          this.isReply = true;
          break;
        case "overview":
          this.isOverview = true;
          break;
        default:
          this.isOverview = true;
          break;
      }
    },
  },
  computed: mapState({
    userInfo: (state) => state.users.userInfo,
  }),
};
</script>

<style lang="scss"></style>
