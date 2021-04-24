<template>
  <div id="create_new_post" class="input-group">
    <span class="input-group-text" id="addon-wrapping"
      ><img
        class="rounded-circle"
        width="20"
        src="https://picsum.photos/50/50"
        alt=""
    /></span>
    <router-link class="form-control" to="/newPost"
      ><input
        type="text"
        placeholder="Τι σκέφτεσαι;"
        aria-label="Username"
        aria-describedby="addon-wrapping"
    /></router-link>
  </div>
</template>

<script>
export default {
  name: "PostInput",
};
</script>

<style scoped>
input {
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
}
</style>
