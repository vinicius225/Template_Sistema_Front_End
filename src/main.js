import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue'
import '/node_modules/primeflex/primeflex.css'
import './style.css'
import 'primeicons/primeicons.css';
import 'primeflex/themes/primeone-light.css';

import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';



const app = createApp(App).use(PrimeVue)
.use(ConfirmationService)
.use(ToastService)
.use(DialogService)
.mount('#app');
