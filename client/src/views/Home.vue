<template>
  <div class="container-fluid gedf-wrapper">
    <div class="row">
      <div class="col-md-3">
        <Filters />
      </div>
      <div class="col-md-6 gedf-main">
        <div v-if="auth" class="row">
          <div class="col-md-12">
            <PostInput />
          </div>
        </div>

        <Posts :posts="posts" />
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>

  <!-- <div>
    <Posts :posts="posts" />
  </div> -->
</template>

<script>
import Posts from "../components/Posts.vue";
import postService from "../postService";
import PostInput from "../components/PostInput";
import Filters from "../components/Filters";
import Auth from "../auth";

export default {
  name: "Home",
  components: { Posts, PostInput, Filters },
  data() {
    return {
      posts: [],
      auth: "",
    };
  },

  async created() {
    this.auth = Auth.isAuthenticated();
    try {
      this.posts = await postService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<style scoped>
.h7 {
  font-size: 0.8rem;
}

.gedf-wrapper {
  padding-top: 7rem;
  background-color: #eeeeee;
}

#create_new_post {
  height: 60px;
  background-color: #f6f7f8;
  border-radius: 5px;
  padding: 8px;
  margin: 0 0 50px;
}

#addon-wrapping {
  background-color: #f6f7f8;
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

/**Reset Bootstrap*/
.dropdown-toggle::after {
  content: none;
  display: none;
}

#sidebar {
  position: fixed;
  margin-top: 7rem;
  margin-left: 15px;
  margin-right: 15px;
  width: 20%;
  font-size: 14px;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
}
#sidebar ul {
  list-style: none;
  margin: 0;
  padding: 10px;
}

#sidebar ul li a {
  display: block;
  background: #ffffff;
  padding: 10px 15px;
  color: #343434;
  border: 1px solid #cacaca;
  text-decoration: none;
  -webkit-transition: 0.2s linear;
  -moz-transition: 0.2s linear;
  -ms-transition: 0.2s linear;
  -o-transition: 0.2s linear;
  transition: 0.2s linear;
}
#sidebar ul li a:hover {
  background: #d3d3d3;
  color: #343434;
}
#sidebar ul li a .fa {
  width: 14px;
  text-align: center;
  margin-right: 3px;
  float: right;
}
#sidebar ul ul {
  background-color: #f8f8f8;
}
#sidebar ul li ul li a {
  background: #ffffff;
  border-left: 3.5px solid transparent;
  padding: 8px 8px;
}
#sidebar ul li ul li a:hover {
  background: #d3d3d3;
  border-left: 3px solid #343434;
}
</style>
