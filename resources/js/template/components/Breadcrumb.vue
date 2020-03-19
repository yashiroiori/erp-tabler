<template>
    <ol class="breadcrumb" aria-label="breadcrumbs">
        <li class="breadcrumb-item"><inertia-link :href="route('admin.dashboard')"><i class="fa fa-home"></i></inertia-link></li>
        <template v-for="breadcrumb in breadcrumbs">
            <li class="breadcrumb-item"><inertia-link :href="breadcrumb.url">{{breadcrumb.title}} </inertia-link></li>
        </template>
    </ol>
</template>

<script>

export default {
    computed: {
        breadcrumbs(){
            return this.$page.breadcrumbs ?? []
        },
    },
}

</script>
