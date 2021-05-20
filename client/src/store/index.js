import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state: {
    posts: [],
    comments: [],
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setComments: (state, comments) => (state.comments = comments)
  },
  actions: {
    async fetchPosts(
      { commit },{
        postId
      }
    ) {
      try {
        //console.log("PASSED ID AT STORE IS "+`${postId}`  );
        const response = await axios.get(
          `http://localhost:5000/posts/${postId}`,
          {
            params: {
              _id:postId
            },
          }
        );
        commit("setPosts", response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchComments(
      { commit },{
        postId
      }
    ) {
      try {
        //console.log("PASSED ID AT STORE IS "+`${postId}`  );
        const response = await axios.get(
          `http://localhost:5000/comments/${postId}`,
          {
            params: {
              p_id:"6093d943114c2007743d4555"
            },
          }
        );
        //console.log(response.data);
        commit("setComments", response.data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {},
  getters: {
    getPosts: (state) => state.posts,
    getComments: (state) => state.comments
  },
});