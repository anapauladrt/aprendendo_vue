<script setup>
import { ref } from 'vue'
const senha = ref('')
const digitar_senha_novamente = ref('')
const mensagem=ref('')

function validar(event){
  if (senha.value!=digitar_senha_novamente.value){
    event.preventDefault()
    mensagem.value="As senhas não conferem"
    return
  }
  if (senha.value.length<6){
    event.preventDefault()
    mensagem.value="Sua senha tem poucos caracteres (mínimo 7 caracteres)"
    return
  }
}

</script>

<template>
  <form class="senha" @submit="validar">
    <h1>Digite sua senha nova</h1>
    <div>
      <label>Senha nova:</label>
      <input v-model="senha" placeholder="Digite sua senha nova" type="password">
    </div>
    <div>
      <label>Digite novamente:</label>
      <input v-model="digitar_senha_novamente" placeholder="Digite sua senha novamente" type="password">
    </div>
    <button type="submit">Enviar</button>
    <p>{{ mensagem }}</p>

  </form>

</template>

<style scoped>
.senha{
  display: flex;
  flex-direction: column;
}
.senha h1{font-size: 20px;}

.senha input{
  padding: 10px;
  margin: 20px;
  
}

</style>