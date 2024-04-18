<template>

    <div class="flex justify-center  my-2 bg-black rounded-lg w-auto mb-6">
        <button v-for="{ code, label } in categorys" :key="code" @click="selectCategory(code)"
            :class="{ 'bg-primary': selectedCategory === code, 'bg-black': selectedCategory !== code }"
            class="px-4 py-2 text-snow rounded-lg">{{ label }}</button>
    </div>

    <WrapperSelector>
        <div v-for="movie in response" :key="movie.id" class="z-10 m-2 hover:scale-105 duration-300 min-w-[250px]">
            <NuxtLink :to="`/movies/${movie.id}`" >
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="movie poster"
                    class=" object-cover rounded-lg  max-h-[50vh]" />
                    <h2 class="text-primary mt-2 font-bold text-lg line-clamp-1">{{ movie.title }}</h2>
                    <Stars :note="movie.vote_average" />
            </NuxtLink>
        </div>
    </WrapperSelector>

    <div class="flex justify-center mt-4">
        <button @click="previousPage()" :disabled="currentPage <= 1"
            class="px-4 py-2 bg-primary text-snow rounded-lg mr-2 w-40">Previous</button>
        <span class="text-primary px-4 font-bold mr-2 self-center">{{ currentPage }}</span>
        <button @click="nextPage()" class="px-4 py-2 bg-primary text-snow rounded-lg w-40">Next</button>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const { getMovies } = useTmdb();
const response = ref([]);
const currentPage = ref(1);

const categorys = [{ code: 'now_playing', label: "À l'affiche" }, { code: 'popular', label: "Populaire" }, { code: 'top_rated', label: "Les mieux notés" }, { code: 'upcoming', label: "Prochainement" }];
const selectedCategory = ref('now_playing');

const selectCategory = async (category) => {
    selectedCategory.value = category;
    response.value = await getMovies(selectedCategory.value, currentPage.value);
}

const nextPage = async () => {
    currentPage.value++;
    response.value = await getMovies(selectedCategory.value, currentPage.value);
}

const previousPage = async () => {
    currentPage.value--;
    response.value = await getMovies(selectedCategory.value, currentPage.value);
}

onMounted(async () => {
    response.value = await getMovies(selectedCategory.value, currentPage.value);
});
</script>
