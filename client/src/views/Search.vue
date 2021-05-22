<template>
  <div class="container-fluid gedf-wrapper">
    <div class="row">
      <div class="col-md-3">
        <Filters />
      </div>
      <div class="col-md-6 gedf-main">
        <h2 v-if="getSearched != ''">Results for "{{ results }}"</h2>
        <Posts :posts="getSearched" />
      </div>
      <div class="col-md-3"></div>
    </div>
    <h1 v-if="getSearched == ''">No Posts Found for "{{ results }}"</h1>
  </div>
</template>

<script>
import postService from "../postService.js";
import Posts from "../components/Posts";
import Filters from "../components/Filters";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Search",
  components: { Posts, Filters },
  data() {
    return {
      found: true,
      results: "",
    };
  },
  created() {
    this.results = this.$route.query.q;
    const filt = this.$route.query.q;
    this.fetchSearched(filt);
  },
  methods: {
    ...mapActions(["fetchSearched"]),
  },
  computed: {
    ...mapGetters(["getSearched"]),
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
