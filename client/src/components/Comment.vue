<template>
  <div class="box box-comments card gedf-card">
    <div class="box-comment">
      <img
        class="rounded-circle"
        width="37"
        src="../assets/useravatar.png"
        alt="User Image"
      />
      <span class="username"
        >{{ comment.user }}<span class="text-muted pull-right"></span
      ></span>
      <hr />
      <div class="comment-text comment-body">{{ comment.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: Object,
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 10px;
  .box-comment {
    padding: 15px;
    span {
      padding-left: 10px;
    }
    hr {
      margin-top: 10px;
    }
    .comment-body {
      padding: 5px 10px 10px 10px;
    }
  }
}
</style>
