<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getBitcoinData } from "../services/api";

const bitcoinData = ref<any>(null);

onMounted(async () => {
  bitcoinData.value = await getBitcoinData();
});
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-[1px] px-4 py-8 lg:py-20"
  >
  <h1
  class="text-[17px] px-1 lg:px-0 font-semibold lg:text-[20px] 2xl:text-[68px] lg:w-[550px] leading-none pb-10 lg:pb-6 font-['Quantico']"
>
  O <strong class="text-[#ffb3ff]">Bitcoin</strong> ocupa consistentemente as primeiras posições no ranking global de criptomoedas, graças ao seu volume de mercado e valorização histórica.

  Desde sua criação, o <strong class="text-[#ffb3ff]">Bitcoin</strong> tem se consolidado como a principal moeda digital, sendo referência para o setor e abrindo caminho para milhares de outros ativos digitais.

  Seu <strong class="text-[#ffb3ff]">ranking</strong> reflete a confiança do mercado e o interesse crescente de investidores, instituições e governos ao redor do mundo.
</h1>

    <p
      v-if="bitcoinData && bitcoinData.data"
      class="text-[34px] px-10 lg:px-[150px] font-semibold lg:text-[23px] 2xl:text-[68px] lg:w-[620px] leading-none pb-10 lg:pb-6 font-['Quantico']"
    >
      <strong class="text-[#ffb3ff]">Classificação no mercado:</strong>#{{ bitcoinData.data.rank }}
    </p>

    <p
      v-else
      class="text-white text-lg"
    >
      Carregando dados...
    </p>
  </div>
</template>
