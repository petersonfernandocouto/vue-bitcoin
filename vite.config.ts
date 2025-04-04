import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // Permite usar qualquer ícone como componente
        IconsResolver({
          prefix: 'Icon', // prefixo para evitar conflitos, ex: <IconSiBitcoinsv />
        }),
      ],
    }),
    Icons(), // necessário para carregar os ícones
  ],
})
