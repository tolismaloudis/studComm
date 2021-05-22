<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="box box-commment gefd-card">
          <form @submit.prevent="handleSubmit">
            <input
              type="text"
              v-model="text_input"
              class="form-control"
              placeholder="Press enter to post comment"
            />
          </form>
        </div>
        <br />
        <div class="comments" :key="comment.c_id" v-for="comment in comments">
          <Comment :comment="comment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Comment from "./Comment.vue";
export default {
  name: "Comments",
  components: {
    Comment,
  },
  props: {
    comments: Array,
    id: {
      type: String,
    },
  },
  data() {
    return {
      comment: [],
      text_input: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.text_input.trim().length) return;
      try {
        await axios.post("http://localhost:5000/comments", {
          body: this.text_input,
          p_id: this.id,
        });

        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 6vh;
}
</style>
