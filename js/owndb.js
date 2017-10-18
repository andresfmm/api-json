

var usersweb = 'models.json';
var DB = new Vue({

   el:'#crear_db',
   created:function(){
     this.getusers();
   },
   data:{
     listdb:[],
     model_name:'',
     permissions:'',
     model:[
   {
   connection:'RestService.svc/getSecurityApplications?user=mzapata',
   namespacemodel:'CDEAPPLICATIONS',
   project:'25996',
   application:'TW',
   model:'project control',
   process:'',
   constraint:'',
   dataprovider:'API',
   permissions:'create, edit',
   entities:[
   {
    entity:'CDEApplications',
    type:'EdmEntityType',
    keys:[
    {
    key:'TRANSACTIONID',
    type:'Int'}],
    properties:[ 
      {key:'APPLICATION_NAME',type:'String'},
      {key:'PROCESS_NAME',type:'String'},
      {key:'SOURCE_DATA_DATE',type:'Date'},
      {key:'DESCRIPTION',type:'String'},
      {key:'PROJECT_ID',type:'String'},
      {key:'TARGET_TABLE_NAME',type:'String'},
      {key:'TOTAL',type:'String'},
      {key:'NEW',type:'String'},
      {key:'CHANGED',type:'String'},
      {key:'DELETED',type:'String'}]}]}],
   },

   methods:{
    getusers:function(){
      axios.get(usersweb).then(response => {
         this.listdb = response.data;
      });
    },
    createdb:function(){
      this.model.push({
        namespacemodel:this.model_name,
        permissions:this.permissions,
        project:2934,
      }); 
      this.model_name = '';
      this.permissions = '';
    }
   }

});

