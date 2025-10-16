// src/services/api.js
import axios from 'axios';

// Cria uma instância do Axios com uma URL base.
// Altere 'http://localhost:3000/api' para o endereço do seu back-end.
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funções para cada endpoint da API
export default {
  // Busca todas as manutenções
  getManutencoes() {
    return apiClient.get('/machines');
  },
  // Adiciona uma nova manutenção
  addManutencao(manutencao) {
    return apiClient.post('/machines', manutencao);
  },
  // (Opcional) Você pode adicionar outras funções aqui depois
  // getManutencao(id) {
  //   return apiClient.get(`/machines/${id}`);
  // },
  // updateManutencao(id, data) {
  //   return apiClient.put(`/machines/${id}`, data);
  // },
};