<script setup lang="ts">
import {useUserStore} from '@/stores/user'
</script>

<template>
    <main class="bg-dark text-white">
        <div class="text-center border border-secondary rounded-2 pt-5">
            E-mail logado: {{ useUserStore?.userInfo?.email || 'sem e-mail' }}
        </div>
    </main>
</template>

<style scoped>
main {
    margin-top: 0.5rem;
    height: 89.4vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

main div {
    width: 30%;
    height: 60%;
}
</style>
