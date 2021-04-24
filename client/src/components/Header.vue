<template>
  <header>
    <nav>
      <div class="logo">
        <!-- <a href="/">Logo</a> -->
        <router-link to="/">
          <img src="../assets/images/Logo.svg" alt="Logo" />
        </router-link>
      </div>

      <div class="nav-search">
        <form @submit.prevent="search">
          <div class="nav-search-items">
            <input
              type="text"
              v-model="searchParam"
              name=""
              id=""
              placeholder="Αναζήτηση"
            />
            <button type="submit">
              <div class="button-icon">
                <img src="../assets/images/Search.svg" alt="sadf" />
              </div>
            </button>
          </div>
        </form>
      </div>
      <div class="login">
        <router-link v-show="!auth" class="login-btn" to="/login"
          >Login</router-link
        >
        <button v-show="auth" @click="logout">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import Auth from "../auth";

export default {
  name: "Header",
  data: function() {
    return {
      searchParam: "",
      auth: "",
    };
  },
  created() {
    this.auth = Auth.isAuthenticated();
  },
  methods: {
    logout: function() {
      axios.defaults.withCredentials = true;

      axios
        .get("http://localhost:5000/user/logout")
        .then((response) => {
          window.location.href = "http://localhost:8080/";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search: function() {
      // if (this.searchParam == "" || this.searchParam == " ") return;
      if (!this.searchParam.trim().length) return;
      this.$router.push({
        path: "search",
        query: { q: this.searchParam.trim() },
      });
      this.searchParam = "";
    },
  },
};
</script>

<style scoped>
@import "../assets/css/navbar/navbar.css";
</style>
