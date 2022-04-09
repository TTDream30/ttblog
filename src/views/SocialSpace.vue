<!-- 
	This is the billing pcounts, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <div>
    <a-row type="flex" :gutter="24">
      <!-- Billing Information Column -->
      <a-col :span="24" :md="16" class="mb-24">
        <!-- Billing Information Card -->
        <!-- 待回复消息列表 -->

        <CardCommentList></CardCommentList>

        <!-- / Billing Information Card -->
      </a-col>
      <!-- Billing Information Column -->

      <!-- Your Transactions Column -->
      <a-col :span="24" :md="8" class="mb-24">
        <a-row class="mb-24">
          <CardArticleHotList
            :data="dataArticle"
            :columns="columnsArticle"
          ></CardArticleHotList>
        </a-row>
        <a-row class="mb-24">
          <CardAuthorHotList
            :data="dataAuthor"
            :columns="columnsAuthor"
          ></CardAuthorHotList>
        </a-row>
        <a-row class="mb-24">
          <CardTeamHotList
            :data="dataTeam"
            :columns="columnsTeam"
          ></CardTeamHotList>
        </a-row>
        <!-- Your Transactions Card -->
        <!-- / Your Transactions Card -->
      </a-col>
      <!-- / Your Transactions Column -->
    </a-row>
  </div>
</template>

<script>
import CardCredit from "../components/Cards/CardCredit";
import WidgetSalary from "../components/Widgets/WidgetSalary";
import CardPaymentMethods from "../components/Cards/CardPaymentMethods";
import CardInvoices from "../components/Cards/CardInvoices";
import CardBillingInfo from "../components/Cards/CardBillingInfo";
import CardTransactions from "../components/Cards/CardTransactions";
import CardArticleHotList from "../components/Cards/CardArticleHotList";
import CardAuthorHotList from "../components/Cards/CardAuthorHotList";
import CardTeamHotList from "../components/Cards/CardTeamHotList";
import CardCommentList from "../components/Cards/CardCommentList";

// Salary cards data
const salaries = [
  {
    value: 2000,
    prefix: "+$",
    icon: `
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
											<g id="bank" transform="translate(0.75 0.75)">
												<path id="Shape" transform="translate(0.707 9.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path" d="M10.25,0,20.5,9.19H0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path-2" data-name="Path" d="M0,.707H20.5" transform="translate(0 19.793)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
											</g>
										</svg>`,
    title: "Salary",
    content: "Belong Interactive",
  },
  {
    value: 49000,
    prefix: "+$",
    icon: `
										<img src="imcountss/logos/paypal-logo-2.png" alt="">`,
    title: "Paypal",
    content: "Freelance Payment",
  },
];

// "Invoices" list data.
const invoiceData = [
  {
    title: "March, 01, 2021",
    code: "#MS-415646",
    amount: "180",
  },
  {
    title: "February, 12, 2021",
    code: "#RV-126749",
    amount: "250",
  },
  {
    title: "April, 05, 2020",
    code: "#FB-212562",
    amount: "550",
  },
  {
    title: "June, 25, 2019",
    code: "#QW-103578",
    amount: "400",
  },
  {
    title: "March, 03, 2019",
    code: "#AR-803481",
    amount: "700",
  },
];

// "Your Transactions" list data.
const transactionsData = [
  {
    period: "NEWEST",
  },
  {
    title: "Netflix",
    datetime: "27 March 2021, at 12:30 PM",
    amount: "2,500",
    type: -1, // 0 is for pending, 1 is for deposit, -1 is for withdrawal.
    status: "danger",
  },
  {
    title: "Apple",
    datetime: "27 March 2021, at 04:30 AM",
    amount: "2,000",
    type: 1,
    status: "success",
  },
  {
    period: "YESTERDAY",
  },
  {
    title: "Stripe",
    datetime: "26 March 2021, at 12:30 AM",
    amount: "750",
    type: 1,
    status: "success",
  },
  {
    title: "HubSpot",
    datetime: "26 March 2021, at 11:30 AM",
    amount: "1,050",
    type: 1,
    status: "success",
  },
  {
    title: "Creative Tim",
    datetime: "26 March 2021, at 07:30 AM",
    amount: "2,400",
    type: 1,
    status: "success",
  },
  {
    title: "Webflow",
    datetime: "26 March 2021, at 04:00 AM",
    amount: "Pending",
    type: 0,
    status: "warning",
  },
];

const columnsArticle = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    dataIndex: "counts",
    key: "counts",
    slots: { title: "countsTitle" },
    scopedSlots: { customRender: "counts" },
  },
];

const dataArticle = [
  {
    key: "1",
    name: "Go语言环境的搭建",
    counts: 3200,
  },
  {
    key: "2",
    name: "GoWeb框架 -- Gin框架的使用",
    counts: 2800,
  },
  {
    key: "3",
    name: "K8s的基本认识",
    counts: 2405,
  },
  {
    key: "4",
    name: "Docker的了解与入门",
    counts: 2005,
  },
  {
    key: "5",
    name: "构建自己的Docker镜像",
    counts: 1905,
  },
];

const columnsAuthor = [
  {
    dataIndex: "users",
    key: "users",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "users" },
  },
  {
    dataIndex: "counts",
    key: "counts",
    slots: { title: "countsTitle" },
    scopedSlots: { customRender: "counts" },
  },
];

const dataAuthor = [
  {
    key: "1",
    users: {
      name: "Go语言环境的搭建",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 3200,
  },
  {
    key: "2",
    users: {
      name: "GoWeb框架 -- Gin框架的使用",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 2800,
  },
  {
    key: "3",
    users: {
      name: "K8s的基本认识",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 2405,
  },
  {
    key: "4",
    users: {
      name: "Docker的了解与入门",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 2005,
  },
  {
    key: "5",
    users: {
      name: "构建自己的Docker镜像",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 1905,
  },
];

const columnsTeam = [
  {
    dataIndex: "users",
    key: "users",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "users" },
  },
  {
    dataIndex: "counts",
    key: "counts",
    slots: { title: "countsTitle" },
    scopedSlots: { customRender: "counts" },
  },
];

const dataTeam = [
  {
    key: "1",
    users: {
      name: "TT Dream",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 3200,
  },
  {
    key: "2",
    users: {
      name: "XXX",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 2800,
  },
  {
    key: "3",
    users: {
      name: "STUDYTEAM",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 2405,
  },
  {
    key: "4",
    users: {
      name: "XWTEAM",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 2005,
  },
  {
    key: "5",
    users: {
      name: "ZZTT",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    counts: 1905,
  },
];

export default {
  components: {
    CardCredit,
    WidgetSalary,
    CardPaymentMethods,
    CardInvoices,
    CardBillingInfo,
    CardTransactions,
    CardCommentList,
    CardArticleHotList,
    CardAuthorHotList,
    CardTeamHotList,
  },
  data() {
    return {
      // Salary cards data
      salaries,
      dataArticle,
      dataAuthor,
      dataTeam,
      columnsArticle,
      columnsAuthor,
      columnsTeam,

      // Associating "Invoices" list data with its corresponding property.
      invoiceData,

      // Associating "Your Transactions" list data with its corresponding property.
      transactionsData,
    };
  },
};
</script>

<style lang="scss"></style>
