<script setup lang="ts">
</script>
<template>
  <div class="content">
    <div class="centered-text">
    <span class="looming">What's Looming?</span>
    </div>
  </div>
</template>

<style scoped>


.details {
  display: grid;
  margin-left: 1rem;
}

.looming{
   color:rgb(146, 146, 146);
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   height:fit-content;
   font-size: 18pt;
}

.title{
   color: #333131;
   font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   height:fit-content
}

.centered-text{
  text-align: center;
}
.content {
    /* Step 1: Make the body fill the entire screen height */
  min-height: 85vh; 
  
  /* Step 2: Turn the body into a flexbox column layout */
  display: grid;
  flex-direction: column;
  margin: 0;
  /* Step 3: Force the main content to grow and fill empty space */
  flex-grow: 1; 
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
}


</style>
