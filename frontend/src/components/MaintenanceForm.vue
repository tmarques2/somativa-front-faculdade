<script setup>
import { ref } from 'vue';

// Define o evento que este componente pode emitir
const emit = defineEmits(['submit']);

// Estado local para os campos do formulário
const form = ref({
  maquina: '',
  data: '',
  tecnico: '',
  status: 'Pendente',
});

// Função chamada quando o formulário é enviado
function handleSubmit() {
  // Emite o evento 'submit' com os dados do formulário
  emit('submit', form.value);
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
            <label for="maquina" class="block text-sm font-medium text-gray-700">Máquina</label>
            <input v-model="form.maquina" type="text" id="maquina" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div>
            <label for="data" class="block text-sm font-medium text-gray-700">Data</label>
            <input v-model="form.data" type="date" id="data" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div>
            <label for="tecnico" class="block text-sm font-medium text-gray-700">Técnico</label>
            <input v-model="form.tecnico" type="text" id="tecnico" placeholder="Nome do técnico" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>
        <div>
             <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
            <select v-model="form.status" id="status" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Concluída</option>
                <option>Pendente</option>
                <option>Atrasada</option>
            </select>
        </div>
        <div class="flex justify-end pt-4">
            <button type="button" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-300">Cancelar</button>
            <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Salvar</button>
        </div>
    </form>
</template>