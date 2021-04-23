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
        <form action="">
          <div class="nav-search-items">
            <input type="text" name="" id="" placeholder="Αναζήτηση" />
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
          console.log(response);
          window.location.href = "http://localhost:8080/";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/navbar/navbar.css";
</style>
