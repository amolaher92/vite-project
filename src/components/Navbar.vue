<template>
    <navbar-layout>
        <template #brand>
            <router-link :to="{name:'Home'}" class="sm:text-3xl text-blue-700">
                <font-awesome-icon icon="archway" size="lg" />
                AmolAher.com</router-link>
        </template>
        <template #default>
            <div class="block lg:hidden pr-4">
                <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded text-gray-900 border-white hover:border-blue-700 lg:hidden">
                    <svg class="w-6 h-6 text-blue-700" v-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" v-cloak>
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg class="w-6 h-6 text-red-700" v-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-cloak>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent mt-2 p-4 text-gray-700 lg:p-0 z-20" :class="showMenu ? 'block' : 'hidden'">
                <nav-link :links="links"></nav-link>
            </div>
        </template>
    </navbar-layout>
</template>
<script>
import NavbarLayout from '@/layout/NavbarLayout.vue'
import NavLink from "@/components/NavLink.vue";
import Menus from "@/router/Menus.js";
export default {
    name: "Navbar",
    components: {
        NavbarLayout,
        NavLink
    },
    data() {
        return {
            showMenu: false,
            links: Menus
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>