import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import routes from './routes';

import 'quasar/dist/quasar.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(Quasar, quasarUserOptions);
app.mount('#app');
