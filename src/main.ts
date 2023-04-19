import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from './App.vue';
import router from './router';
// eslint-disable-next-line import/no-unresolved
import 'uno.css';
import './assets/main.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(VueQueryPlugin);
