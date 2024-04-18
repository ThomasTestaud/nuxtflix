<template>
    <!--
        <ActionBtn @click="showTrailer = true;" v-if="!showTrailer && trailer" content="Voir la bande annonce"/>
        <ActionBtn v-else-if="!showTrailer" content="Aucune bande annonce disponible" :disabled="true" />
    -->
    <button @click="showTrailer = true" v-if="!showTrailer && trailer"
        class="px-4 py-2 bg-primary text-snow rounded-lg mt-4">
        Voir la bande annonce
    </button>
    <button v-else-if="!showTrailer" class="px-4 py-2 bg-snow text-black rounded-lg mt-4 opacity-55" disabled>
        Aucune bande annonce disponible
    </button>

    <div v-if="trailer && showTrailer" class="mt-4 flex">
        <iframe :src="`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0`" width="560" height="315"
            frameborder="0" class="rounded-xl" allowfullscreen></iframe>
    </div>
</template>

<script setup>

const props = defineProps({
    videos: Object
});

const showTrailer = ref(false);
const trailer = computed(() => {
    const trailer = props.videos?.results?.find(video => video.type === 'Trailer')
    const fallbackVideo = props.videos?.results?.[0]
    return trailer || fallbackVideo

});

</script>