<!-- 
	This is the tables page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <div>
    <!-- Authors Table -->
    <a-row :gutter="24" type="flex">
      <!-- Authors Table Column -->
      <a-col :span="24" :lg="12" class="mb-24">
        <!-- Authors Table Card -->
        <CardAuthorTable
          :data="tableDiaryData"
          :columns="tableDiaryColumns"
        ></CardAuthorTable>
        <!-- / Authors Table Card -->
      </a-col>
      <a-col :span="24" :lg="12" class="mb-24">
        <CardMemberTable
          :data="tableMemberData"
          :columns="tableMemberColumns"
        ></CardMemberTable>
      </a-col>
      <!-- / Authors Table Column -->
    </a-row>
    <!-- / Authors Table -->

    <!-- Projects Table -->
    <a-row :gutter="24" type="flex">
      <a-col :span="24" :lg="8" class="mb-24">
        <CardDailyNews></CardDailyNews>
      </a-col>
      <!-- Projects Table Column -->
      <a-col :span="24" :lg="16" class="mb-24">
        <!-- Projects Table Column -->
        <CardProjectTable2
          :data="tableArticleData"
          :columns="tableArticleColumns"
          :data_resources="tableData_resources"
          :columns_resources="tableColumns_resources"
        ></CardProjectTable2>
        <!-- / Projects Table Column -->
      </a-col>
      <!-- / Projects Table Column -->
    </a-row>
    <!-- / Projects Table -->
  </div>
</template>

<script>
// "Authors" table component.
import CardAuthorTable from "../components/Cards/CardAuthorTable";
import CardMemberTable from "../components/Cards/CardMemberTable";
import CardDailyNews from "../components/Cards/CardDailyNews";

// "Projects" table component.
import CardProjectTable2 from "../components/Cards/CardProjectTable2";

// "Authors" table list of columns and their properties.
const tableDiaryColumns = [
  {
    title: "名称",
    dataIndex: "author",
    scopedSlots: { customRender: "author" },
  },
  {
    title: "内容",
    dataIndex: "context",
    scopedSlots: { customRender: "context" },
  },
  {
    title: "级别",
    dataIndex: "status",
    scopedSlots: { customRender: "status" },
  },
  {
    title: "时间",
    dataIndex: "employed",
    class: "text-muted",
  },
  {
    title: "",
    scopedSlots: { customRender: "editBtn" },
    width: 50,
  },
];

const tableMemberColumns = [
  {
    title: "名称",
    dataIndex: "author",
    scopedSlots: { customRender: "author" },
  },
  {
    title: "职位",
    dataIndex: "func",
    scopedSlots: { customRender: "func" },
  },
  {
    title: "最近上线时间",
    dataIndex: "employed",
    class: "text-muted",
  },
  {
    title: "",
    scopedSlots: { customRender: "editBtn" },
    // width: 10,
  },
];

// "Authors" table list of rows and their properties.
const tableDiaryData = [
  {
    key: "1",
    author: {
      avatar: "images/face-2.jpg",
      name: "Michael John",
      position: "产品经理",
    },
    context: "设计好产品的第一阶段，并完成基本的UI设计",
    status: 1,
    employed: "2022-04-07 13:08",
  },
  {
    key: "2",
    author: {
      avatar: "images/face-3.jpg",
      name: "Alexa Liras",
      position: "后端开发",
    },
    context: "完成第一阶段的后端框架搭建",
    status: 1,
    employed: "2022-04-03 15:02",
  },
  {
    key: "3",
    author: {
      avatar: "images/face-1.jpg",
      name: "Laure Perrier",
      position: "前端开发",
    },
    context: "实现自定义组件的开发",
    status: 1,
    employed: "2022-04-04 15:12",
  },
  {
    key: "4",
    author: {
      avatar: "images/face-4.jpg",
      name: "Miriam Eric",
      position: "研发组长",
    },
    context: "跟进团队项目的开发进度",
    status: 0,
    employed: "2022-04-07 10:35",
  },
  {
    key: "5",
    author: {
      avatar: "images/face-5.jpeg",
      name: "Richard Gran",
      position: "人事经理",
    },
    context: "制定招聘计划，编写好第一阶段的会议议程",
    status: 0,
    employed: "2022-04-07 16:01",
  },
  {
    key: "6",
    author: {
      avatar: "images/face-6.jpeg",
      name: "John Levi",
      position: "产品设计",
    },
    context: "设计好第一阶段的UI开发",
    status: 0,
    employed: "2022-04-07 17:21",
  },
];

