<template>
  <header>
    <nav>
      <div class="logo">
        <!-- <a href="/">Logo</a> -->
        <img src="../assets/images/Logo.svg" alt="Logo" />
      </div>

      <div class="nav-search">
        <form action="">
          <div class="nav-search-items">
            <input type="text" name="" id="" placeholder="Αναζήτηση" />
            <button type="submit">
              <div class="button-icon">
                <img src="../assets/images/Search.svg" alt="sadf" />
              </div>
            </button>
          </div>
        </form>
      </div>
      <div class="login">
        <input type="button" value="Login" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import "../assets/css/navbar/navbar.css";
</style>
