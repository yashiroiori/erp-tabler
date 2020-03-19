<template>
    <div>
        <a href="#" class="nav-link" data-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow dropdown-menu-card" style="max-width: 20rem;">
            <div class="card">
                <div class="card-body">
                    test
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Echo from "laravel-echo"

export default {
    mounted(){
        window.Echo.channel('sistema_administrador_database_notifications')
            .listen('.notifications',(data) => {
                Toast.fire({
                    icon: data.type,
                    title: data.message,
                })
            })
            .listen('.role.notification',(data) => {
                Toast.fire({
                    icon: 'success',
                    title: data.message,
                })
            })
            .listen('.user.notification',(data) => {
                Toast.fire({
                    icon: 'success',
                    title: data.message,
                })
            })
    },
}

</script>