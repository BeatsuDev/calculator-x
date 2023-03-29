<template>
  <main class="calculator-view-wrapper">
    <BasicCalculator @answer-click="calculateAnswer" />
    <CalculationsHistory class="history-container" />
  </main>
</template>

<script setup lang="ts">
import CalculationsHistory from "@/components/CalculationsHistory.vue";
import BasicCalculator from "@/components/BasicCalculator.vue";

import { useCalculatorDisplayStore } from "@/stores/calculator";
import { useCalculationHistoryStore } from "@/stores/history";
import { CalculationApi } from "@/services/index";

const display = useCalculatorDisplayStore();
const history = useCalculationHistoryStore();

const calculationsApi = new CalculationApi();

// Other script logic
async function calculateAnswer(task: string) {
  const response = await calculationsApi.createCalculation({
    task,
  });
  const solution = response.data;

  history.add(solution);
  display.set("Wew! Answer!");
}
</script>

<style scoped>
.calculator-view-wrapper {
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.history-container {
  margin: 20px;
}

@media (max-width: 800px) {
  .calculator-view-wrapper {
    flex-direction: column;
  }
}
</style>
