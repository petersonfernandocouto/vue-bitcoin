<script setup lang="ts">
import { useBitcoin } from "../composables/useBitcoin";

const { bitcoinData, loading, error } = useBitcoin();

// Função para formatar números com verificação de segurança
const formatNumber = (value: string | number | undefined | null): string => {
  if (value === undefined || value === null || isNaN(Number(value))) {
    return "N/A";
  }

  const numberValue = typeof value === "string" ? parseFloat(value) : value;
  return numberValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center text-center gap-[1px] py-[10px] lg:py-[10px] font-['Quantico'] bg-[#2b2a2b]"
  >
    <!-- Carregando -->
    <p v-if="loading" class="text-white text-lg py-10">Carregando dados...</p>

    <!-- Erro -->
    <p v-else-if="error" class="text-red-500 text-lg py-10">{{ error }}</p>

    <!-- Dados disponíveis -->
    <div
      v-else-if="bitcoinData && bitcoinData.data"
      class="flex flex-col lg:flex-row w-full justify-center items-center gap-6"
    >
      <!-- Circulação -->
      <div
        class="bg-[#9003fc] lg:w-[30%] lg:h-[220px] w-[80%] flex flex-col justify-center items-center rounded-[20px] mt-14 lg:mb-14 mx-auto"
      >
        <h1 class="text-[25px] font-bold lg:px-8">
          Quantidade de Bitcoins em circulação
        </h1>
        <h1 class="text-[20px] font-bold py-8">
          {{ formatNumber(bitcoinData.data.supply) }}
        </h1>
      </div>

      <!-- Máximo -->
      <div
        class="bg-[#9003fc] lg:w-[30%] lg:h-[220px] w-[80%] flex flex-col justify-center items-center rounded-[20px] mt-14 lg:mb-14 mx-auto"
      >
        <h1 class="text-[25px] font-bold lg:px-8">
          Limite máximo de Bitcoins
        </h1>
        <h1 class="text-[20px] font-bold py-8">
          {{ formatNumber(bitcoinData.data.maxSupply) }}
        </h1>
      </div>

      <!-- Market Cap -->
      <div
        class="bg-[#9003fc] lg:w-[30%] lg:h-[220px] w-[80%] flex flex-col justify-center items-center rounded-[20px] mt-14 lg:mb-14 mx-auto"
      >
        <h1 class="text-[25px] font-bold lg:px-8">
          Capitalização de mercado (USD)
        </h1>
        <h1 class="text-[20px] font-bold py-8">
          US$ {{ formatNumber(bitcoinData.data.marketCapUsd) }}
        </h1>
      </div>
    </div>

    <!-- Fallback final -->
    <p v-else class="text-white text-lg py-10">
      Dados indisponíveis no momento.
    </p>
  </div>
</template>
