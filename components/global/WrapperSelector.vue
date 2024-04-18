<template>
    <div class="text-white flex items-center cursor-pointer mb-2">
        <svg @click="type = 'grid'" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v4q0 .825-.587 1.413T9 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h4q.825 0 1.413.588T11 15v4q0 .825-.587 1.413T9 21zm10-10q-.825 0-1.412-.587T13 9V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0 10q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21z" />
        </svg>
        <svg @click="type = 'caroussel'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M5 19q-.825 0-1.412-.587T3 17V7q0-.825.588-1.412T5 5h1.325q.825 0 1.413.588T8.325 7v10q0 .825-.587 1.413T6.325 19zm6.325 0q-.825 0-1.412-.587T9.325 17V7q0-.825.588-1.412T11.325 5h1.325q.825 0 1.413.588T14.65 7v10q0 .825-.587 1.413T12.65 19zm6.325 0q-.825 0-1.412-.587T15.65 17V7q0-.825.588-1.412T17.65 5h1.325q.825 0 1.413.588T20.975 7v10q0 .825-.587 1.413T18.975 19z" />
        </svg>
        <svg @click="type = 'list'" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M10 20q-.825 0-1.412-.587T8 18t.588-1.412T10 16h10q.825 0 1.413.588T22 18t-.587 1.413T20 20zm0-6q-.825 0-1.412-.587T8 12t.588-1.412T10 10h10q.825 0 1.413.588T22 12t-.587 1.413T20 14zm0-6q-.825 0-1.412-.587T8 6t.588-1.412T10 4h10q.825 0 1.413.588T22 6t-.587 1.413T20 8zM4 8q-.825 0-1.412-.587T2 6t.588-1.412T4 4t1.413.588T6 6t-.587 1.413T4 8m0 6q-.825 0-1.412-.587T2 12t.588-1.412T4 10t1.413.588T6 12t-.587 1.413T4 14m0 6q-.825 0-1.412-.587T2 18t.588-1.412T4 16t1.413.588T6 18t-.587 1.413T4 20" />
        </svg>
    </div>

    <div v-if="type === 'caroussel'">
        <WrapperCaroussel>
            <slot></slot>
        </WrapperCaroussel>
    </div>
    <div v-else-if="type === 'grid'">
        <WrapperGrid>
            <slot></slot>
        </WrapperGrid>
    </div>
    <div v-else-if="type === 'list'">
        <WrapperList>
            <slot></slot>
        </WrapperList>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const type = ref('grid');

</script>