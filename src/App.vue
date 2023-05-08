<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <RouterLink to="/">home</RouterLink>
      <RouterLink class="page" to="/page1">page1</RouterLink>
      <RouterLink to="/page2">page2</RouterLink>
      <RouterLink class="page" to="/props">props</RouterLink>
    </header>
    
    <RouterView />
</template>

<style lang="scss" scoped>
    .page {
      margin: 0 10px;
    }
</style>
