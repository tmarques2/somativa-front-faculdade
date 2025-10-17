// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  // CORREÇÃO: A URL base é apenas o servidor, sem /api
  baseURL: 'http://localhost:3000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getManutencoes() {
    // CORREÇÃO: A rota correta que o json-server criou é /machines
    return apiClient.get('/machines'); 
  },
  addManutencao(manutencao) {
    return apiClient.post('/machines', manutencao);
  },
};