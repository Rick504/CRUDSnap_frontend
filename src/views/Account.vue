<script setup lang="ts">
import Header from '@/views/HomeView/components/Header.vue'
import ImgUser from '@/components/icons/ImgUser.vue'
import IconAddPhoto from '@/components/icons/IconAddPhoto.vue'

</script>

<template>
    <Header />
    <div class="text-center">
        <div class="mt-5">
            <ImgUser width="150" />
            <IconAddPhoto />
        </div>
        <div class="mt-4">
            Nome tal
        </div>
        <div class="mt-2">
            E-mail tal
        </div>
        <div class="mt-4">
            <div class="btn btn-primary">Atualizar conta</div>
        </div>
        <div class="mt-4">
            <div class="btn btn-danger">Deletar conta</div>
        </div>
    </div>
</template>
