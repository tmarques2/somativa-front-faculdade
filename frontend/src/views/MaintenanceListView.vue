<script setup>
import { ref, onMounted } from 'vue';
import MaintenanceTable from '../components/MaintenanceTable.vue';
import MaintenanceForm from '../components/MaintenanceForm.vue';
import { useMaintenanceStore } from '../store/maintenanceStore';

const store = useMaintenanceStore();
const showForm = ref(false);

// Quando o componente é montado, busca as manutenções
onMounted(() => {
  // Só busca se a lista estiver vazia, para evitar recargas desnecessárias
  if (store.manutencoes.length === 0) {
    store.fetchManutencoes();
  }
});

// Função para lidar com o envio do formulário
async function handleAddManutencao(formData) {
  try {
    await store.addManutencao(formData);
    showForm.value = false; // Fecha o formulário após o sucesso
    alert('Manutenção registrada com sucesso!');
  } catch (error) {
    alert('Falha ao registrar manutenção.');
  }
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manutenções</h1>
      <button @click="showForm = !showForm" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
        {{ showForm ? 'Fechar Formulário' : 'Adicionar Manutenção' }}
      </button>
    </div>
    
    <div v-if="showForm" class="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Registro de Manutenção</h2>
        <MaintenanceForm @submit="handleAddManutencao" />
    </div>

    <div v-if="store.isLoading" class="text-center">Carregando...</div>
    <MaintenanceTable v-else :manutencoes="store.manutencoes" />
  </div>
</template>