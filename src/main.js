import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importe o router

createApp(App)
  .use(router) // Use o router na aplicação
  .mount('#app');
