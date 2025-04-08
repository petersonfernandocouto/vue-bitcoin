
import { defineStore } from "pinia";
import { ref } from "vue";
import { getBitcoinData } from "../services/api";
import type { BitcoinApiResponse } from "../types/bitcoin";

export const useBitcoinStore = defineStore("bitcoin", () => {
  const bitcoinData = ref<BitcoinApiResponse | null>(null);
  const loading = ref(false);
  const hasFetched = ref(false); 

  const fetchBitcoinData = async () => {
    if (hasFetched.value || loading.value) return; 

    loading.value = true;
    const data = await getBitcoinData();
    bitcoinData.value = data;
    hasFetched.value = true;
    loading.value = false;
  };

  return { bitcoinData, loading, fetchBitcoinData };
});
