<template>
    
    <button v-if="background === 'black' && !props.disabled"
        class="px-4 py-2 bg-primary text-snow rounded-lg mt-4">
        {{ props.content }}
    </button>
    <button v-if="!props.disabled"
        class="px-4 py-2 bg-primary text-snow rounded-lg mt-4">
        {{ props.content }}
    </button>
    <button v-else class="px-4 py-2 bg-snow text-black rounded-lg mt-4 opacity-55" disabled>
        {{ props.content }}
    </button>

</template>

<script setup>

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    content: {
        type: String,
        default: 'Valider'
    },
    background: {
        type: String,
        default: 'primary'
    }
});

</script>