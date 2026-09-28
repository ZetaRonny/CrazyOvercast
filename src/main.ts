// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './vue-routes'

const app = createApp(App)
app.use(router)
app.mount('#app')