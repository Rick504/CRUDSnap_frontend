<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { loginService } from '@/services/login.service'
import { registerService } from '@/services/register.service'
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const registerEmail = ref('');
const registerUserName = ref('');
const registerPassword = ref('');
const password = ref('');
const terms = ref(true);
const loginError = ref(false)
const registerError = ref(false)

async function register() {
    // console.log('send register user::', registerEmail.value, registerPassword.value)
    const register = await registerService(registerUserName.value, registerEmail.value, registerPassword.value)
    if (!register) {
        registerError.value = true
        return
    }
    router.push('/')
}

async function login() {
    // console.log('send login::', email.value, password.value)
    const login = await loginService(email.value, password.value)
    if (!login) {
        loginError.value = true
        return
    }
    router.push('/')
}

</script>

<template>
    <div id="containerFormLogin" class="container border border-2 rounded-4">
        <form id="formLogin" @submit.prevent="login">
            <div class="row mx-3 d-flex">
                <div class="col-4">
                    <label for="inputEmail" class="form-label">E-mail:</label>
                    <input v-model="email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
                </div>
                <div class="col-4">
                    <label for="inputPassword1" class="form-label">Senha:</label>
                    <input v-model="password" type="password" class="form-control" id="inputPassword1">
                </div>
                <div class="col-1">
                    <button id="btn-login" type="submit" class="btn btn-success">
                        <span class="m-5">
                            Login
                        </span>
                    </button>
                </div>
            </div>
            <div class="row mx-3">
                <span v-if="loginError" id="loginError">Usuário ou senha inválidos.</span>
            </div>
            <div class="row">
                <div class="col-12 mt-3 mx-4 mb-2">
                    <input type="checkbox" class="form-check-input mx-2" id="passwordCheck">
                    <label class="form-check-label" for="passwordCheck"> Lembre-me </label> |
                    <RouterLink to="/ForgotPassword"> Esqueceu a sua senha? </RouterLink>
                </div>
            </div>
        </form>
    </div>
    <div class="container">
        <div class="row mt-5">
            <div class="offset-4 col-4 text-center border border-2 rounded-4 p-4">
                <div>Não tem uma conta? </div>
                <div class="h2">Cadastre-se</div>
                <form @submit.prevent="register">
                    <div class="mt-5">
                        <label for="inputUserNameRegister">Escolha seu nome de usuário</label>
                        <input v-model="registerUserName" class="form-control" type="text" name="userName"
                            id="inputUserNameRegister">
                    </div>
                    <div class="mt-3">
                        <label for="inputEmailRegister">Insira seu e-mail de usuário</label>
                        <input v-model="registerEmail" class="form-control" type="text" name="userName"
                            id="inputEmailRegister">
                    </div>
                    <div class="mt-3">
                        <label for="inputPasswordRegister">Escolha sua senha</label>
                        <input v-model="registerPassword" class="form-control" type="password" name="userName"
                            id="inputPasswordRegister">
                    </div>
                    <div class="row mx-3">
                        <span v-if="registerError" id="loginError">Erro ao cadastrar usuário.</span>
                    </div>
                    <div class="mt-3">
                        <input v-model="terms" type="checkbox" class="form-check-input" id="termCheck">
                        Aceito os
                        <a href="#">Termos e Condições.</a> <br>
                        Você pode encontrar a nossa Política de Privacidade <a href="#">aqui</a>.
                    </div>
                    <div class="mt-5 mb-5">
                        <button :disabled="!terms" type="submit" class="btn btn-success">
                            <span class="m-3">
                                Cadastrar
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#loginError {
    color: red;
}

#containerFormLogin {
    margin-left: 40rem;
    width: 44rem;
}

#btn-login {
    margin-top: 2rem;
}
</style>
