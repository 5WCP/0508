<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <RouterLink to="/">home</RouterLink>
        <RouterLink class="page" to="/page1">page1</RouterLink>
        <RouterLink to="/page2">page2</RouterLink>
        <RouterLink class="page" to="/props">props</RouterLink>
        <RouterLink to="/emit">emit</RouterLink>
        <RouterLink class="page" to="/vShow">v-show</RouterLink>
        <RouterLink to="/modal">modal</RouterLink>
    </header>

    <div class="container">
    
    <RouterView  />
  </div>
</template>

<style lang="scss" scoped>
    header {
      padding: 2rem;
      background-color: #b1a3a3;
      border-radius: 5px;
    }
    .container {
      height: 800px;
      background-color: #784a7a;
      border-radius: 5px;
    }
    
    .page {
      margin: 0 10px;
    }
</style>
