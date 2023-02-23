import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import home from './components/home.vue';
import login from './components/login.vue';
import registration from './components/registration.vue';
import todo from  './components/todo.vue';

const routes = [
	{path: '/', component: home},
	{path: '/registration', component: registration},
	{path: '/login', component: login},
	{path: '/todo', component: todo}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
});

const app = createApp(App)
app.use(router)
app.mount('#app')