const tableMemberData = [
  {
    key: "1",
    author: {
      avatar: "images/face-2.jpg",
      name: "Michael John",
      email: "michael@mail.com",
    },
    func: {
      job: "Manager",
      department: "Organization",
    },

    employed: "2022-04-05 16:58",
  },
  {
    key: "2",
    author: {
      avatar: "images/face-3.jpg",
      name: "Alexa Liras",
      email: "alexa@mail.com",
    },
    func: {
      job: "Programator",
      department: "Developer",
    },

    employed: "2022-04-06 13:28",
  },
  {
    key: "3",
    author: {
      avatar: "images/face-1.jpg",
      name: "Laure Perrier",
      email: "laure@mail.com",
    },
    func: {
      job: "Executive",
      department: "Projects",
    },

    employed: "2022-04-07 21:58",
  },
  {
    key: "4",
    author: {
      avatar: "images/face-4.jpg",
      name: "Miriam Eric",
      email: "miriam@mail.com",
    },
    func: {
      job: "Marketing",
      department: "Organization",
    },

    employed: "2022-04-03 06:00",
  },
  {
    key: "5",
    author: {
      avatar: "images/face-5.jpeg",
      name: "Richard Gran",
      email: "richard@mail.com",
    },
    func: {
      job: "Manager",
      department: "Organization",
    },

    employed: "2022-04-02 13:15",
  },
  {
    key: "6",
    author: {
      avatar: "images/face-6.jpeg",
      name: "John Levi",
      email: "john@mail.com",
    },
    func: {
      job: "Tester",
      department: "Developer",
    },

    employed: "2022-04-07 18:32",
  },
];

// "Projects" table list of columns and their properties.
const tableArticleColumns = [
  {
    title: "名称",
    dataIndex: "company",
    scopedSlots: { customRender: "company" },
    width: 300,
  },
  {
    title: "作者",
    dataIndex: "author",
    scopedSlots: { customRender: "author" },
    width: 200,
    class: "font-semibold text-muted",
  },
  {
    title: "摘要",
    dataIndex: "mainText",
    scopedSlots: { customRender: "mainText" },
    class: "font-semibold text-muted text-sm",
  },
  {
    title: "更新时间",
    scopedSlots: { customRender: "employed" },
    dataIndex: "employed",
  },
  {
    title: "",
    scopedSlots: { customRender: "editBtn" },
    // width: 50,
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
    title: "下载次数",
    scopedSlots: { customRender: "counts" },
    dataIndex: "counts",
  },
];

// "Projects" table list of rows and their properties.
const tableArticleData = [
  {
    key: "1",
    company: {
      name: "如何成为一个优秀的产品经理",
      logo: "images/logos/logo-spotify.svg",
    },
    author: {
      avatar: "images/face-2.jpg",
      name: "Michael John",
      position: "产品经理",
    },
    mainText:
      "产品经理从产品助理到产品专家，每一阶段的工作都会面临不同项目，且在工作期间对于能力的要求也会越来越高，视野不同了，格局也就不同了",
    employed: "2022-04-05 16:58",
    budget: "$14,000",
    completion: 60,
  },
  {
    key: "2",
    company: {
      name: "30分钟快速搭建一个后端框架",
      logo: "images/logos/logo-atlassian.svg",
    },
    author: {
      avatar: "images/face-3.jpg",
      name: "Alexa Liras",
      position: "后端开发",
    },
    mainText: "working",
    budget: "$3,000",
    completion: 10,
    employed: "2022-04-06 13:28",
  },
  {
    key: "3",
    company: {
      name: "学习前端的第一步",
      logo: "images/logos/logo-slack.svg",
    },
    author: {
      avatar: "images/face-1.jpg",
      name: "Laure Perrier",
      position: "前端开发",
    },
    mainText: "done",
    budget: "Not Set",
    completion: {
      status: "success",
      value: 100,
    },
    employed: "2022-04-07 21:58",
  },
  {
    key: "4",
    company: {
      name: "如何合理分配研发任务",
      logo: "images/logos/logo-spotify.svg",
    },
    author: {
      avatar: "images/face-4.jpg",
      name: "Miriam Eric",
      position: "研发组长",
    },
    mainText: "canceled",
    budget: "$20,600",
    completion: {
      status: "exception",
      value: 50,
    },
    employed: "2022-04-03 06:00",
  },
  {
    key: "5",
    company: {
      name: "人员之间的合理调配方案",
      logo: "images/logos/logo-webdev.svg",
    },
    author: {
      avatar: "images/face-5.jpeg",
      name: "Richard Gran",
      position: "人事经理",
    },
    mainText: "working",
    budget: "$4,000",
    completion: 80,
    employed: "2022-04-02 13:15",
  },
  {
    key: "6",
    company: {
      name: "一个好的产品具备的因素条件",
      logo: "images/logos/logo-invision.svg",
    },
    author: {
      avatar: "images/face-6.jpeg",
      name: "John Levi",
      position: "产品设计",
    },
    mainText: "canceled",
    budget: "$2,000",
    completion: {
      status: "exception",
      value: 0,
    },
    employed: "2022-04-07 18:32",
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
    CardAuthorTable,
    CardProjectTable2,
    CardMemberTable,
    CardDailyNews,
  },
  data() {
    return {
      // Associating "Authors" table data with its corresponding property.
      tableDiaryData: tableDiaryData,
      tableMemberColumns,
      tableMemberData,
      tableColumns_resources,
      tableData_resources,
      // Associating "Authors" table columns with its corresponding property.
      tableDiaryColumns: tableDiaryColumns,

      // Associating "Projects" table data with its corresponding property.
      tableArticleData: tableArticleData,

      // Associating "Projects" table columns with its corresponding property.
      tableArticleColumns: tableArticleColumns,
    };
  },
};
</script>

<style lang="scss"></style>
