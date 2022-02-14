<template>
  <section class="bg-white border-b pt-24">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Title
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              xGETTING STARTED
            </p>
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              Lorem ipsum dolor sit amet.
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </p>
          </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-start">
            <button
                class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Action
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              xGETTING STARTED
            </p>
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              Lorem ipsum dolor sit amet.
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </p>
          </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-center">
            <button
                class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Action
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              xGETTING STARTED
            </p>
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              Lorem ipsum dolor sit amet.
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </p>
          </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-end">
            <button
                class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container mx-auto w-full border p-12 my-12">
    <h2 class="flex items-center justify-center text-3xl font-bold font-serif border p-4">What I do.</h2>
    <div class="w-full grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4 sm:p-12 border mt-8">
      <skills-badge v-for="i in 16">{{ i }}</skills-badge>
    </div>
  </div>
  <div class="container mx-auto w-full border p-12 my-12">
    <h2 class="flex items-center justify-center text-3xl font-bold font-serif border p-4">Know how much I.</h2>
    <div class="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="w-full flex flex-col gap-8 border mt-8 p-12 skew-y-12">
        <ProgressBar v-for="value in values" :value="value">
          {{ value }}%
        </ProgressBar>
      </div>
      <div class="w-full flex flex-col gap-8 border mt-8 p-12 skew-y-12">
        <ProgressBar v-for="value in values" :value="value" :showValue="false"/>
      </div>
      <div class="w-full flex flex-col gap-8 border mt-8 p-12 skew-y-12">
        <ProgressBar v-for="value in values" :value="value" :showValue="false"/>
      </div>
    </div>
  </div>
  <div class="container mx-auto w-full border py-8 px-4 my-12">
    <h2 class="flex items-center justify-center text-3xl font-bold font-serif border p-4">Know more about
      technology</h2>
    <div class="grid grid-cols sm:grid-cols-2 gap-8 p-8 border mt-4">
      <div class="shadow-lg">
        <Card class="">
          <template #title>
            <span class="flex justify-center">
            Advanced Card
              </span>
          </template>
          <template #content>
            <ul>
              <li v-for="i in 7" class="flex"><i class="pi pi-chevron-right mr-2 mt-1"></i>{{ i }}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi tenetur, temporibus
              </li>
            </ul>
          </template>
        </Card>
      </div>
      <div class="shadow-lg">
        <Card>
          <template #title>
           <span class="flex justify-center">
            Advanced Card
              </span>
          </template>
          <template #content>
            <ul>
              <li v-for="i in 7" class="flex"><i class="pi pi-chevron-right mr-2 mt-1"></i>{{ i }}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi tenetur, temporibus
              </li>
            </ul>
          </template>
          >
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import SkillsBadge from "@/components/SkillsBadge.vue";
import ProgressBar from 'primevue/progressbar';
import Card from 'primevue/card';

export default {
  name: "TechnicalSkills",
  components: {
    SkillsBadge, ProgressBar, Card
  },
  data() {
    return {
      values: [50, 60, 70, 50, 60, 70],
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
