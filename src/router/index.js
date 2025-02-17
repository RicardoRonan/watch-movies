import { createMemoryHistory, createRouter } from 'vue-router'
import App from '../App.vue'
import MovieView from '../components/MovieView.vue'

const routes = [
  { path: '/', component: App , name : 'Home'},
  { path: '/movie', component: MovieView , name : 'MovieView' },
]


export default routes;