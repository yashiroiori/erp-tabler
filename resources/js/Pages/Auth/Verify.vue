<template>
    <layout>
        <b-row class="justify-content-md-center">
            <b-col cols="8">
                <div class="card">
                    <div class="card-status-top bg-warning"></div>
                    <div class="card-header"><h4 class="card-title">Verifique su dirección de correo electrónico</h4></div>
                    <div class="card-body">
                        <div class="alert alert-success" role="alert" v-if="$page.flash.resent">Se ha enviado un nuevo enlace de verificación a su dirección de correo electrónico.</div>
                        Antes de continuar, revise su correo electrónico para obtener un enlace de verificación.
                        Si no recibiste el correo electrónico
                        <form class="d-inline" @submit.prevent="onSubmit">
                            <button type="submit" class="btn btn-link p-0 m-0 align-baseline">haga clic aquí para solicitar otro</button>
                        </form>
                    </div>
                </div>
            </b-col>
        </b-row>
    </layout>
</template>

<script>

export default {
    methods: {
        onSubmit(){
            this.$inertia.post(route('admin.verification.resend'))
        },
    },
}

</script>