<script setup lang="ts">
import IMGBitcoin from '../IMG/IMGBitcoin.png';
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-[50px] px-4 py-8 lg:py-20"
    style="background: linear-gradient(to bottom, #1C1C1E, #9003fc);"
  >
    <h1 class="text-[34px] px-1 lg:px-0 font-semibold lg:text-[40px] 2xl:text-[68px] lg:w-[620px] leading-none pb-10 lg:pb-6 font-['Quantico']">
      Acompanhe aqui os dados atualizados do <strong class="text-[#ffb3ff]">Bitcoin</strong> diariamente!
    </h1>

    <img :src="IMGBitcoin" alt="Bitcoin Image" class="w-[450px] h-[450px] hidden lg:block" />
  </div>
</template>
