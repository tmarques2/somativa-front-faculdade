// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia' // Importe o Pinia
import App from './App.vue'
import router from './router'      // Importe seu router
import './style.css'               // Importe seu CSS com Tailwind

const app = createApp(App)
const pinia = createPinia()        // Crie a instância do Pinia

app.use(router)                    // Use o router
app.use(pinia)                     // Use o Pinia
app.mount('#app')