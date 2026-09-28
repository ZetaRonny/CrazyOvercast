<script setup lang="ts">
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

<template>
  <div class="app-layout">
    <appHeader class="app-header" />


    <main class="app-content">
      <router-view />
    </main>

    <appFooter class="app-footer" />
  </div>
</template>
<style scoped>
.app-layout {
  display: grid;
  /* 
    auto: Header scales to its content
    1fr: Main expands to fill all available space 
    auto: Footer scales to its content
  */
  grid-template-rows: auto 1fr auto;
  
  /* Forces the wrapper to take up at least the full screen height */
  min-height: 100vh; 
}

.app-header {
  padding: 1rem;
}

.app-content {
  padding: 1rem;
}

.app-footer {
  background-color: #343a40;
  color: white;
}


</style>
