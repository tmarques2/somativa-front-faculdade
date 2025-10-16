<script setup>
import { onMounted } from 'vue';
import KpiCard from '../components/KpiCard.vue';
import { useMaintenanceStore } from '../store/maintenanceStore';

// Inicializa a store
const store = useMaintenanceStore();

// Quando o componente for montado, busca os dados da API
onMounted(() => {
  store.fetchManutencoes();
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
    
    <div v-if="store.isLoading" class="text-center">Carregando dados...</div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KpiCard title="Manutenções Atrasadas" :value="store.kpis.atrasadas" colorClass="text-red-500" />
      <KpiCard title="Manutenções Concluídas" :value="store.kpis.concluidas" colorClass="text-green-500" />
      <KpiCard title="Manutenções Pendentes" :value="store.kpis.pendentes" colorClass="text-yellow-500" />
    </div>

    <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4">Evolução das Manutenções</h2>
      <div class="h-64 bg-gray-100 rounded flex items-center justify-center">
        <p class="text-gray-500">[Gráfico virá aqui]</p>
      </div>
    </div>
  </div>
</template>