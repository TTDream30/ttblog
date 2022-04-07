<!-- 
	This is the dashboard page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <div>
    <!-- Counter Widgets -->
    <a-row :gutter="24">
      <a-col
        :span="24"
        :lg="12"
        :xl="6"
        class="mb-24"
        v-for="(stat, index) in stats"
        :key="index"
      >
        <!-- Widget 1 Card -->
        <WidgetCounter
          :title="stat.title"
          :value="stat.value"
          :prefix="stat.prefix"
          :suffix="stat.suffix"
          :icon="stat.icon"
          :status="stat.status"
        ></WidgetCounter>

        <!-- / Widget 1 Card -->
      </a-col>
    </a-row>
    <!-- / Counter Widgets -->

    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="10" class="mb-24">
        <!-- Active Users Card -->
        <CardBarChart></CardBarChart>
        <!-- Active Users Card -->
      </a-col>
      <a-col :span="24" :lg="14" class="mb-24">
        <!-- Sales Overview Card -->
        <CardLineChart></CardLineChart>
        <!-- / Sales Overview Card -->
      </a-col>
    </a-row>
    <!-- / Charts -->

    <!-- Table & Timeline -->
    <a-row :gutter="24" type="flex" align="stretch">
      <!-- Table -->
      <a-col :span="24" :lg="16" class="mb-24">
        <!-- Projects Table Card -->
        <CardProjectTable
          :data_article="tableData_article"
          :columns_article="tableColumns_article"
          :data_resources="tableData_resources"
          :columns_resources="tableColumns_resources"
        ></CardProjectTable>
        <!-- / Projects Table Card -->
      </a-col>
      <!-- / Table -->

      <!-- Timeline -->
      <a-col :span="24" :lg="8" class="mb-24">
        <!-- Orders History Timeline Card -->
        <CardOrderHistory></CardOrderHistory>
        <!-- / Orders History Timeline Card -->
      </a-col>
      <!-- / Timeline -->
    </a-row>
    <!-- / Table & Timeline -->

    <!-- Cards -->
    <!-- <a-row :gutter="24" type="flex" align="stretch"> -->
    <!-- <a-col :span="24" :xl="14" class="mb-24"> -->
    <!-- Information Card 1 -->
    <!-- <CardInfo></CardInfo> -->
    <!-- / Information Card 1 -->
    <!-- </a-col> -->
    <!-- <a-col :span="24" :xl="10" class="mb-24"> -->
    <!-- Information Card 2 -->
    <!-- <CardInfo2></CardInfo2> -->
    <!-- / Information Card 2 -->
    <!-- </a-col> -->
    <!-- </a-row> -->
    <!-- / Cards -->
  </div>
</template>

<script>
// Bar chart for "Active Users" card.
import CardBarChart from "../components/Cards/CardBarChart";

// Line chart for "Sales Overview" card.
import CardLineChart from "../components/Cards/CardLineChart";

// Counter Widgets
import WidgetCounter from "../components/Widgets/WidgetCounter";

// "Projects" table component.
import CardProjectTable from "../components/Cards/CardProjectTable";

// Order History card component.
import CardOrderHistory from "../components/Cards/CardOrderHistory";

// Information card 1.
import CardInfo from "../components/Cards/CardInfo";

// Information card 2.
import CardInfo2 from "../components/Cards/CardInfo2";

