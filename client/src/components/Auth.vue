<template>
  <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <span>Loading</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Auth",
  beforeCreate() {
    const qs = require("qs");

    axios
      .post(
        "https://login.iee.ihu.gr/token",
        qs.stringify({
          client_id: process.env.VUE_APP_CLIENT_ID,
          client_secret: process.env.VUE_APP_SECRET,
          grant_type: "authorization_code",
          code: this.$route.query.code,
        })
      )
      .then((response) => {
        console.log(response);

        axios
          .get("https://api.iee.ihu.gr/profile", {
            headers: {
              "x-access-token": response.data.access_token,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response);
            console.log(this);

            axios.defaults.withCredentials = true;

            axios
              .post("http://localhost:5000/user/", {
                am: response.data.am,
                firstName: response.data.givenName,
                lastName: response.data.sn,
                eduPersonAffiliation: response.data.eduPersonAffiliation,
                eduPersonPrimaryAffiliation:
                  response.data.eduPersonPrimaryAffiliation,
                mail: response.data.mail,
                id: response.data.id,
                uid: response.data.uid,
              })
              .then((response) => {
                console.log(response);
                if (response.status == 202) {
                  this.$router.push({ path: "/" });
                }
              });
          });
      });
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(#9b59b6, #8e44ad);
}
.wrapper {
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: circle 0.5s alternate infinite ease;
}

@keyframes circle {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
}
.circle:nth-child(2) {
  left: 45%;
  animation-delay: 0.2s;
}
.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}
.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow 0.5s alternate infinite ease;
}

@keyframes shadow {
  0% {
    transform: scaleX(1.5);
  }
  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}
.shadow:nth-child(4) {
  left: 45%;
  animation-delay: 0.2s;
}
.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}
.wrapper span {
  position: absolute;
  top: 75px;
  font-family: "Lato";
  font-size: 20px;
  letter-spacing: 12px;
  color: #fff;
  left: 15%;
}
</style>
