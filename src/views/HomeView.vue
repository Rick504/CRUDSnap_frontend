<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
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
              Perfil
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <RouterLink class="dropdown-item" to="/exit"> Sair </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
