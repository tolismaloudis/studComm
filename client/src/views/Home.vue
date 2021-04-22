<template>
    <Posts :posts="posts" /> 
</template>

<script>

import Posts from '../components/Posts.vue'

export default {
    name: "Home",
    components: {Posts},
    data() {
      return {
        posts: []
      }
    },
    methods: {
      async fetchPosts(){
        const res = await fetch('http://localhost:3000/posts')

        const posts = await res.json()

        return posts
      },
    },
  async created(){
    this.posts = await this.fetchPosts()
  }
}

</script>

<style scoped>
    
</style>
