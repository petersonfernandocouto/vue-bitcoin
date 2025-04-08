import axios from "axios";

export async function getBitcoinData() {
  const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
    params: {
      vs_currency: "usd",
      ids: "bitcoin",
    },
  });

  const bitcoin = response.data[0];

  return {
    data: {
      name: bitcoin.name,
      symbol: bitcoin.symbol.toUpperCase(),
      priceUsd: bitcoin.current_price,
      rank: bitcoin.market_cap_rank,
      supply: bitcoin.circulating_supply,
      maxSupply: bitcoin.total_supply,
      marketCapUsd: bitcoin.market_cap,
      volumeUsd24Hr: bitcoin.total_volume,
      changePercent24Hr: bitcoin.price_change_percentage_24h,
      vwap24Hr: bitcoin.current_price,
      explorer: bitcoin.explorer, 
    },
  };
}
