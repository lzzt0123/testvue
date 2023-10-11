import Vue from 'vue'
import VueRouter from 'vue-router'

import CompetitionView from "@/components/CompetitionView.vue";
import CourseView from "@/components/CourseView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'First',
        component: CompetitionView
    },
    {
        path:'/course',
        component:CourseView
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

