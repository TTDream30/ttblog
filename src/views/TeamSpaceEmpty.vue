<template>
  <a-card class="box">
    <div class="content">
      <h2 class="font-bold text-muted">暂无团队</h2>
      <div class="buttonGrounp">
        <a-button
          class="mb-24"
          @click="() => (modal1Visible = true)"
          type="primary"
          shape="round"
          :size="size"
        >
          加入团队
        </a-button>
        <a-modal
          v-model="modal1Visible"
          title="加入团队"
          centered
          @ok="() => (modal1Visible = false)"
          :closable="false"
        >
          <a-form layout="inline">
            <a-form-item label="团队ID：">
              <a-input placeholder="请输入六位数的团队ID" />
            </a-form-item>
          </a-form>
        </a-modal>
        <a-button
          @click="() => (modal2Visible = true)"
          type="primary"
          shape="round"
          :size="size"
        >
          创建团队
        </a-button>
        <a-modal
          v-model="modal2Visible"
          title="创建团队"
          centered
          @ok="() => (modal2Visible = false)"
          :closable="false"
        >
          <a-form layout="inline">
            <a-form-item label="团队名称：">
              <a-input placeholder="请输入团队名称" />
            </a-form-item>
            <a-form-item label="团队简介：">
              <a-textarea
                :autosize="{ minRows: 6, maxRows: 6 }"
                defaultValue="请描述团队"
              />
            </a-form-item>
          </a-form>
        </a-modal>
      </div>
    </div>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      modal1Visible: false,
      modal2Visible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    .buttonGrounp {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
