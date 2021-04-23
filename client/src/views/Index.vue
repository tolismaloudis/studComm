<template>
  <div v-if="auth">
    <h1>Logged In</h1>
    <button @click="back">Request</button>
  </div>
</template>

<script>
import Auth from "../auth";
import axios from "axios";

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
  methods: {
    back() {
      axios
        .get("http://localhost:5000/posts", { withCredentials: true })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin-top: 10vh;
}
</style>
