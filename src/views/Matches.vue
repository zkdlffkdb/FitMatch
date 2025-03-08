<template>
  <div class="matching-page">
    <h1>Find Your Workout Partner</h1>
    <div v-if="loading">Loading...</div>

    <div v-else>
      <h2>Your Recommended Matches</h2>
      <ul>
        <li v-for="match in matchedUsers" :key="match.id" class="match-card">
          <img :src="match.profilePic || defaultPic" class="profile-pic" />
          <div class="match-info">
            <p><strong>{{ match.name }}</strong> - {{ match.location }}</p>
            <p>Fitness Level: {{ match.fitnessLevel }}</p>
            <button @click="startChat(match.id)">Message</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      currentUser: null,
      matchedUsers: [],
      loading: true,
      defaultPic: "https://via.placeholder.com/50",
      router: useRouter(),
    };
  },
  async mounted() {
    await this.fetchUser();
    if (this.currentUser) await this.findMatches();
  },
  methods: {
    async fetchUser() {
      // Fetch current user from Firebase (mocked for now)
      this.currentUser = {
        id: "userId1",
        location: "Downtown Gym",
        fitnessLevel: "Intermediate",
        preferredWorkouts: ["Strength", "Cardio"],
        availability: ["Monday", "Wednesday", "Friday"],
      };
    },

    async findMatches() {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("location", "==", this.currentUser.location));

        const querySnapshot = await getDocs(q);
        let matches = [];

        querySnapshot.forEach((doc) => {
          let user = doc.data();
          if (user.id !== this.currentUser.id && this.isCompatible(user)) {
            matches.push({ id: doc.id, ...user });
          }
        });

        this.matchedUsers = matches;
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        this.loading = false;
      }
    },

    isCompatible(user) {
      return (
        this.currentUser.fitnessLevel === user.fitnessLevel &&
        this.currentUser.preferredWorkouts.some((workout) => user.preferredWorkouts.includes(workout)) &&
        this.currentUser.availability.some((day) => user.availability.includes(day))
      );
    },

    startChat(userId) {
      this.router.push({ path: `/messages`, query: { chatWith: userId } });
    },
  },
};
</script>

<style scoped>
.matching-page {
  text-align: center;
  padding: 20px;
}
.match-card {
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  margin: 10px auto;
  border-radius: 8px;
  max-width: 400px;
}
.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.match-info {
  flex: 1;
  text-align: left;
}
button {
  padding: 5px 10px;
  background: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
