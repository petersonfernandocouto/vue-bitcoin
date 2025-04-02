<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="text-red-500 text-4xl font-bold ">Hello Tailwind!</h1>
</template>

<style>
.read-the-docs {
  color: #888;
}
</style>
