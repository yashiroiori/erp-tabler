<template>
    <div class="antialiased border-top-wide border-primary d-flex flex-column">
        <div class="flex-fill d-flex flex-column justify-content-center">
            <div class="container-tight py-6">
                <div class="text-center mb-4">
                    <img src="/storage/backend/img/logo.svg" height="36" alt="">
                </div>
                <flash-messages />
                <b-form class="card card-md" @submit.prevent="onSubmit">
                    <div class="card-body"> 
                        <h2 class="mb-5 text-center">Pantalla de bloqueo</h2>
                        <div class="col-12 row row-sm mb-3 align-items-center">
                            <span class="col-auto">
                                <span class="avatar" :style="`background-image: url(${$page.auth.user.avatar})`"></span>
                            </span>
                            <div class="col text-truncate">
                                <span class="text-body d-block text-truncate">{{$page.auth.user.full_name}}</span>
                                <small class="d-block text-muted text-truncate mt-n1">{{$page.auth.user.email}}</small>
                            </div>
                        </div>
                        <p class="text-muted">Ingrese su contraseña para regresar al sistema</p>
                        <div class="mb-3">
                            <label class="form-label">Contraseña</label>
                            <input type="password" v-model="form.password" class="form-control" placeholder="ej: misecreto*!">
                        </div>
                        <div class="form-footer">
                            <b-button type="submit" variant="primary" block :disabled="loading" :class="loading ? 'btn-loading' : ''">Desbloquear</b-button>
                        </div>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>

import FlashMessages from '@/components/FlashMessages'

export default {
    components: {
        'flash-messages': FlashMessages,
    },
    data(){
        return {
            form: {
                password: 'secret',
            },
            loading: false,
        };
    },
    methods: {
        onSubmit(){
            this.loading = true
            this.$inertia.post(route('login.unlock'), this.form)
                .then(() => {
                    this.loading = false
                })
        },
    },
}

</script>