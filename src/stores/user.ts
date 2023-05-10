import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore: any = defineStore('user', () => {
  const userInfo = ref(null);

  return { userInfo };
});

// export const useCounterStore = defineStore('counter', () => {
// const count = ref(0)
// const doubleCount = computed(() => count.value * 2)
// function increment() {
//   count.value++
// }

// return { count, doubleCount, increment }
// });
