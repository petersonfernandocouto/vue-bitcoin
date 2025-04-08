<script setup lang="ts">
import CardIMG from '../IMG/CardIMG.png'


</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-[#2b2a2b]">

    <div class="flex flex-col w-[290px] h-[220px] lg:w-[350px] lg:h-[250px] lg:flex-row items-center justify-center text-center gap-[1px] py-[10px] lg:py-[10px] font-['Quantico'] bg-[#2b2a2b]">

      <div class="flex flex-col bg-[#9003fc] border-[4px] border-[#9003fc] rounded-tl-[40px] rounded-tr-[40px]">
        <img
          :src="CardIMG"
          alt="Bitcoin Image"
          class="w-[290px] h-[220px] lg:w-[350px] lg:h-[250px] mb-7 rounded-tl-[40px] rounded-tr-[40px]"
        />
        <p class="lg:text-[22px] font-bold pl-2 text-white">
          Veja mais detalhes sobre o Bitcoin com um clique.
        </p>

        <div class="flex justify-center items-center mt-5">
          <a href="https://www.coingecko.com/pt/moedas/bitcoin" target="_blank"  rel="noopener noreferrer">
            <button class="bg-[#2b2a2b] text-white rounded-[15px] px-6 py-3 text-center font-bold lg:hover:-translate-y-2 transition-transform duration-700 mb-4">
              Ver mais
            </button>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
