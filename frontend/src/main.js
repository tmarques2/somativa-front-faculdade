// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

// Importe a biblioteca do v-calendar
import VCalendar from 'v-calendar';
import 'v-calendar/style.css'; // Não se esqueça do CSS dele

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

// Use a biblioteca no seu app Vue
app.use(VCalendar, {})

app.mount('#app')