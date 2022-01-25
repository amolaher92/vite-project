<template>
  <h1 class="text-5xl font-bold">About Page</h1>
  <font-awesome-icon icon="spinner" size="lg" spin/>
  <font-awesome-icon icon="spinner" size="lg" pulse/>

  <TabView>
    <TabPanel header="Header I">
      <font-awesome-icon icon="spinner" size="lg" spin/>
    </TabPanel>
    <TabPanel header="Header II">
      <font-awesome-icon icon="spinner" size="lg" pulse/>
    </TabPanel>
    <TabPanel header="Header III">
      Content III
    </TabPanel>
  </TabView>

</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

export default {
  name: "About",
  components: {
    TabPanel, TabView
  }
}
</script>

<style scoped>

</style>