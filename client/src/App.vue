<template>
  <div>
    <Header v-if="!$route.meta.hideHeader" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
$main-blue: #3a89fa;
$main-grey: #ebebeb;
$dark-grey: #a7a4a4;
</style>
