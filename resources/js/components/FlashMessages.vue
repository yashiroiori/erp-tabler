<template>
    <b-row v-if="$page.flash.success || $page.flash.error">
        <b-col>
            <div class="alert alert-success alert-dismissible" role="alert" v-if="$page.flash.success">
                <i class="fa fa-check"></i>
                {{$page.flash.success}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="$page.flash.success = ''"><i class="fa fa-close"></i></button>
            </div>
            <div class="alert alert-danger alert-dismissible" role="alert" v-if="$page.flash.error">
                <i class="fa fa-check"></i>
                {{$page.flash.error}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="$page.flash.error = ''"><i class="fa fa-close"></i></button>
            </div>
        </b-col>
    </b-row>
    <!--
    <div class="container" v-if="$page.flash.success || $page.flash.error">
        <div class="alert alert-success alert-dismissible" role="alert" v-if="$page.flash.success">
            <i class="fa fa-check"></i>
            {{$page.flash.success}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="$page.flash.success = ''"><i class="fa fa-close"></i></button>
        </div>
        <div class="alert alert-danger alert-dismissible" role="alert" v-if="$page.flash.error">
            <i class="fa fa-check"></i>
            {{$page.flash.error}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="$page.flash.error = ''"><i class="fa fa-close"></i></button>
        </div>
    </div>
    -->
</template>

<script>
export default {
    data() {
        return {
            flash: this.$page.flash,
        }
    },
    watch: {
        ['this.$page.flash']: {
            handler() {
                if(this.$page.flash.info){
                    Toast.fire({
                        icon: 'info',
                        title: this.$page.flash.info
                    })
                }
                if(this.$page.flash.warning){
                    Toast.fire({
                        icon: 'warning',
                        title: this.$page.flash.warning
                    })
                }
                if(this.$page.flash.error){
                    Toast.fire({
                        icon: 'error',
                        title: this.$page.flash.error
                    })
                }
                if(this.$page.flash.success){
                    Toast.fire({
                        icon: 'success',
                        title: this.$page.flash.success
                    })
                }
            },
            deep: true,
        },
    },
}
</script>
