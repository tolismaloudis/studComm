<template>
  <!--- \\\\\\\Post-->
  <div class="card gedf-card" @click="handleClick(post._id)">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <div class="mr-2">
            <img
              class="rounded-circle"
              width="38"
              src="../assets/useravatar.png"
              alt=""
            />
          </div>
          <div class="ml-2">
            <div class="h6 m-0">{{ post.user }}</div>
            <div class="text-muted">Student</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="text-muted h7 mb-2 pull-right">
        <i class="fa fa-calendar"></i>  {{ String(post.createtAt).substring(0, 10) }}
      </div>

      <h4 class="card-title">{{ post.title }}</h4>
      <p class="card-text">{{ post.body }}</p>
      <div>
        <span class="badge badge-primary">JavaScript</span>
        <span class="badge badge-primary">PHP</span>
        <span class="badge badge-primary">Node.js</span>
      </div>
    </div>
    <div class="card-footer">
      <a class="card-link"
        ><i class="fa fa-comment"></i> Comment</a
      >
    </div>
  </div>
  <!-- Post /////-->
</template>

<script>

export default {
  name: "Post",
  props: {
    post: Object,
  },
  methods:{
    handleClick(id){
      this.$router.push({name:'ClickedPost',params:{ id: id}})
    }
  }
};
</script>

<style scoped>
body {
  background-color: #eeeeee;
}

.h7 {
  font-size: 0.8rem;
}
.gedf-card{
  cursor: pointer;
}

.gedf-wrapper {
  margin-top: 0.97rem;
}

#create_new_post {
  background-color: #f6f7f8;
  border-radius: 5px;
  padding: 8px;
  margin: 0 0 16px;
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
</style>
