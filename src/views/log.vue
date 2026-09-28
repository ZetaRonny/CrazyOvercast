<script setup>
import { ref, onMounted } from 'vue'
import Pagination from '@/components/pagination.vue'
import { getDevLogs } from '@/services/devlogs'

const logs = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const loading = ref(false)

const loadPage = async (page) => {
  loading.value = true

  try {
    const response = await getDevLogs(page)
    console.log('FULL RESPONSE:', response.data)
    console.log('ITEMS:', response.data.items)

    logs.value = response.data.items
    currentPage.value = response.data.page
    totalPages.value = response.data.totalPages || 1

  } catch (error) {
    console.error('Error loading dev logs:', error)

  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadPage(1)
})
</script>


<template>
  <div class="content">

    <div class="centered-text">
      
    

    <!-- Loading -->
    <div v-if="loading" class="details">
      Loading...
    </div>

    <!-- Dev Log Entries -->
    <div v-else class="details">

      <article
        v-for="log in logs"
        :key="log.id"
        class="dev-log"
      >
        <h3 class="title">
          {{ log.title }}
        </h3>

        <p class="body">
          {{ log.body }}
        </p>

        <img
          v-if="log.image_url"
          :src="log.image_url"
          :alt="log.title"
        />
      </article>

    </div>

  </div>
  </div>

  <!-- Pagination -->
  <Pagination
    :current-page="currentPage"
    :total-pages="totalPages"
    @page-change="loadPage"
  />
</template>


<style scoped>

.details {
  display: grid;
  margin-left: 1rem;
}

.looming {
  color: rgb(146, 146, 146);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  height: fit-content;
  font-size: 18pt;
}

.title {
  color: #333131;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  height: fit-content;
}

.centered-text {
  text-align: center;
}

.content {
  min-height: 85vh;
  display: grid;
  margin: 0;
  color: #111111;
}

.dev-log {
  margin-bottom: 2rem;
}

.body {
  white-space: pre-line;
}

.dev-log img {
  max-width: 100%;
  height: auto;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
}

</style>