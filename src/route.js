import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/login.vue';
import BarGraph from './components/BarGraph.vue';
import Formulaire from './components/Form.vue';

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/graph', name: 'BarGraph', component: BarGraph },
  { path: '/form', name: 'Formulaire', component: Formulaire },
  { path: '/', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
