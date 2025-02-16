<script setup>
import { getMovies } from "./api/movies.js";
import { ref, watchEffect } from "vue";

const moviesData = ref(null);
const fetchMovies = async () => {
  try {
    const data = await getMovies();
    moviesData.value = data;
    console.log("Movie data:", moviesData.value);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
fetchMovies();

watchEffect(() => {
  if (moviesData.value) {
    console.log("Movie data:", moviesData.value);
  } else {
    console.error("Could not fetch data");
  }
});

</script>

<template>
  <div>
    <div class="movie-card" v-for="movie in moviesData.result">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.description }}</p>
   <a :href="movie.embed_url">{{ movie.embed_url }}</a>
    </div>
  </div>

</template>

<style scoped>
.movie-card{
background-color:white;
color: #000;
padding :1rem; 
margin : 1rem 0.5rem;
border-radius:0.5rem;
max-width:30rem
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
