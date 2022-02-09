<template>
  <div class="card">
    <Timeline :value="experiences" align="alternate" class="customized-timeline">
      <template #marker="slotProps">
                    <span class="custom-marker shadow-2 p-8" :style="{backgroundColor: slotProps.item.color}">
                        <i :class="slotProps.item.icon" style="font-size: 2rem" class="animate-bounce"></i>
                    </span>
      </template>
      <template #content="slotProps">
        <Card class="bg-transparent text-white border border-blue-200">
          <template #title>
            {{ slotProps.item.companyName }} <span class="font-normal text-lg">| {{ slotProps.item.year }}</span>
          </template>
          <template #subtitle>
            <span class="text-white">
            {{ slotProps.item.role }}
            </span>
          </template>
          <template #content>
            <ul class="flex text-left" v-for="list in slotProps.item.lists">
              <li>{{ list }}</li>
            </ul>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<script>
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  name: "ExperienceTimeLine",
  components: {
    Timeline, Card, Button
  },
  data() {
    return {
      experiences: [
        {
          companyName: 'xyz',
          year: '2021',
          role: 'developer',
          icon: 'pi pi-sitemap',
          color: '#9C27B0',
          lists: ['xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz']
        },
        {
          companyName: 'xyz',
          year: '2021',
          role: 'developer',
          icon: 'pi pi-cog',
          color: '#673AB7',
          lists: ['xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz']
        },
        {
          companyName: 'xyz',
          year: '2021',
          role: 'developer',
          icon: 'pi pi-book',
          color: '#FF9800',
          lists: ['xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz']
        },
        {
          companyName: 'xyz',
          year: '2021',
          role: 'developer',
          icon: 'pi pi-angle-double-up',
          color: '#458B00',
          lists: ['xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz']
        }
      ],
      events1: [
        {
          status: 'Ordered',
          date: '15/10/2020 10:30',
          icon: 'pi pi-sitemap',
          color: '#9C27B0',
        },
        {
          status: 'Processing',
          date: '15/10/2020 14:00',
          icon: 'pi pi-cog',
          color: '#673AB7'
        },
        {
          status: 'Shipped',
          date: '15/10/2020 16:15',
          icon: 'pi pi-book',
          color: '#FF9800'
        },
        {
          status: 'Delivered',
          date: '16/10/2020 10:00',
          icon: 'pi pi-angle-double-up',
          color: '#458B00'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-marker {
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50%;
  z-index: 1;
}

::v-deep(.p-timeline-event-content)
::v-deep(.p-timeline-event-opposite) {
  line-height: 1;
}

@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row !important;

      .p-timeline-event-content {
        text-align: left !important;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }

    .p-card {
      margin-top: 1rem;
    }
  }
}

</style>
