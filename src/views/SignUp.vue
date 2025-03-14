<template>
  <TopNavLogin />
  <SignupMiddle />
</template>

<script>
import TopNavLogin from "@/components/TopNavLogin.vue";
import SignupMiddle from "@/components/SignupMiddle.vue";
export default {
  name: "Signup",
  components: {
    SignupMiddle,
    TopNavLogin,
  },
};
</script>
