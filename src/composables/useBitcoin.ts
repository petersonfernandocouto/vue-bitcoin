// src/composables/useBitcoin.ts
import { ref } from "vue";
import { getBitcoinData } from "../services/api";

const bitcoinData = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);

let alreadyFetched = false; // ← usado pra evitar chamadas duplicadas

export function useBitcoin() {
  if (!alreadyFetched) {
    loading.value = true;
    getBitcoinData()
      .then((data) => {
        bitcoinData.value = data;
        alreadyFetched = true;
      })
      .catch((err) => {
        console.error("Erro ao buscar dados do Bitcoin:", err);
        error.value = "Erro ao carregar dados.";
      })
      .finally(() => {
        loading.value = false;
      });
  }

  return { bitcoinData, loading, error };
}
