// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue') // Usando Lazy Loading como pede o RNF03 [cite: 70]
  },
  {
    path: '/calendario',
    name: 'Calendario',
    component: () => import('../views/CalendarView.vue')
  },
  {
    path: '/lista',
    name: 'ListaManutencoes',
    component: () => import('../views/MaintenanceListView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;