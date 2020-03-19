<template>
    <div class="antialiased border-top-wide border-primary d-flex flex-column">
        <div class="flex-fill d-flex flex-column justify-content-center">
            <div class="container-tight py-6">
                <div class="text-center mb-4">
                    <img src="/storage/backend/img/logo.svg" height="36" alt="">
                </div>
                <b-form class="card card-md" @submit.prevent="onSubmit">
                    <div class="card-body">
                        <h2 class="mb-5 text-center">Ingrese sus credenciales</h2>
                        <b-form-group
                                class="form-label"
                                label="Correo Electrónico"
                                :invalid-feedback="$page.errors.email != undefined ? $page.errors.email[0] : ''"
                                :state="$page.errors.email == undefined ? null : false">
                            <b-form-input
                                :state="$page.errors.email == undefined ? null : false"
                                v-model="form.email"
                                type="email"
                                placeholder="ej: micorreo@correo.com">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group
                                label="Nueva Contraseña"
                                label-class="text-left mb-0"
                                :invalid-feedback="$page.errors.password != undefined ? $page.errors.password[0] : ''"
                                :state="$page.errors.password == undefined ? null : false">
                            <b-form-input type="password" v-model="form.password" :state="$page.errors.password == undefined ? null : false" trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                                label="Repetir Contraseña"
                                label-class="text-left mb-0"
                                :invalid-feedback="$page.errors.password_confirmation != undefined ? $page.errors.password_confirmation[0] : ''"
                                :state="$page.errors.password_confirmation == undefined ? null : false">
                            <b-form-input type="password" v-model="form.password_confirmation" :state="$page.errors.password_confirmation == undefined ? null : false" trim></b-form-input>
                        </b-form-group>
                        <div class="form-footer mt-2">
                            <b-button type="submit" variant="primary" block :disabled="loading" :class="loading ? 'btn-loading' : ''">Enviar</b-button>
                        </div>
                    </div>
                </b-form>
                <div class="text-center text-muted">
                    ¿No tienes una cuenta? <a href="./sign-up.html" tabindex="-1">Registrarme</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        token: String,
        email: String,
    },
    data(){
        return {
            form: {
                email: this.email,
                password: '',
                password_confirmation: '',
                token: this.token,
            },
            loading: false,
        }
    },
    methods: {
        onSubmit(){
            this.loading = true
            this.$inertia.post(route('admin.password.update'), this.form)
                .then(() => {
                    this.loading = false
                })
        },
    },
}

</script>