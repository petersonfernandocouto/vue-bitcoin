<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getBitcoinData } from "../services/api";

// Estado reativo para os dados
const bitcoinData = ref<any>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Buscar os dados da API
onMounted(async () => {
  try {
    const response = await getBitcoinData();
    bitcoinData.value = response.data;
  } catch (err) {
    error.value = "Erro ao carregar dados da API.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-[1px] px-4 py-8 lg:py-20">
    <!-- Texto explicativo -->
    <h1 class="text-[17px] px-1 lg:px-0 font-semibold lg:text-[20px] 2xl:text-[68px] lg:w-[550px] leading-none pb-10 lg:pb-6 font-['Quantico']">
      O <strong class="text-[#ffb3ff]">Bitcoin</strong> ocupa consistentemente as primeiras posições no ranking global de criptomoedas, graças ao seu volume de mercado e valorização histórica.<br /><br />
      Desde sua criação, o <strong class="text-[#ffb3ff]">Bitcoin</strong> tem se consolidado como a principal moeda digital, sendo referência para o setor e abrindo caminho para milhares de outros ativos digitais.<br /><br />
      Seu <strong class="text-[#ffb3ff]">ranking</strong> reflete a confiança do mercado e o interesse crescente de investidores, instituições e governos ao redor do mundo.
    </h1>

    <!-- Exibição condicional -->
    <p v-if="loading" class="text-white text-lg">Carregando dados...</p>
    <p v-else-if="error" class="text-red-500 text-lg">{{ error }}</p>

    <p v-else class="text-[34px] px-10 lg:px-[150px] font-semibold lg:text-[23px] 2xl:text-[68px] lg:w-[620px] leading-none pb-10 lg:pb-6 font-['Quantico']">
      <strong class="text-[#ffb3ff]">Classificação no mercado:</strong>
      #{{ bitcoinData.rank ?? 'N/A' }}
    </p>
  </div>
</template>
