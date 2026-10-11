<script setup>
import index from './views/index.vue'
import appFooter from './components/appFooter.vue'
import appHeader from './components/appHeader.vue'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const currentActivePage = ref(1);
const totalDataPages = ref(10); // Dynamically set based on database/API total counts

function onPageUpdate(page) {
  currentActivePage.value = page;
  // Trigger your API fetch request or filter array records here
}
</script>
<style>
@import "@/assets/css/main.css";
</style>

<template>
  <div class="app-layout">
    <appHeader class="app-header" />


    <main class="app-content">
      <router-view />
    </main>

    <appFooter class="app-footer" />
  </div>
</template>
