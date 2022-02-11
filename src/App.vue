<template>
  <app-layout>
    <router-view></router-view>
    <ScrollTop class="animate-bounce"/>
  </app-layout>
</template>
<script>
import AppLayout from "@/layout/AppLayout.vue";
import ScrollTop from 'primevue/scrolltop';

export default {
  name: 'App',
  components: {
    AppLayout, ScrollTop
  }
}
</script>

<style>

</style>
