<template>
  <div class="container">
    <div class="pagination-wrapper">
      <div class="pagination-content">

        <button
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          <span class="inline-block scale-y-125">&#x276E;</span>
        </button>

        <span>P. {{ currentPage }}/{{ totalPages }}</span>

        <button
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          <span class="inline-block scale-y-125">&#x276F;</span>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['page-change'])

const changePage = (newPage) => {
  if (newPage >= 1 && newPage <= props.totalPages) {
    emit('page-change', newPage)
  }
}
</script>

<style scoped>
.pagination-wrapper {
  align-items: center;
  grid-template-columns: 1fr;
}

button {
  padding: 3px 6px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.container {
  display: grid;
  margin: 0;
  align-content: center;
  place-items: center;
}

.pagination-content {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 2rem;
}
</style>