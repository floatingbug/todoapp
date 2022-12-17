import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import home from './components/home.vue';
import registration from './components/registration.vue';

const routes = [
	{path: '/', component: home},
	{path: '/registration', component: registration}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
});

const app = createApp(App)
app.use(router)
app.mount('#app')
