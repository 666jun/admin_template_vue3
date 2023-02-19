import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import '@/assets/scss/main.scss';
import naive from './components/naiveui/index';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive);

app.mount('#app');
