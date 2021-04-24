<template>
  <div>
    <div class="posts" :key="post.p_id" v-for="post in posts">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import postService from "../postService.js";

export default {
  name: "Posts",
  components: { Post },
  props: {
    posts: Array,
  },
  data() {
    return {
      post: [],
    };
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
input {
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
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
