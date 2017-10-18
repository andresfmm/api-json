
var usersweb = 'models.json';
var App = new Vue({

   el:'#listar_table',
   created:function(){
     this.getusers();
   },
   data:{
     lista:[]
   },

   methods:{
   	getusers:function(){
      axios.get(usersweb).then(response => {
         this.lista = response.data;
      });
   	}
   }

});




