<template>
  <div id="appLayout">
    <NavBar v-if="showNavBar" />
    <div
      id="main"
      :class="{ navbarShown: showNavBar, navbarHidden: !showNavBar }"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    showNavBar() {
      const hideNavBarRoutes = ["/", "/login", "/signup"];
      return !hideNavBarRoutes.includes(this.$route.path);
    },
  },
};
</script>

<style>
#appLayout {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

#main {
  margin-left: 300px;
  flex: 1;
  box-shadow: 0px 4px 4px rgba(254, 254, 254, 0.25);
}

#main.navbarShown {
  margin-left: 300px;
}

#main.navbarHidden {
  margin-left: 0;
}
</style>
