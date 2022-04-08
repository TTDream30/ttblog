<template>
  <a-card class="box">
    <div class="content">
      <h2 class="font-bold text-muted">暂无团队</h2>
      <div class="buttonGrounp">
        <a-button class="mb-24" type="primary" shape="round" :size="size">
          加入团队
        </a-button>
        <a-button type="primary" shape="round" :size="size">
          创建团队
        </a-button>
      </div>
    </div>
  </a-card>
</template>

<script>
export default {};
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
