import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue';
import Experience from '../components/Experience.vue';
import Education from '../components/Education.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/experience', component: Experience },
    { path: '/education', component: Education },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/contacts', component: Contact },
]
const router= createRouter({
    history: createWebHistory(),
    routes
})
export default router