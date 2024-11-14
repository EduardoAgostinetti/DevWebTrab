import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CarRegister from '../views/CarRegister.vue';
import CarListPage from '../views/CarListPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/carros', name: 'CarList', component: CarListPage },
  { path: '/carros/cadastrar', name: 'CarRegister', component: CarRegister }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
