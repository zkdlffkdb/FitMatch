<template>
  <div id="nav">
    <router-link to="home"> Home </router-link>
    <router-link to="login"> Login </router-link>
    <router-link to="signup"> SignUp </router-link>
    <router-link to="profile"> Profile </router-link>
    <router-link to="matches"> Matches </router-link>
    <router-link to="messages"> Messages </router-link>
    <router-link to="map"> Map </router-link>
    <router-link to="schedule"> Calendar </router-link>
    <router-link to="rewards"> Rewards </router-link>
    <router-link to="Leaderboard"> Leaderboard </router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#nav {
  display: flex;
  flex-direction: column;
}
</style>
