const { createApp } = Vue

createApp({
    data(){
        return{
            texto: "Clique no botão!"
        }
    },
    methods: {
        alterarMensagem(){
            this.texto = "Obrigado por clicar"
        }
    },
}).mount("#app")