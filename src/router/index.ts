import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
  ],
});

//Verifica se o meta.public é true, caso não seja ele direciona para tela de login
//PRECISA IMPLEMENTAR LOGIN COM BACKEND
// router.beforeEach((to, _, next) => {
//   if (!to.meta?.public) next({ path: '/login' });
//   else next();
// });

export default router;
