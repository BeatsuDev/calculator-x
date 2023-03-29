<template>
  <div id="basic-calculator-wrapper">
    <input type="text" id="display" v-model="display.text" disabled />
    <div id="inputs-wrapper">
      <div @click="buttonClick" class="button" id="button-clear">CLEAR</div>
      <div @click="buttonClick" class="button" id="button-open-bracket">(</div>
      <div @click="buttonClick" class="button" id="button-close-bracket">)</div>
      <div @click="buttonClick" class="button operator" id="button-divide">/</div>
      <div @click="buttonClick" class="button number" id="button-7">7</div>
      <div @click="buttonClick" class="button number" id="button-8">8</div>
      <div @click="buttonClick" class="button number" id="button-9">9</div>
      <div @click="buttonClick" class="button operator" id="button-multiply">*</div>
      <div @click="buttonClick" class="button number" id="button-4">4</div>
      <div @click="buttonClick" class="button number" id="button-5">5</div>
      <div @click="buttonClick" class="button number" id="button-6">6</div>
      <div @click="buttonClick" class="button operator" id="button-subtract">-</div>
      <div @click="buttonClick" class="button number" id="button-1">1</div>
      <div @click="buttonClick" class="button number" id="button-2">2</div>
      <div @click="buttonClick" class="button number" id="button-3">3</div>
      <div @click="buttonClick" class="button operator" id="button-add">+</div>
      <div @click="buttonClick" class="button" id="button-decimal">.</div>
      <div @click="buttonClick" class="button number" id="button-0">0</div>
      <div @click="answerClick" class="button" id="button-answer">ANS</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useCalculatorDisplayStore } from "@/stores/calculator";

const display = useCalculatorDisplayStore();

// Define emits
const emit = defineEmits<{
  (event: "answerClick", task: string): void;
}>();

// Define refs
const answerClicked = ref(false);

// Define callback functions
function buttonClick(event: MouseEvent) {
  // Clear the display if the answer button was last clicked
  if (answerClicked.value) {
    display.clear();
    answerClicked.value = false;
  }

  const clickedElement = event.target as HTMLElement;

  // Clear button
  if (clickedElement.innerText.toLowerCase() === "clear") {
    display.clear();
    return;
  }

  // If converting the character to a number is NaN, it is an operator
  const isOperator = (symbol: string): boolean => /[*/+-]/.test(symbol);

  // If the display is empty and the clicked value is an operator, don't allow it
  if (display.text === "" && isOperator(clickedElement.innerText)) {
    return;
  }

  // If the last character in the display is an operator, change the last character to the new operator
  if (isOperator(display.text.slice(-1))) {
    if (isOperator(clickedElement.innerText)) {
      display.replaceLast(clickedElement.innerText);
      return;
    }
  }

  // Add the clicked value to the display
  display.append(clickedElement.innerText);
}

function answerClick() {
  answerClicked.value = true;
  emit("answerClick", display.text);
}

// Other script logic
</script>

<style scoped>
#basic-calculator-wrapper {
  width: 100%;
  border-radius: 10px;
  background-color: #1d1d1d;
  color: #fff;
  padding: 10px;
  border: 2px solid black;
}

#display-wrapper {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  padding: 10px;
}

#display {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #718f6f;
  color: #202020;
  font-size: 30px;
  text-align: right;
  padding: 10px;
  margin-bottom: 20px;
}

#display:focus {
  outline: none;
}

#inputs-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
}

#button-answer {
  background-color: #b9701b;
  grid-column: span 2;
}

#button-clear {
  background-color: #111;
  border: 2px solid black;
}

.button {
  border-radius: 10px;
  background-color: #313131;
  color: #dfdfdf;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}

.number {
  background-color: #4d4d4d;
}

.operator {
  background-color: #393244;
}
</style>
