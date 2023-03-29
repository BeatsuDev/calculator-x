<template>
  <form @submit.prevent="loginClicked" id="login-form-wrapper">
    <label for="username">Username:</label>
    <input id="username" type="text" v-model="username" />
    <label for="password">Password:</label>
    <input id="password" type="password" v-model="password" />
    <button type="submit">Log In / Register</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define emits
const emit = defineEmits<{
  (event: "login", username: string, password: string): void;
}>();

// Define refs
const username = ref("");
const password = ref("");

// Define callback functions
function loginClicked() {
  emit("login", username.value, password.value);
}

// Other script logic
</script>

<style scoped>
#login-form-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
}

#login-form-wrapper > label {
  margin-top: 1rem;
}

#login-form-wrapper > input {
  margin-top: 0.1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

#login-form-wrapper > button[type="submit"] {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
