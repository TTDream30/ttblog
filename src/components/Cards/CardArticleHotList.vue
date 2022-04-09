<!-- 文章排行榜 -->
<template>
  <!-- Your Transactions Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <template #title>
      <h6 class="font-semibold m-0">今日文章热度榜单</h6>
    </template>
    <p slot="extra" class="card-header-date">
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="fill-muted"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
          fill="#111827"
        />
      </svg>
      <span>2022-04-09</span>
    </p>

    <a-table :columns="columns" :data-source="data" :pagination="false">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> 文章</span>
      <span slot="counts" slot-scope="text">{{ text }}</span>
      <span slot="countsTitle"><a-icon type="smile-o" /> 点击量</span>
    </a-table>
  </a-card>
  <!-- / Your Transactions Card -->
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>
