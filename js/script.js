const{createApp} = Vue; 


createApp({
  data(){
    return{
      who : 'sono Batman'

    }
  },

  methods:{
    salutoConFunzione(){
      this.who = `Ciao, io ${this.who}`;
    }
  },
mounted(){
  this.salutoConFunzione();
}


}).mount('#app');