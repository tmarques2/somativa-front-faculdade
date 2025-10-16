// src/store/maintenanceStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import api from '../services/api'; // Importa nosso serviço de API

export const useMaintenanceStore = defineStore('maintenance', () => {
  // === STATE ===
  // O estado principal que armazena nossa lista de manutenções.
  const manutencoes = ref([]);
  const isLoading = ref(false);

  // === GETTERS ===
  // Getters são como propriedades computadas para a store.
  // Eles calculam valores derivados do estado.
  const totalManutencoes = computed(() => manutencoes.value.length);

  const kpis = computed(() => {
    return {
      concluidas: manutencoes.value.filter(m => m.status === 'Concluída').length,
      pendentes: manutencoes.value.filter(m => m.status === 'Pendente').length,
      atrasadas: manutencoes.value.filter(m => m.status === 'Atrasada').length,
    };
  });

  // === ACTIONS ===
  // Actions são funções que podem modificar o estado.
  // Elas são usadas para buscar dados ou enviar novas informações.
  async function fetchManutencoes() {
    isLoading.value = true;
    try {
      const response = await api.getManutencoes();
      manutencoes.value = response.data; // Atualiza o estado com os dados da API
    } catch (error) {
      console.error('Erro ao buscar manutenções:', error);
      // Aqui você poderia definir um estado de erro para mostrar na UI
    } finally {
      isLoading.value = false;
    }
  }

  async function addManutencao(novaManutencao) {
     try {
      const response = await api.addManutencao(novaManutencao);
      // Adiciona a nova manutenção (retornada pela API) na lista local
      manutencoes.value.push(response.data);
    } catch (error) {
      console.error('Erro ao adicionar manutenção:', error);
      throw error; // Lança o erro para o componente tratar (ex: mostrar notificação)
    }
  }


  // Expõe o estado, getters e actions para os componentes poderem usar
  return {
    manutencoes,
    isLoading,
    totalManutencoes,
    kpis,
    fetchManutencoes,
    addManutencao,
  };
});