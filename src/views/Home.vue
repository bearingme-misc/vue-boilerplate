<template>
  <div
    class="flex flex-col items-center justify-center gap-4 p-16 text-primary"
  >
    <h1 class="text-4xl font-bold">Home</h1>
    <RouterLink to="/about">
      <button class="rounded-md bg-primary px-4 py-2 text-white">
        Go to About
      </button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
