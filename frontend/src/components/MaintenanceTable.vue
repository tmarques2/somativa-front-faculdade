<script setup>
defineProps({
  manutencoes: Array,
});

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'concluída':
      return 'bg-green-100 text-green-800';
    case 'pendente':
      return 'bg-yellow-100 text-yellow-800';
    case 'atrasada':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-bold mb-4">Lista de Manutenções</h2>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Máquina</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="manutencao in manutencoes" :key="manutencao.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ manutencao.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ manutencao.maquina }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ manutencao.data }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" :class="getStatusClass(manutencao.status)">
              {{ manutencao.status }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Ver / Editar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>