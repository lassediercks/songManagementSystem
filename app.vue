<template>
  <div v-for="song in songs" :key="song.id">
    {{ song }}
  </div>
</template>

<script setup lang="ts">
const { data: songs } = await useFetch("/api/song");
</script>
