<template>
    <nav id="nav">
        <router-link to="home"> FitMatch </router-link>
        <router-link to="login"> Login </router-link>
        <router-link to="signup"> SignUp </router-link>
        <router-link to="profile"> Profile </router-link>
        <router-link to="matches"> Matches </router-link>
        <router-link to="messages"> Messages </router-link>
        <router-link to="map"> Map </router-link>
        <router-link to="schedule"> Calendar </router-link>
        <router-link to="rewards"> Rewards </router-link>
        <router-link to="leaderboard"> Leaderboard </router-link>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
#nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    padding: 10px;
}

a {
    width: 280px;
}
</style>