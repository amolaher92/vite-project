import Home from '@/views/Home.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/experience',
        name: 'Experience',
        component: () => import('@/views/Experience.vue'),
    },
    {
        path: '/technical-skills',
        name: 'TechnicalSkills',
        component: () => import('@/views/TechnicalSkills.vue'),
    },
    {
        path: '/educations',
        name: 'Educations',
        component: () => import('@/views/Educations.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')

    }
];
export default routes;