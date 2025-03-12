<template>
  <nav class="top-nav">
    <img src="@/assets/fitmatchlogo.png" alt="FitMatch Logo" class="logo" />
    <router-link to="/login" class="login-container">
      <button class="login-button">Login</button>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "TopNavLogin",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.top-nav {
  width: 100%;
  background-color: #a67cba;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  color: white;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 35px;
  width: 41px;
}

.login-container {
  width: 71px;
  height: 27.8px;
}

.login-button {
  background-color: white;
  color: #000000;
  border: none;
  width: 71px;
  height: 27.8px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  cursor: pointer;
}
</style>
