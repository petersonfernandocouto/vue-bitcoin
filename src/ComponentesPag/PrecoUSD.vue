<script setup lang="ts">
import { useBitcoin } from "../composables/useBitcoin";

// Dados da API vindos do composable
const { bitcoinData, loading, error } = useBitcoin();

// Formatador para moeda brasileira
const formatNumber = (value: string | number): string => {
  const numberValue = typeof value === "string" ? parseFloat(value) : value;
  return numberValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-[1px] px-4 py-8 lg:py-20"
  >
    <!-- Carregando -->
    <p v-if="loading" class="text-white text-lg">Carregando dados...</p>

    <!-- Erro -->
    <p v-else-if="error" class="text-red-500 text-lg">
      {{ error }}
    </p>

    <!-- Dados disponíveis -->
    <div v-else-if="bitcoinData && bitcoinData.data" class="flex flex-col lg:flex-row">
      <p
        class="text-[34px] px-1 font-semibold lg:text-[23px] lg:px-[150px] lg:py-[60px] 2xl:text-[68px] lg:w-[620px] leading-none pb-10 lg:pb-6 font-['Quantico']"
      >
        <strong class="text-[#ffb3ff]">Preço USD:</strong>
        R$ {{ formatNumber(bitcoinData.data.priceUsd) }}
      </p>

      <h1
        class="text-white text-[17px] px-1 lg:px-0 font-semibold lg:text-[20px] 2xl:text-[68px] lg:w-[550px] leading-none pb-10 lg:pb-6 font-['Quantico']"
      >
        O preço do <strong class="text-[#ffb3ff]">Bitcoin</strong> em dólares (USD)
        mostra quanto vale 1 BTC com base nas negociações em tempo real nas
        principais exchanges.<br /><br />
        Como o <strong class="text-[#ffb3ff]">Bitcoin</strong> é descentralizado,
        seu valor muda a todo momento, seguindo a lei da oferta e demanda.<br /><br />
        O dólar é usado como referência global, por isso o valor em USD é o mais
        usado para acompanhar o preço do
        <strong class="text-[#ffb3ff]">Bitcoin</strong>.
      </h1>
    </div>

    <!-- Fallback final -->
    <p v-else class="text-white text-lg">Dados indisponíveis no momento.</p>
  </div>
</template>

