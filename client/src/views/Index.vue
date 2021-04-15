<template>
  <div>
    <h1 v-if="auth">Logged In</h1>
  </div>
</template>

<script>
import Auth from "../auth";

export default {
  name: "Index",
  data: function() {
    return {
      auth: "",
    };
  },
  created() {
    this.auth = Auth.isAuthenticated();
  },
};
</script>

<style lang="scss" scoped>
* {
  margin-top: 10vh;
}
</style>
