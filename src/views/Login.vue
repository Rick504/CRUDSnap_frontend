<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="container">
        <form class="row">
            <div class="offset-4 col-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="offset-4 col-4 mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha:</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="offset-4 col-4 mb-3 px-4 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1"> Lembre-me </label> |
                <RouterLink to="/ForgotPassword"> Esqueceu a sua senha? </RouterLink>
            </div>
            <div class="offset-4 col-4 d-flex justify-content-end">
                <button type="submit" class="btn btn-success">
                    <span class="m-3">
                        Entrar
                    </span>
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
form {
    margin-top: 15%;
}
</style>