// Counter Widgets stats
const stats = [
  {
    title: "获赞",
    value: 53000,
    prefix: "",
    icon: `
<svg t="1649151436457"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11885" width="28" height="28"><path d="M889.6 396.8 608 396.8C633.6 262.4 684.8 96 576 44.8 460.8-6.4 454.4 64 441.6 179.2c-12.8 121.6-192 249.6-192 249.6l0 563.2 608 0c83.2-38.4 134.4-377.6 160-499.2C1043.2 371.2 889.6 396.8 889.6 396.8z" p-id="11886"></path><path d="M0 428.8l179.2 0 0 569.6-179.2 0 0-569.6Z" p-id="11887"></path></svg>`,
  },
  {
    title: "被收藏",
    value: 3200,
    icon: `
	<svg t="1649151314871"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11005" width="28" height="28"><path d="M929.344 204.8H478.656C468.8 204.8 460.8 196.8 460.8 186.944v-34.752C460.8 100.16 418.24 57.6 366.144 57.6H94.656C42.56 57.6 0 100.16 0 152.256v777.152C0 981.44 42.56 1024 94.656 1024h834.752c52.032 0 94.656-42.56 94.656-94.656V299.456C1024 247.36 981.44 204.8 929.344 204.8zM602.24 757.568l-85.12-44.8c-5.184-2.752-11.392-2.752-16.64 0l-85.12 44.8c-13.056 6.912-28.352-4.224-25.856-18.816l16.256-94.848a17.92 17.92 0 0 0-5.12-15.808L333.504 562.752c-10.88-10.624-4.352-29.184 10.816-30.528l91.456-8.32c6.336-0.576 11.904-4.48 14.528-10.24l42.24-90.688c6.4-13.76 25.92-13.76 32.32 0l42.24 90.688c2.688 5.76 8.256 9.664 14.528 10.24l91.456 8.32c15.168 1.408 21.76 19.904 10.816 30.528L617.024 628.16c-4.224 4.096-6.144 9.984-5.12 15.808l16.256 94.848c2.496 14.528-12.8 25.664-25.92 18.752z" fill="#666666" p-id="11006"></path></svg>
						`,
  },
  {
    title: "粉丝",
    value: 1200,
    prefix: "",
    status: "danger",
    icon: `
						<svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="#111827"/>
							<path d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z" fill="#111827"/>
							<path d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z" fill="#111827"/>
							<path d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z" fill="#111827"/>
						</svg>`,
  },
  {
    title: "待处理消息",
    value: 8,
    prefix: "",
    icon: `
	<svg t="1649150723494"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2064" width="28" height="28"><path d="M512 906.6c-53.3 0-104.9-10.4-153.6-31-47-19.9-89.2-48.3-125.4-84.6-36.2-36.2-64.7-78.4-84.6-125.4-20.6-48.7-31-100.4-31-153.6s10.4-104.9 31-153.6c19.9-47 48.3-89.2 84.6-125.4 36.2-36.2 78.4-64.7 125.4-84.6 48.7-20.6 100.4-31 153.6-31s104.9 10.4 153.6 31c47 19.9 89.2 48.3 125.4 84.6 36.2 36.2 64.7 78.4 84.6 125.4 20.6 48.7 31 100.4 31 153.6s-10.4 104.9-31 153.6c-19.9 47-48.3 89.2-84.6 125.4-36.2 36.2-78.4 64.7-125.4 84.6-48.7 20.6-100.3 31-153.6 31z m0-702.9c-82.4 0-159.8 32.1-218 90.3-58.2 58.2-90.3 135.7-90.3 218s32.1 159.8 90.3 218c58.2 58.2 135.7 90.3 218 90.3s159.8-32.1 218-90.3c58.2-58.2 90.3-135.7 90.3-218s-32-159.8-90.3-218c-58.2-58.3-135.6-90.3-218-90.3z" fill="#242F44" p-id="2065"></path><path d="M245.7 555.1h-85.1c-23.8 0-43.1-19.3-43.1-43.1s19.3-43.1 43.1-43.1h85.1c23.8 0 43.1 19.3 43.1 43.1s-19.3 43.1-43.1 43.1zM512 292.3c-23.8 0-43.1-19.3-43.1-43.1v-46.7c0-23.8 19.3-43.1 43.1-43.1s43.1 19.3 43.1 43.1v46.7c0 23.8-19.3 43.1-43.1 43.1zM512 870.5c-23.8 0-43.1-19.3-43.1-43.1v-42.2c0-23.8 19.3-43.1 43.1-43.1s43.1 19.3 43.1 43.1v42.2c0 23.7-19.3 43.1-43.1 43.1zM820.1 539.7h-42.3c-23.8 0-43.1-19.3-43.1-43.1s19.3-43.1 43.1-43.1h42.3c23.8 0 43.1 19.3 43.1 43.1s-19.3 43.1-43.1 43.1z" fill="#242F44" p-id="2066"></path><path d="M455.4 318.5h84.3v254.1h-84.3z" fill="#FFCE00" p-id="2067"></path><path d="M455.4 517h180.1v90.3H455.4z" fill="#FFCE00" p-id="2068"></path></svg>
						`,
  },
];

// "Projects" table list of columns and their properties.
const tableColumns_article = [
  {
    title: "名称",
    dataIndex: "information",
    scopedSlots: { customRender: "information" },
    width: 300,
  },
  {
    title: "作者",
    dataIndex: "members",
    scopedSlots: { customRender: "members" },
  },
  {
    title: "团队",
    dataIndex: "team",
    class: "font-bold text-muted text-sm",
  },
  {
    title: "点击量",
    scopedSlots: { customRender: "completion" },
    dataIndex: "completion",
  },
];

const tableColumns_resources = [
  {
    title: "名称",
    dataIndex: "information",
    scopedSlots: { customRender: "information" },
    width: 300,
  },
  {
    title: "文件类型",
    scopedSlots: { customRender: "type" },
    dataIndex: "type",
  },
  {
    title: "作者",
    dataIndex: "members",
    scopedSlots: { customRender: "members" },
  },
  {
    title: "团队",
    dataIndex: "team",
    class: "font-bold text-muted text-sm",
  },

  {
    title: "下载次数",
    scopedSlots: { customRender: "counts" },
    dataIndex: "counts",
  },
];

