<template>
  <div id="calculations-history-wrapper">
    <h2>History</h2>
    <div id="calculations-scroller">
      <div class="calculation" :key="i" v-for="calculation, i in history.getAll()">
        {{ calculation.task }} = {{ calculation.result }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCalculationHistoryStore } from "@/stores/history";

const history = useCalculationHistoryStore();
</script>

<style scoped>
#calculations-history-wrapper {
  max-width: 800px;
  min-width: 300px;
  width: 80%;
  max-height: 600px;
  min-height: 200px;

  overflow: auto;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #1d1d1d;

  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
