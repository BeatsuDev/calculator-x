<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header id="navigation-header">
    <nav id="navigation-bar">
      <RouterLink id="home-button" to="/">Calculator</RouterLink>
      <RouterLink id="feedback-button" to="/feedback">Feedback</RouterLink>
      <RouterLink id="login-button" to="/login">Log In</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
#navigation-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #414141;
  border-bottom: 1px solid var(--vt-c-);

  z-index: 100;
}

#navigation-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
}

#navigation-bar > a {
  font-size: 20px;
  margin-left: 20px;
}

#navigation-bar > a:last-of-type {
  margin-left: auto;
  margin-right: 20px;
}
</style>
