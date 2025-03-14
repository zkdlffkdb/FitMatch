<template>
  <div class="login-container">
    <TopNavLogin />
    <LoginMiddle />
  </div>
</template>

<script>
import TopNavLogin from "@/components/TopNavLogin.vue";
import LoginMiddle from "@/components/LoginMiddle.vue";
export default {
  name: "Login",
  components: {
    LoginMiddle,
    TopNavLogin,
  },
};
</script>
