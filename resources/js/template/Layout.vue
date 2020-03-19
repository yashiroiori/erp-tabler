<template>
    <div class="page">
        <side-bar />
        <top-bar />
        <div class="content pt-0">
            <div class="card" style="top: 48px; z-index: 999; position: sticky;" v-if="this.$slots['left_toolbar'] || this.$slots['right_toolbar']">
                <div class="card-status-bottom bg-info"></div>
                <div class="card-body border-bottom pt-1 pb-1 pl-0 pr-0">
                    <div class="d-flex">
                        <b-col cols="6">
                            <slot name="left_toolbar" />
                        </b-col>
                        <b-col cols="6" class="text-right">
                            <slot name="right_toolbar" />
                        </b-col>
                    </div>
                </div>
            </div>
            <div class="container d-flex flex-column" :style="this.$slots['left_toolbar'] || this.$slots['right_toolbar'] ? 'padding-top: 48px;' : 'padding-top: 78px;'">
                <flash-messages />
                <slot />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>

import SideBar from './section/SideBar'
import TopBar from './section/TopBar'
import Footer from './section/Footer'
import FlashMessages from '@/components/FlashMessages'

export default {
    components: {
        'side-bar': SideBar,
        'top-bar': TopBar,
        'Footer': Footer,
        'flash-messages': FlashMessages,
    },
}

</script>
