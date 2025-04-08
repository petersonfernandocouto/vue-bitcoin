<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getBitcoinData } from "../services/api";
import premios from '../IMG/Premios.png';
import PremiosIMG from '../IMG/PremiosIMG.png';

const bitcoinData = ref<any>(null);
const loading = ref(true);
const error = ref<string | null>(null);

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
    class="w-full h-full overflow-visible bg-cover bg-center bg-no-repeat rounded-t-[0px] lg:rounded-t-[0px]"
    :style="{ backgroundImage: `url(${premios})` }"
  >
    <div
      id="Premios"
      class="flex flex-col items-center gap lg:flex-row-reverse lg:justify-evenly lg:items-end w-full"
    >
      <!-- Texto -->
      <div class="flex flex-col justify-evenly items-center w-full lg:mb-40 z-0">
        <div class="flex flex-col items-center lg:items-start">

          <p class="text-[23px] px-1 font-semibold lg:text-[30px] lg:px-[150px] 2xl:text-[68px] lg:w-[620px] leading-none pb-6 pt-[30px] lg:pt-0 lg:pb-0 font-['Quantico']">
            <strong class="text-[#ffb3ff]">Volume USD 24Hr:</strong>
          </p>

          <p class="text-[23px] px-1 font-semibold lg:text-[30px] lg:px-[150px] 2xl:text-[68px] lg:w-[620px] leading-none pb-10 lg:pb-6 font-['Quantico']">
            {{ bitcoinData ? formatNumber(bitcoinData.volumeUsd24Hr) : "Carregando..." }}
          </p>

          <p class="text-[23px] px-1 font-semibold lg:text-[30px] lg:px-[150px] 2xl:text-[68px] lg:w-[620px] leading-none pb-6 pt-[30px] lg:pt-0 lg:pb-0 font-['Quantico']"><strong class="text-[#ffb3ff]">Mudança % nas últimas 24h:</strong></p>

          <p class="text-[23px] px-1 font-semibold lg:text-[30px] lg:px-[150px] 2xl:text-[68px] lg:w-[620px] leading-none pb-10 lg:pb-6 font-['Quantico']">
            
            {{ bitcoinData ? formatNumber(bitcoinData.changePercent24Hr) : "Carregando..." }}%
          </p>

          <p class="text-[23px] px-1 font-semibold lg:text-[30px] lg:px-[150px] 2xl:text-[68px] lg:w-[620px] leading-none pb-6 pt-[30px] lg:pt-0 lg:pb-0 font-['Quantico']"><strong class="text-[#ffb3ff]">Preço médio ponderado por volume:</strong></p>
          <p class="text-[23px] px-1 font-semibold lg:text-[30px] lg:px-[150px] 2xl:text-[68px] lg:w-[620px] leading-none pb-10 lg:pb-6 font-['Quantico']">
            R$ {{ bitcoinData ? formatNumber(bitcoinData.vwap24Hr) : "Carregando..." }}
          </p>
        </div>
      </div>

      <!-- Imagem lateral + badges -->
      <div class="lg:block relative lg:-top-10 lg:mb-[-40px] z-10">
        <img
          :src="PremiosIMG"
          class="w-[1250px] h-auto 2xl:w-[1550px]"
          alt="Premios"
        />
      </div>
    </div>
  </div>
</template>
