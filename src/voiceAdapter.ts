function getVoiceAdapter(policy: "realtime" | "traditional", costPerMin: number) {
  const budgetLimit = 500; // $ limit
  let spend = 0;

  return {
    request: async (input: string) => {
      if (spend > budgetLimit) return { error: "Budget exceeded" };
      const start = Date.now();
      const adapter = policy === "realtime" ? GPTRealtimeAdapter : TraditionalAdapter;
      const result = await adapter.request(input);
      const durationMins = (Date.now() - start) / 60000;
      spend += durationMins * costPerMin;
      return result;
    }
  };
}

// Dummy adapters for illustration
const GPTRealtimeAdapter = {
  request: async (input: string) => `Realtime processed: ${input}`
};
const TraditionalAdapter = {
  request: async (input: string) => `Traditional processed: ${input}`
};

export { getVoiceAdapter };
