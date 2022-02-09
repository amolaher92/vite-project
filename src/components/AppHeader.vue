<template>
  <nav class="fixed w-full z-30 top-0 bg-gradient-to-r from-pink-500 to-orange-500" v-cloak>
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-5">
      <!-- brand logo -->
      <div class="pl-4 flex items-center">
        <router-link class="toggleColour text-blue-700 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                     to="/">
          <!--Icon from: http://www.potlabicons.com/ -->
          <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
            <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502"
                  transform="matrix(1,0,0,1,0,0)"/>
            <path class="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "/>
          </svg>
          LANDING
        </router-link>
      </div>
      <!--  brand logo end  -->
      <!-- toggle button-->
      <div class="block md:hidden pr-4">
        <!--        <button @click="toggleMenu()"
                class="flex items-center p-1 text-red-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>-->
        <button @click="toggleMenu"
                class="flex items-center px-3 py-2 border rounded text-gray-900 border-white hover:border-blue-700 lg:hidden">
          <svg class="w-6 h-6 text-pink" v-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round"
               stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" v-cloak>
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg class="w-6 h-6 text-pink" v-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg" v-cloak>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <!-- button end-->
      <!--menus start-->
      <div
          class="w-full flex-grow md:flex md:items-center md:w-auto mt-2 md:mt-0 md:bg-transparent text-black p-4 md:p-0 z-20"
          :class="showMenu ? 'block': 'hidden'">
        <nav-link :links="links"></nav-link>
      </div>
      <!-- menus end-->
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0"/>
  </nav>
</template>
<script>
import NavLink from "@/components/NavLink.vue";
import Menus from "@/router/Menus.js";

export default {
  name: "Header",
  components: {
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
      this.showMenu = !this.showMenu
    },
  }
}
</script>
<style lang="scss" scoped/>
