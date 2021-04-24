<template>
  <div class="container-fluid gedf-wrapper">
    <div class="row">
      <div class="col-md-3">
        <Filters />
      </div>
      <div class="col-md-6 gedf-main">
        <h2 v-if="found">Results for "{{ results }}"</h2>
        <Posts :posts="posts" />
      </div>
      <div class="col-md-3"></div>
    </div>
    <h1 v-if="!found">No Posts Found for "{{ results }}"</h1>
  </div>
</template>

<script>
import postService from "../postService.js";
import Posts from "../components/Posts";
import Filters from "../components/Filters";

export default {
  name: "Search",
  components: { Posts, Filters },
  data() {
    return {
      posts: [],
      found: true,
      results: "",
    };
  },
  async created() {
    try {
      this.results = this.$route.query.q;
      this.posts = await postService.searchPosts(this.$route.query.q);
      console.log(this.posts);
      if (this.posts == "") this.found = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.gedf-wrapper {
  padding-top: 7rem;
  background-color: #eeeeee;
}
@media (min-width: 992px) {
  .gedf-main {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .gedf-card {
    margin-bottom: 2.77rem;
  }
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
