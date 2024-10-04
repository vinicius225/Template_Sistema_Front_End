import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import '/node_modules/primeflex/primeflex.css'
import './style.css'
import 'primeicons/primeicons.css';
import 'primeflex/themes/primeone-light.css';



const app = createApp(App).use(PrimeVue).mount('#app');
