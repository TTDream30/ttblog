<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">团队每日动态</h5>
        </a-col>
        <!-- <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-radio-group v-model="projectHeaderBtns" size="small">
            <a-radio-button value="all"></a-radio-button>
            <a-radio-button value="article">文章</a-radio-button>
            <a-radio-button value="resources">资源</a-radio-button>
          </a-radio-group>
        </a-col> -->
      </a-row>
    </template>
    <a-carousel class="carouselClass mb-24" autoplay>
      <div class="carouseItem">
        <a-card hoverable style="width: 330px">
          <template #cover>
            <img
              class="autoFix"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </template>
          <a-card-meta title="Europe Street 1">
            <template #description>www.instagram.com</template>
          </a-card-meta>
        </a-card>
      </div>
      <div class="carouseItem">
        <a-card hoverable style="width: 330px">
          <template #cover>
            <img
              class="autoFix"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </template>
          <a-card-meta title="Europe Street 2">
            <template #description>www.instagram.com</template>
          </a-card-meta>
        </a-card>
      </div>
    </a-carousel>

    <div class="cardBottom">
      <span>Long time no see</span>
    </div>

    <!-- <template #actions>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </template> -->
  </a-card>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
/* For demo */
.carouselClass {
  .carouseItem {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
}
.autoFix {
  height: 400px;
  object-fit: contain;
}
.cardBottom {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
