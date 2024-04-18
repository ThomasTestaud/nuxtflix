<template>
  <ul class="bg-black text-snow sticky top-0 flex px-4 py-2 z-20 items-end">
    <h1 class="text-primary text-3xl font-bold mr-5 underline">Nuttsflix</h1>
    <li v-for="{ path, name } in menu" :key="path" class="mr-4 text-xl">
      <NuxtLink :to="path">
        {{ name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>

const menu = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Movies', path: '/movies' },
]

</script>

<style scoped>
.router-link-exact-active {
  @apply text-primary;
}
</style>