<template>
  <main id="login-view-wrapper">
    <LoginForm @login="login" />
  </main>
</template>

<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import { UserApi } from "@/services/index";

const userApi = new UserApi();

// Define callback functions
async function login(username: string, password: string) {
  const user = await userApi.createUser({
    username,
    password,
  });

  console.log(user);
}
</script>

<style scoped>
#login-view-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
