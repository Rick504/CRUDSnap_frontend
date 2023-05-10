import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        auth: false,
        public: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        public: true,
      },
    },
  ],
});

export default router;
