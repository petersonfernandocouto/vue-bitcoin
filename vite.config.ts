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
        
        IconsResolver({
          prefix: 'Icon', 
        }),
      ],
    }),
    Icons(), 
  ],
})
