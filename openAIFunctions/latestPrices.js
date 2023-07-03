// 1. Write Function Code Within Execute Function
export const execute = async (options) => {
    const { cryptoName, vsCurrency } = options;
    try {
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName.toString()}&vs_currencies=${vsCurrency.toString()}`;
      const response = await fetch(url);
      const data = await response.json();
      return  String(data[cryptoName.toLowerCase()][vsCurrency.toLowerCase()])
    } catch (error) {
      console.error(`Error fetching ${cryptoName} price:`, error);
      throw error;
    }
  };
  // 2. Add Function Details for LLM to use
  export const details = {
    name: 'latestPrices',
    description: 'Fetches the price of a cryptocurrency from CoinGecko',
    parameters: {
      type: 'object',
      properties: {
        cryptoName: {
          type: 'string',
          description: 'The name of the cryptocurrency',
        },
        vsCurrency: {
          type: 'string',
          description: 'The target currency to compare the cryptocurrency price against',
        },
      },
      required: ['cryptoName', 'vsCurrency'],
    },
    example: 'Get the current price of Bitcoin in USD',
  };