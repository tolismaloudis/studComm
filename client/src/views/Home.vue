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
}

</script>

<style scoped>
    
</style>