// "Projects" table list of rows and their properties.
const tableData_article = [
  {
    key: "1",
    information: {
      name: "如何搭配GO语言的生产环境",
      logo: "images/logos/logo-shopify.svg",
    },
    members: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
    team: "XXX",
    completion: 60,
  },
  {
    key: "2",
    information: {
      name: "编写Hello World -- Golang",
      logo: "images/logos/logo-atlassian.svg",
    },
    members: ["images/face-4.jpg", "images/face-3.jpg"],
    team: "TT Dream",
    completion: 10,
  },
  {
    key: "3",
    information: {
      name: "GORM -- 一个使用Go语言编写的ORM框架",
      logo: "images/logos/logo-slack.svg",
    },
    members: ["images/face-1.jpg", "images/face-2.jpg", "images/face-3.jpg"],
    team: "Not Set",
    completion: {
      label: "100",
      status: "success",
      value: 100,
    },
  },
  {
    key: "4",
    information: {
      name: "GoWeb框架 -- Gin框架的使用",
      logo: "images/logos/logo-spotify.svg",
    },
    members: ["images/face-1.jpg", "images/face-2.jpg"],
    team: "SWAG",
    completion: {
      label: "100",
      status: "success",
      value: 100,
    },
  },
  {
    key: "5",
    information: {
      name: "K8s的初步了解",
      logo: "images/logos/logo-jira.svg",
    },
    members: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
    team: "FORXX",
    completion: 80,
  },
  {
    key: "6",
    information: {
      name: "K8s的基本使用",
      logo: "images/logos/logo-invision.svg",
    },
    members: ["images/face-1.jpg", "images/face-4.jpg", "images/face-3.jpg"],
    team: "ZZAT",
    completion: {
      label: "Cancelled",
      status: "exception",
      value: 100,
    },
  },
  {
    key: "7",
    information: {
      name: "TT个人博客系统的使用方法",
      logo: "images/logos/logo-invision.svg",
    },
    members: ["images/face-1.jpg", "images/face-4.jpg", "images/face-3.jpg"],
    team: "TT team",
    completion: {
      label: "Cancelled",
      status: "exception",
      value: 100,
    },
  },
  {
    key: "8",
    information: {
      name: "Linux的运用",
      logo: "images/logos/logo-jira.svg",
    },
    members: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
    team: "FORXX",
    completion: 80,
  },
];

const tableData_resources = [
  {
    key: "1",
    information: {
      name: "JavaWeb学生管理系统",
      logo: "images/logos/logo-shopify.svg",
    },
    members: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
    team: "TT",
    counts: 60,
    type: ".zip",
  },
  {
    key: "2",
    information: {
      name: "Java多线程象棋游戏",
      logo: "images/logos/logo-atlassian.svg",
    },
    members: ["images/face-4.jpg", "images/face-3.jpg"],
    team: "TT Dream",
    counts: 10,
    type: ".zip",
  },
  {
    key: "3",
    information: {
      name: "C语言迷宫游戏",
      logo: "images/logos/logo-slack.svg",
    },
    members: ["images/face-1.jpg", "images/face-2.jpg", "images/face-3.jpg"],
    team: "Not Set",
    counts: 100,
    type: ".zip",
  },
  {
    key: "4",
    information: {
      name: "Go语言Gin项目Demo",
      logo: "images/logos/logo-spotify.svg",
    },
    members: ["images/face-1.jpg", "images/face-2.jpg"],
    team: "SWAG",
    counts: 80,
    type: ".zip",
  },
  {
    key: "5",
    information: {
      name: "K8s项目管理机制",
      logo: "images/logos/logo-jira.svg",
    },
    members: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
    team: "FORXX",
    counts: 70,
    type: ".zip",
  },
  {
    key: "6",
    information: {
      name: "Shopify插件实例",
      logo: "images/logos/logo-invision.svg",
    },
    members: ["images/face-1.jpg", "images/face-4.jpg", "images/face-3.jpg"],
    team: "ZZAT",
    counts: 65,
    type: ".zip",
  },
  {
    key: "7",
    information: {
      name: "TT个人博客系统框架",
      logo: "images/logos/logo-invision.svg",
    },
    members: ["images/face-1.jpg", "images/face-4.jpg", "images/face-3.jpg"],
    team: "TT team",
    counts: 125,
    type: ".zip",
  },
  {
    key: "8",
    information: {
      name: "TakeDream小程序项目资源",
      logo: "images/logos/logo-jira.svg",
    },
    members: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
    team: "FORXX",
    counts: 456,
    type: ".zip",
  },
];

export default {
  components: {
    CardBarChart,
    CardLineChart,
    WidgetCounter,
    CardProjectTable,
    CardOrderHistory,
    CardInfo,
    CardInfo2,
  },
  data() {
    return {
      // Associating table data with its corresponding property.
      tableData_article,

      // Associating table columns with its corresponding property.
      tableColumns_article,

      // Associating table data with its corresponding property.
      tableData_resources,

      // Associating table columns with its corresponding property.
      tableColumns_resources,

      // Counter Widgets Stats
      stats,
    };
  },
};
</script>

<style lang="scss"></style>
