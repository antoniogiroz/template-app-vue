import { VueQueryPlugin } from '@tanstack/vue-query';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'uno.css';
import './assets/main.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(VueQueryPlugin);
