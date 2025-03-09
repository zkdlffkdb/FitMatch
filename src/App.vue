<template>
  <div id="appLayout">
      <NavBar/>
      <div id="main">
        <router-view/>
      </div>
  </div>
  
</template>

<script>
import NavBar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
