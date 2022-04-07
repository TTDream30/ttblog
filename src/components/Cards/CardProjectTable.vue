<template>
  <!-- Projects Table Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h6>项目</h6>
          <p>done this month <span class="text-primary">+40%</span></p>
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-radio-group
            v-model="projectHeaderBtns"
            size="small"
            @change="clickType"
          >
            <a-radio-button value="article">文章</a-radio-button>
            <a-radio-button value="resources">资源</a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
    </template>
    <!-- 文章模块 -->
    <a-table
      :columns="columns_article"
      :data-source="data_article"
      :pagination="{ pageSize: 6 }"
      v-show="this.projectHeaderBtns == 'article'"
    >
      <a-space
        slot="members"
        slot-scope="members"
        :size="-12"
        class="avatar-chips"
      >
        <template v-for="member in members">
          <a-avatar :key="member" size="small" :src="member" />
        </template>
      </a-space>

      <template slot="information" slot-scope="information">
        <h6 class="m-0">
          <img :src="information.logo" width="25" class="mr-10" />
          {{ information.name }}
        </h6>
      </template>

      <template slot="completion" slot-scope="completion">
        <span class="font-bold text-muted text-sm">{{
          completion.label ? completion.label : completion
        }}</span>
        <a-progress
          :percent="completion.value ? completion.value : completion"
          :show-info="false"
          size="small"
          :status="completion.status ? completion.status : 'normal'"
        />
      </template>
    </a-table>

    <!-- 资源模块 -->
    <a-table
      :columns="columns_resources"
      :data-source="data_resources"
      :pagination="{ pageSize: 6 }"
      v-show="this.projectHeaderBtns == 'resources'"
    >
      <template slot="type" slot-scope="type">
        <span class="font-bold text-muted text-sm">{{ type }}</span>
        <!-- <a-progress
          :percent="completion.value ? completion.value : completion"
          :show-info="false"
          size="small"
          :status="completion.status ? completion.status : 'normal'"
        /> -->
      </template>
      <a-space
        slot="members"
        slot-scope="members"
        :size="-12"
        class="avatar-chips"
      >
        <template v-for="member in members">
          <a-avatar :key="member" size="small" :src="member" />
        </template>
      </a-space>

      <template slot="information" slot-scope="information">
        <h6 class="m-0">
          <img :src="information.logo" width="25" class="mr-10" />
          {{ information.name }}
        </h6>
      </template>

      <template slot="counts" slot-scope="counts">
        <span class="font-bold text-muted text-sm">{{ counts }}</span>
        <!-- <a-progress
          :percent="completion.value ? completion.value : completion"
          :show-info="false"
          size="small"
          :status="completion.status ? completion.status : 'normal'"
        /> -->
      </template>
    </a-table>
  </a-card>
  <!-- / Projects Table Card -->
</template>

<script>
export default {
  props: {
    data_article: {
      type: Array,
      default: () => [],
    },
    columns_article: {
      type: Array,
      default: () => [],
    },
    data_resources: {
      type: Array,
      default: () => [],
    },
    columns_resources: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // Active button for the "Projects" table's card header radio button group.
      projectHeaderBtns: "article",
    };
  },
  methods: {
    clickType(val) {
      if (val.target.value == "article") {
        this.projectHeaderBtns = "article";
      } else {
        this.projectHeaderBtns = "resources";
      }
    },
  },
};
</script>
