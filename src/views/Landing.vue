<template>
  <div class="landing-container">
    <TopNavLogin />
    <LandingMiddle />
  </div>
</template>

<script>
import LandingMiddle from "@/components/LandingMiddle.vue";
import TopNavLogin from "@/components/TopNavLogin.vue";

export default {
  name: "Landing",
  components: {
    LandingMiddle,
    TopNavLogin,
  },
};
</script>

<style scoped>
.landing-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #cdc9f3;
}
</style>
