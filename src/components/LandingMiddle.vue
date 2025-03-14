<template>
  <div class="landing-content">
    <img src="@/assets/fitmatchlogo.png" alt="FitMatch Logo" class="logo" />
    <h1 class="title">FitMatch</h1>
    <p class="subtitle">Stop Skipping Workouts - Find a Gym Buddy Today!</p>

    <ul class="features">
      <li>💪 Stay accountable.</li>
      <li>💬 Connect with workout partners.</li>
      <li>🏆 Smash your goals.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LandingMiddle",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.landing-content {
  text-align: center;
  margin-top: 100px;
  padding: 20px;
  font-family: "Inter", sans-serif;
}

.logo {
  height: 142px;
  margin-bottom: 6px;
}

.title {
  font-size: 45px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
}

.subtitle {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #000;
}

.features {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
}

.features li {
  margin: 10px 0;
}
</style>
