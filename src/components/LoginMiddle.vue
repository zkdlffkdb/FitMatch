<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h1 class="login-title">Login</h1>

      <div class="input-group">
        <label for="username">Username</label>
        <input v-model="email" type="text" id="username" class="input-field" />
      </div>

      <div class="input-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="input-field"
        />
      </div>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <div class="button-container">
        <button type="submit" class="login-button">Login</button>
      </div>
    </form>

    <p class="register-text">
      No account yet?
      <router-link to="/signup" class="register-link">
        Register here</router-link
      >!
    </p>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginMiddle",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      console.log("login clicked");
      this.errorMessage = " ";
      if (!this.email || !this.password) {
        this.errorMessage = "Both fields are required.";
        return;
      }

      const auth = getAuth(); // Get Firebase auth instance
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log("User Logged In:", userCredential.user);

        // Redirect user to home page after successful login
        this.$router.push("/home");
      } catch (error) {
        // Handle Firebase authentication errors with meaningful messages
        this.handleFirebaseError(error);
      }
    },
    handleFirebaseError(error) {
      switch (error.code) {
        case "auth/user-not-found":
          this.errorMessage = "No user found with this email.";
          break;
        case "auth/wrong-password":
          this.errorMessage = "Incorrect password. Try again.";
          break;
        case "auth/invalid-email":
          this.errorMessage = "Invalid email format.";
          break;
        default:
          this.errorMessage = "Login failed. Please try again.";
      }
      console.error("Login Error:", error.message);
    },
  },
};
</script>
<style scoped>
/* Import Inter Font */
@import url("https://fonts.googleapis.com/css2?family=I nter:wght@400;600;700&display=swap");

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #cdc9f3;
  font-family: "Inter", sans-serif;
}

.login-title {
  font-size: 38x;
  font-weight: 700;
  text-decoration: underline;
  color: black;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  background: transparent;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: black;
}

.input-field {
  width: 350px;
  height: 45px;
  border-radius: 25px;
  border: none;
  padding: 10px;
  font-size: 16px;
  outline: none;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.login-button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: #d6b5d6;
  color: black;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}

.login-button:hover {
  background-color: #c49ac4;
}

.register-text {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: black;
}

.register-link {
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
}

.register-link:hover {
  color: #7e57c2;
}

.error-message {
  color: red;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
}
</style>
