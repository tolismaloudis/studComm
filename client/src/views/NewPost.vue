<template>
  <NewP @add-post="addPost" />
</template>

<script>
import NewP from "../components/NewP.vue";
export default {
  name: "NewPost",
  components: {
    NewP,
  },
  methods: {
    addPost(post) {
      this.posts = [...this.posts, post];
    },
  },
};
</script>

<style scoped></style>
