const {createApp} = Vue

createApp({
    data(){
        return{
            numero:0
        }
    },
    computed:{
        texto(){
            if (this.numero>10){
                return "Numero é maior que 10"
            }
            else if (this.numero<10){
                return "Numero é menor que 10"
            }
        }
    },
    methods: {
        somar(){
        this.numero += 1  
        },
        subtrair(){
            this.numero -= 1
        }
    }
}).mount("#app")