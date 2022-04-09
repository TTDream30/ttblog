<template>
  <a-card title="社区每日动态">
    <a-list
      item-layout="vertical"
      size="large"
      :pagination="pagination"
      :data-source="listData"
    >
      <div slot="footer"><b>Do yourself</b> -- TT</div>
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <template slot="actions">
          <span key="comment-basic-like">
            <a-tooltip title="Like">
              <a-icon
                type="like"
                :theme="action === 'liked' ? 'filled' : 'outlined'"
                @click="like"
              />
            </a-tooltip>
            <span style="padding-left: '8px'; cursor: 'auto'">
              {{ likes }}
            </span>
          </span>
          <span key="comment-basic-dislike">
            <a-tooltip title="Dislike">
              <a-icon
                type="dislike"
                :theme="action === 'disliked' ? 'filled' : 'outlined'"
                @click="dislike"
              />
            </a-tooltip>
            <span style="padding-left: '8px'; cursor: 'auto'">
              {{ dislikes }}
            </span>
          </span>
          <span key="comment-basic-reply-to">
            <a-icon
              type="heart"
              :theme="action === 'disliked' ? 'filled' : 'outlined'"
              @click="dislike"
            />
            <span style="padding-left: '8px'; cursor: 'auto'">
              {{ dislikes }}
            </span>
          </span>
        </template>
        <img
          slot="extra"
          width="272"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        <a-list-item-meta :description="item.datetime.fromNow()">
          <div style="cursor: pointer" @click="handleArticle" slot="title">
            {{ item.title }}
          </div>
          <a-avatar slot="avatar" :src="item.avatar" />
        </a-list-item-meta>
        <a-tooltip
          slot="datetime"
          :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')"
        >
          <span>{{ item.datetime.fromNow() }}</span>
        </a-tooltip>
        {{ item.content }}
      </a-list-item>
    </a-list>
    <article-modal ref="modal"></article-modal>
  </a-card>
</template>
<script>
import moment from "moment";
import ArticleModal from "../modal/ArticleModal.vue";
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://www.antdv.com/",
    title: `ant design vue part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    datetime: moment().subtract(i + 1, "days"),
  });
}

export default {
  components: { ArticleModal },
  data() {
    return {
      listData,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 8,
      },
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
    };
  },
  methods: {
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
    handleArticle() {
      this.$refs.modal.isVisible = true;
    },
  },
};
</script>
<style></style>
