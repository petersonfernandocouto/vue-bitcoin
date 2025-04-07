<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getBitcoinData } from "../services/api";

const bitcoinData = ref<any>(null);

onMounted(async () => {
  bitcoinData.value = await getBitcoinData();
});

// Função para formatar números no padrão brasileiro
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
    <!-- Mostra enquanto dados não são carregados -->
    <p
      v-if="!bitcoinData || !bitcoinData.data"
      class="text-white text-lg"
    >
      Carregando dados...
    </p>

    <p
      v-else
      class="text-[34px] px-1 font-semibold lg:text-[23px] lg:px-[150px] 2xl:text-[68px] lg:w-[620px] leading-none pb-10 lg:pb-6 font-['Quantico']"
    >
      <strong class="text-[#ffb3ff]">Preço USD:</strong>
      R${{ formatNumber(bitcoinData.data.priceUsd) }}
    </p>

    <h1
      class="text-[17px] px-1 lg:px-0 font-semibold lg:text-[20px] 2xl:text-[68px] lg:w-[550px] leading-none pb-10 lg:pb-6 font-['Quantico']"
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
</template>
