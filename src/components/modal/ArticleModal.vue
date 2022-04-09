<!-- 文章显示 -->
<template>
  <div>
    <a-modal
      v-model="isVisible"
      title="Vertically centered modal dialog"
      :footer="null"
      width="60%"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {},
};
</script>
