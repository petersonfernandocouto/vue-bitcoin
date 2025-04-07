<script setup lang="ts">
import { ref } from 'vue'
import Hero from '../ComponentesPag/Hero.vue'
import PrecoUSD from '../ComponentesPag/PrecoUSD.vue'
import Ranking from '../ComponentesPag/Ranking.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenuOnClick = (sectionId: string) => {
  isMenuOpen.value = false
  const section = document.querySelector(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<template>
  <div>
    <!-- Mobile Header -->
    <div class="flex fixed items-center z-40 bg-[#761abd] w-full lg:hidden px-6 py-6 shadow-lg">
      <a href="#"> <!-- Icone Mobile -->
        <svg
          class="w-[40px] h-[40px] text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M13.425 6.432c1.983.19 3.538.778 3.71 2.528c.117 1.276-.438 2.035-1.355 2.463c1.481.359 2.382 1.202 2.196 3.072c-.227 2.343-2.035 2.952-4.62 3.08l.004 2.42l-1.522.002l-.004-2.42q-.25-.002-.519.003c-.238.003-.484.006-.731-.001l.004 2.42l-1.52.001l-.004-2.42l-3.044-.058l.256-1.768s1.15.024 1.129.012c.423-.002.549-.293.58-.485l-.008-3.878l.012-2.76c-.046-.288-.248-.634-.87-.644c.033-.03-1.115.001-1.115.001L6 6.38l3.12-.005l-.004-2.37l1.571-.002l.004 2.37c.304-.008.603-.005.906-.003l.3.002l-.005-2.37L13.422 4zm-2.92 4.46l.076.002c.926.04 3.67.155 3.673-1.457c-.004-1.532-2.339-1.482-3.423-1.46q-.195.006-.327.005zm.129 4.75l-.134-.005v-2.91q.146.002.359-.002c1.282-.015 4.145-.05 4.132 1.494c.014 1.597-3.218 1.468-4.357 1.423" clip-rule="evenodd"/>
        </svg>
      </a>

      <button
        @click="toggleMenu"
        class="fixed flex items-center top-4 right-0 p-4 z-40 lg:hidden rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Menu -->
    <header class="h-10 md:h-20 px-8 md:px-12 lg:px-8 xl:px-28 flex gap-8 items-center bg-[#9003fc] text-white font-bold mb-24 lg:mb-0">

      <a href="#" class="text-[#024218]">
        <!-- Ícone principal -->
        <svg
          class="w-[40px] h-[40px] text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M13.425 6.432c1.983.19 3.538.778 3.71 2.528c.117 1.276-.438 2.035-1.355 2.463c1.481.359 2.382 1.202 2.196 3.072c-.227 2.343-2.035 2.952-4.62 3.08l.004 2.42l-1.522.002l-.004-2.42q-.25-.002-.519.003c-.238.003-.484.006-.731-.001l.004 2.42l-1.52.001l-.004-2.42l-3.044-.058l.256-1.768s1.15.024 1.129.012c.423-.002.549-.293.58-.485l-.008-3.878l.012-2.76c-.046-.288-.248-.634-.87-.644c.033-.03-1.115.001-1.115.001L6 6.38l3.12-.005l-.004-2.37l1.571-.002l.004 2.37c.304-.008.603-.005.906-.003l.3.002l-.005-2.37L13.422 4zm-2.92 4.46l.076.002c.926.04 3.67.155 3.673-1.457c-.004-1.532-2.339-1.482-3.423-1.46q-.195.006-.327.005zm.129 4.75l-.134-.005v-2.91q.146.002.359-.002c1.282-.015 4.145-.05 4.132 1.494c.014 1.597-3.218 1.468-4.357 1.423" clip-rule="evenodd"/>
        </svg>
      </a>

      <div
        :class="[ 
          'fixed lg:relative top-0 left-0 bg-[#9003fc] z-20 text-center overflow-hidden transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center justify-center w-full lg:h-full lg:opacity-100',
          isMenuOpen ? 'h-full opacity-100' : 'h-0 opacity-0',
        ]"
      >
        <nav class="lg:flex-1 justify-end flex gap-8 flex-col lg:flex-row lg:ml-16">

          <a class="hover:text-[#024218]" href="https://www.linkedin.com/in/peterson-fernando-6b3709133/" target="_blank" @click="closeMenuOnClick('#')">
                        
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="white" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>

          </a>

          <a class="hover:text-[#024218]" href="https://github.com/petersonfernandocouto" target="_blank" @click="closeMenuOnClick('#about')">

            <svg class="w-8 h-8 " fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 0C5.371 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.604-2.665-.304-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.299 24 12 24 5.373 18.627 0 12 0z"/>
            </svg>




          </a>

          <a class="hover:text-[#024218]" href="https://api.whatsapp.com/send/?phone=5519991955915&text&type=phone_number&app_absent=0" target="_blank" @click="closeMenuOnClick('#services')">


            <svg class="w-8 h-8" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.373-.025-.522-.075-.149-.672-1.611-.92-2.206-.242-.579-.487-.5-.672-.51-.173-.007-.373-.009-.572-.009-.198 0-.52.075-.792.373s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.003a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.65-.235-.374a9.86 9.86 0 0 1-1.51-5.25c.001-5.45 4.436-9.884 9.888-9.884a9.84 9.84 0 0 1 6.993 2.896 9.825 9.825 0 0 1 2.896 6.991c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.86 11.86 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.336 11.893-11.893a11.84 11.84 0 0 0-3.497-8.413"/>
            </svg>



          </a>

        </nav>

      </div>

    </header>

  </div>

    <div>

        <Hero />

    </div>

    <div>

        <PrecoUSD />

    </div>

    <div>

          <Ranking />
      
    </div>
      
  
</template>
