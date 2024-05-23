<script setup lang="ts">
import PasswordGenerator from './components/PasswordGenerator.vue'
</script>

<template>
  <div>
    <header class="bg-primary-dark text-white py-4">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold">Gerador de Senhas</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8 flex flex-col items-center space-y-4">
      <Logo />
      <PasswordGenerator />
    </main>
  </div>
</template>
<style scoped>
header {
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }
}
</style>
