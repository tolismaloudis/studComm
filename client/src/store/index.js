import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state: {
    posts: [],
    comments: [],
    searched: [],
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setComments: (state, comments) => (state.comments = comments),
    setSearched: (state, searched) => (state.searched = searched),
    emptySearched: (state) => (state.searched = ""),
  },
  actions: {
    async fetchPosts({ commit }, { postId }) {
      try {
        //console.log("PASSED ID AT STORE IS "+`${postId}`  );
        const response = await axios.get(
          `http://localhost:5000/posts/${postId}`,
          {
            params: {
              _id: postId,
            },
          }
        );
        commit("setPosts", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchComments({ commit }, { postId }) {
      try {
        //console.log("PASSED ID AT STORE IS "+`${postId}`  );
        const response = await axios.get(
          `http://localhost:5000/comments/${postId}`
        );
        //console.log(response.data);
        commit("setComments", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSearched({ commit }, filt) {
      try {
        const response = await axios.get(
          "http://localhost:5000/posts/search/results",
          {
            params: { search: filt },
          }
        );
        commit("setSearched", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
  getters: {
    getPosts: (state) => state.posts,
    getComments: (state) => state.comments,
    getSearched: (state) => state.searched,
  },
});
