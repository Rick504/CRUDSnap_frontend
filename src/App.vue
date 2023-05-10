<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user'

const router = useRouter();

router.beforeEach((to, _, next) => {
  const auth = useUserStore.userInfo?.auth
  const token = sessionStorage.getItem('token')
  if (!auth && !to.meta?.public && !token) {
    next({ path: '/login' });
  } else {
    next();
  }
});
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

