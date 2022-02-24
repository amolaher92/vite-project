<template>
  <img src="http://placehold.jp/150x150.png" alt="" v-tooltip.top="`Enter your username`"
       class="rounded-full object-cover max-w-22 max-h-22 sm:max-w-32 sm:max-h-32"/>
</template>

<script>
import Tooltip from 'primevue/tooltip';

export default {
  name: "SkillsBadge",
  directives: {
    'tooltip': Tooltip
  }
}
</script>

<style scoped>

</style>
