<script setup lang="ts">
import IMGBitcoin from '../IMG/IMGBitcoin.png';
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-[50px] min-h-screen">
    <h1 class="text-[34px] px-1 lg:px-0 font-semibold lg:text-[40px] 2xl:text-[68px] lg:w-[620px] leading-none pb-[150px] lg:pb-7 font-['Quantico']">
      Acompanhe aqui os dados atualizados do <strong class="text-[#9003fc]">Bitcoin</strong> diariamente!
    </h1>

    <img :src="IMGBitcoin" alt="Bitcoin Image" class="w-[350px] h-[350px] hidden lg:block" />
  </div>
</template>