import { ref } from "vue";
import { defineStore } from "pinia";

import type { Calculation } from "@/services/index";
import { CalculationApi } from "@/services/index";

const api = new CalculationApi();

export const useCalculationHistoryStore = defineStore("calculator-history", () => {
  const history = ref<Calculation[]>([]);

  function add(value: Calculation) {
    history.value.push(value);
  }

  function clear() {
    history.value = [];
  }

  function getAll() {
    return history.value;
  }

  async function fetchAll() {
    const calculations = await api.getCalculations();
    history.value = calculations.data;
    return getAll();
  }

  return { add, clear, getAll, fetchAll };
});
