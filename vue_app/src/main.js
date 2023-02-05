import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import home from './components/home.vue';
import registration from './components/registration.vue';
import login from './components/login.vue';

const routes = [
	{path: '/', component: home},
	{path: '/registration', component: registration},
	{path: '/login', component: login}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
});

const app = createApp(App)
app.use(router)
app.mount('#app')
