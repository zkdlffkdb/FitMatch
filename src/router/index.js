import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Matches from '@/views/Matches.vue'
import Messages from '@/views/Messages.vue'
import Map from '@/views/Map.vue'
import Schedule from '@/views/Schedule.vue'
import Rewards from '@/views/Rewards.vue'
import Leaderboard from '@/views/Leaderboard.vue'

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/matches',
        name: 'Matches',
        component: Matches
    },
    {
        path: '/messages',
        name: 'Messages',
        component: Messages
    },
    {
        path: '/map',
        name: 'Map',
        component: Map
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule
    },
    {    
        path: '/rewards',
        name: 'Rewards',
        component: Rewards    
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: Leaderboard   
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router