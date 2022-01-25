import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';

import '@/assets/css/app.css'

import FontAwesomeIcon from './plugins/fontawesome'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App);
app.use(PrimeVue, {ripple: true, inputStyle: 'filled'})
app.use(ToastService)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
