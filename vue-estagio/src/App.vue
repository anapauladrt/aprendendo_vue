<script setup>
import { ref } from 'vue'

const numero = ref(0) 

function aumentar() {
  numero.value++
}
</script>

<template>
  <h1>{{ numero }}</h1>
  <button @click="aumentar">+1</button>
</template>
