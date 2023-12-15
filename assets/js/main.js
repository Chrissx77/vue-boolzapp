const {createApp} = Vue

createApp({
    data(){
        return{
            mess: "Hello World"

        }
    },


    mounted(){
        console.log("App Caricata!!");
    }

}).mount('#app')