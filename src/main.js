import { createApp } from 'vue'
import routes from './router/index.js';
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
  });

const app = createApp(App)
app.use(router)
app.mount('#app')
