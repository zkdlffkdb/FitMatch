<template>
  <div class="register-container">
    <form @submit.prevent="handleRegister" class="register-form">
      <div class="title-container">
        <h1 class="register-title">Registration</h1>
      </div>

      <!-- Name, Email, and Mobile Number -->
      <div class="row">
        <div class="input-group">
          <label for="name">Name</label>
          <input
            v-model="name"
            type="text"
            id="name"
            class="input-field"
            required
          />
        </div>
        <div class="input-group">
          <label for="email">Email Address</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="input-field"
            required
          />
        </div>
        <div class="input-group">
          <label for="mobile">Mobile Number</label>
          <input
            v-model="mobile"
            type="tel"
            id="mobile"
            class="input-field"
            required
          />
        </div>
      </div>

      <!-- Username and Password-->
      <div class="rowfull-width">
        <div class="input-group">
          <label for="username">Username</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="input-field"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="input-field"
            required
          />
        </div>
      </div>

      <!-- Gender, Experience Level, and Location -->
      <div class="row">
        <div class="input-group">
          <label for="gender">Gender</label>
          <select v-model="gender" id="gender" class="select-field" required>
            <option value="" disabled>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="input-group">
          <label for="experience">Experience Level</label>
          <select
            v-model="experience"
            id="experience"
            class="select-field"
            required
          >
            <option value="" disabled>Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div class="input-group">
          <label for="location">Location</label>
          <select
            v-model="location"
            id="location"
            class="select-field"
            required
          >
            <option value="" disabled>Select</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="Central">Central</option>
          </select>
        </div>
      </div>

      <!-- Goals, Preferred Gym, and Preferred Timing -->
      <div class="row">
        <div class="input-group">
          <label for="goals">Goals</label>
          <select v-model="goals" id="goals" class="select-field" required>
            <option value="" disabled>Select</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Endurance">Endurance</option>
            <option value="General Fitness">General Fitness</option>
          </select>
        </div>
        <div class="input-group">
          <label for="preferredGym">Preferred Gym</label>
          <select
            v-model="preferredGym"
            id="preferredGym"
            class="select-field"
            required
          >
            <option value="" disabled>Select</option>
            <option value="Gym A">Gym A</option>
            <option value="Gym B">Gym B</option>
            <option value="Gym C">Gym C</option>
          </select>
        </div>
        <div class="input-group">
          <label for="preferredTiming">Preferred Timing</label>
          <select
            v-model="preferredTiming"
            id="preferredTiming"
            class="select-field"
            required
          >
            <option value="" disabled>Select</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
      </div>

      <!-- Additional Note -->
      <p class="note">
        Add more goals, preferred gyms and timings after logging in!
      </p>

      <!-- Error Message -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <!-- Register Button -->
      <div class="button-container">
        <button type="submit" class="register-button">Register</button>
      </div>
    </form>

    <p class="login-text">
      Already have an account?
      <router-link to="/login" class="login-link">Login here!</router-link>
    </p>
  </div>
</template>

<script>
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
export default {
  name: "RegisterMiddle",
  data() {
    return {
      name: "",
      email: "",
      mobile: "",
      username: "",
      password: "",
      gender: "",
      experience: "",
      location: "",
      goals: "",
      preferredGym: "",
      preferredTiming: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleRegister() {
      console.log("Register button clicked!");

      this.errorMessage = ""; // Clear previous error

      if (
        !this.name ||
        !this.email ||
        !this.mobile ||
        !this.username ||
        !this.password ||
        !this.gender ||
        !this.experience ||
        !this.location ||
        !this.goals ||
        !this.preferredGym ||
        !this.preferredTiming
      ) {
        this.errorMessage = "All fields are required.";
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        console.log("User Registered:", user);

        const userData = {
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          username: this.username,
          gender: this.gender,
          experience: this.experience,
          location: this.location,
          goals: this.goals,
          preferredGym: this.preferredGym,
          preferredTiming: this.preferredTiming,
          createdAt: new Date(),
        };
        console.log("Attempting to write to Firestore:", userData);
        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), userData);

        console.log("User Data Saved in Firestore");
        this.$router.push("/home");
      } catch (error) {
        console.log("Firebase Error:", error);
        this.errorMessage = "Registration failed. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #cdc9f3;
  font-family: "Inter", sans-serif;
  color: black;
}

.title-container {
  width: 150%;
  display: flex;
  justify-content: left;
  margin-bottom: -5px;
}

.register-title {
  font-size: 38x;
  font-weight: 700;
  text-decoration: underline;
  color: black;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.row {
  display: flex;
  gap: 20px;
  width: 150%;
  justify-content: left;
}

.rowfull-width {
  display: flex;
  justify-content: center;
  align-items: s;
  gap: 5.5%;
  width: 225%;
  padding-right: 7%;
}

.input-group {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.select-field,
.input-field {
  border-radius: 25px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: none;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 130%;
}

.register-button {
  border-radius: 20px;
  background-color: #d6b5d6;
  padding: 10px 20px;
  cursor: pointer;
}

.login-text {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: black;
}

.login-link {
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
}
</style>
