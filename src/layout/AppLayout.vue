<template>
    <div class="leading-normal tracking-normal bg-gradient-to-r from-pink-500 to-orange-500">
        <app-header></app-header>
        <!-- <the-navbar></the-navbar> -->
        <slot></slot>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
// import TheNavbar from '@/components/Navbar.vue';
export default {
    name: "AppLayout",
    components: {
        AppHeader,
        AppFooter,
        // TheNavbar
    }
}
</script>
<style lang="sass" scoped>
</style>
