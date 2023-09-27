const{createApp} = Vue; 


createApp({
  data(){
    return{
      who : 'sono Batman' ,
      imgHtml : '<img src="img/batman.jpg" alt="">', 
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