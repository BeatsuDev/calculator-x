import { ref } from "vue";
import { defineStore } from "pinia";

export const useCalculatorDisplayStore = defineStore("calculator-display", () => {
  const text = ref("");

  function set(value: string) {
    text.value = value;
  }

  function clear() {
    text.value = "";
  }

  function replaceLast(value: string) {
    text.value = text.value.slice(0, -1) + value;
  }

  function append(value: string) {
    text.value += value;
  }

  return { set, clear, replaceLast, append, text };
});
