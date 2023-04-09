<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
    <div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha:</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1"> Lembre-me </label> |
                <RouterLink to="/ForgotPassword"> Esqueceu a sua senha? </RouterLink>
            </div>
            <button type="submit" class="btn btn-success">Entrar</button>
        </form>
    </div>
</template>
