import { createMemoryHistory, createRouter } from 'vue-router'
import App from '../App.vue'
import MovieView from '../components/MovieView.vue'

const routes = [
  { path: '/', App },
  { path: '/movie', component: MovieView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
}) 