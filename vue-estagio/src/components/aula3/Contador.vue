<script setup>
import { ref } from 'vue'

const numero = ref(0) 
const nome = ref('')

function aumentar() {
  numero.value++
  console.log('teste')
}
function subtrair() {
  numero.value--
}
</script>

<template>
  <input v-model="nome" placeholder="Digite seu nome"/>
  <p>Olá {{ nome }}!</p>
  <h1>{{ numero }}</h1>
  <button @click="aumentar">+1</button>
  <button @click="subtrair">-1</button>
  <p v-if="numero < 0">negativo</p>
  <p v-else-if="numero == 0">zero</p>
  <p v-else>positivo</p>
</template>