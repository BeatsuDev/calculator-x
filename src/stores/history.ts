import { ref } from "vue";
import { defineStore } from "pinia";

import type { Calculation } from "@/services/index";

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

  return { add, clear, getAll };
});
