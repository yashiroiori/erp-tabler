<template>
    <nav class="navbar navbar-expand-lg navbar-primary navbar-vertical navbar-dark" id="navbar-primary">
        <div class="container">
            <inertia-link :href="route('admin.dashboard')" class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal">
                <img src="/storage/backend/img/logo.svg" alt="Tabler" class="navbar-brand-logo navbar-brand-logo-large">
                <img src="/storage/backend/img/logo-small.svg" alt="Tabler" class="navbar-brand-logo navbar-brand-logo-small">
            </inertia-link>
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav mb-2">
                    <li class="nav-item">
                        <inertia-link class="nav-link" :href="route('admin.dashboard')">
                            <i class="nav-icon fa fa-home"></i>
                            <span class="nav-link-title">Home</span>
                        </inertia-link>
                    </li>
                </ul>
                <template v-for="module in modules">
                    <h6 class="navbar-heading" v-if="module.header">{{module.name}}</h6>
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="children in module.children">
                            <inertia-link :href="route(children.slug+'.index')" class="nav-link">
                                <i class="nav-icon" :class="children.icon"></i>
                                <span class="nav-link-title">{{children.name}}</span>
                            </inertia-link>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    computed: {
        modules(){
            return this.$page.auth.user.menu
        },
    },
}

</script>