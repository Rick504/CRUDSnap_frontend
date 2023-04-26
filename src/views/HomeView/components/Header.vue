<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ImgUser from '@/components/icons/ImgUser.vue'
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" to="/"> CRUDSnap </RouterLink>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link px-4" to="/"> Home </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link px-4" to="/#"> PaginaTal </RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <ImgUser />
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <RouterLink class="dropdown-item" to="/account"> Conta </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/login"> Sair </RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
