<template>
  <div class="flex flex-col items-center space-y-4">
    <div class="my-4">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
    </div>
    <div>
      <input
        ref="passwordInput"
        type="text"
        :value="password"
        readonly
        class="border border-gray-300 rounded p-2 text-center w-64 bg-background-dark text-text-dark"
      />
      <button
        @click="copyPassword"
        class="bg-button-dark text-white px-4 py-2 rounded hover:bg-button-light transition-colors duration-300 ease-in-out"
      >
        <i v-if="!passwordCopied" class="fa-solid fa-copy"></i>
        <!-- Exibe o ícone de cópia se a senha ainda não foi copiada -->
        <i v-else class="fa-solid fa-check"></i>
        <!-- Exibe o ícone de check se a senha foi copiada -->
      </button>
    </div>
    <button
      @click="generatePassword"
      class="bg-button-dark text-white px-4 py-2 rounded hover:bg-button-light transition-colors duration-300 ease-in-out"
    >
      Gerar Senha
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'

const title = 'Proteja Suas Contas com Senhas Únicas'
const password = ref('')
const passwordCopied = ref(false)

const passwordInput = ref<HTMLInputElement | null>(null) // Especificando o tipo do ref

function generatePassword() {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let newPassword = ''
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    newPassword += charset[randomIndex]
  }
  password.value = newPassword
  passwordCopied.value = false // Resetar o estado de senha copiada ao gerar nova senha
}

function copyPassword() {
  const inputElement = passwordInput.value
  if (inputElement) {
    // Verificando se o elemento não é nulo
    inputElement.select()
    document.execCommand('copy')
    passwordCopied.value = true
    // Mostrar toast de sucesso com SweetAlert2
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Senha copiada com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
</script>
