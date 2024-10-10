<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/layout/Header.vue'
import Footer from './views/layout/Footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer/>
</template>

<style scoped>
</style>