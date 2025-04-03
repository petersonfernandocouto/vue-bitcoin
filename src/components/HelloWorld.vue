<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getBitcoinData } from "../services/api";

const bitcoinData = ref<any>(null);

onMounted(async () => {
  bitcoinData.value = await getBitcoinData();
});

// Implementei a Função para formatar números no padrão brasileiro
const formatNumber = (value: string | number): string => {
  const numberValue = typeof value === "string" ? parseFloat(value) : value;
  return numberValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold">Bitcoin Data</h1>
    <div v-if="bitcoinData">
      <p><strong>Nome:</strong> {{ bitcoinData.data.name }}</p>
      <p><strong>Símbolo:</strong> {{ bitcoinData.data.symbol }}</p>
      <p><strong>Preço USD:</strong> ${{ formatNumber(bitcoinData.data.priceUsd) }}</p>
      <p><strong>Classificação no mercado:</strong> #{{ bitcoinData.data.rank }}</p>
      <p><strong>Quantidade de Bitcoins em circulação:</strong> {{ formatNumber(bitcoinData.data.supply) }}</p>
      <p><strong>Limite máximo de Bitcoins:</strong> {{ formatNumber(bitcoinData.data.maxSupply) }}</p>
      <p><strong>Capitalização de mercado (USD):</strong> ${{ formatNumber(bitcoinData.data.marketCapUsd) }}</p>
      <p><strong>Volume USD 24Hr:</strong> ${{ formatNumber(bitcoinData.data.volumeUsd24Hr) }}</p>
      <p><strong>Mudança % nas últimas 24h:</strong> {{ formatNumber(bitcoinData.data.changePercent24Hr) }}%</p>
      <p><strong>Preço médio ponderado por volume:</strong> ${{ formatNumber(bitcoinData.data.vwap24Hr) }}</p>
      <p><strong>Ver mais:</strong> <a :href="bitcoinData.data.explorer" target="_blank" class="text-blue-500 underline">Clique aqui</a></p>
    </div>
    <div v-else>
      <p>Carregando dados...</p>
    </div>
  </div>
</template>
