<template>

    <div class=" text-snow mt-4 m-2 flex w-10/12 m-auto">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="movie poster"
            class=" object-cover rounded-lg max-h-[80vh]" />
        <div class="ml-8">
            <h2 class="text-primary mt-2 text-4xl font-bold">{{ movie.title }}</h2>


            <Stars :note="movie.vote_average" class="mt-2" />


            <p class="mt-2">Date de sortie : <span class="text-primary text-lg">{{ date.charAt(0).toUpperCase() + date.slice(1) }}</span></p>

            <Trailer :videos="movie.videos" />



            <p class="mt-4">{{ movie.overview }}</p>

            
        </div>
    </div>


</template>


<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';

const { getMovieById } = useTmdb();
const route = useRouter()
const movie = ref({});

const date = computed(() => {
    return new Date(movie.value.release_date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});

onMounted(async () => {
    movie.value = await getMovieById(route.currentRoute.value.params.id, 'videos');
});

</script>