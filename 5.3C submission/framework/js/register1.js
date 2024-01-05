//create new vue instance
Vue.createApp({
	//**************  data  ****************
	data() {
		return {
			name:"",
			pwd:"",
			repwd:"",

			//passing required data in vue app
			reg: {os:'',model:''},   // record the user selection of model type and operating system
	
			allModels: [
				{model:'HTC 10', os:'Android'},
				{model:'Nokia 6', os:'Android'},
				{model:'Samsung Galaxy 20 Ultra', os:'Android'},
				{model:'IDD VIOS Non Windows', os:'Android'},
				{model:'iPhone X', os:'IOS'},
				{model:'iPhone Xs Max', os:'IOS'},
				{model:'iPhone 11 Pro Max', os:'IOS'},
				{model:'IDD Windows Non Android', os:'IOS'},
				{model:'HP Elite x3', os:'Windows'},
				{model:'Microsoft 950', os:'Windows'},
				{model:'Microsoft 950XL', os:'Windows'},
				{model:'IDD VIOS Non Android', os:'Windows'}
					]
		}
	},//passing variables into vue app
    
	//**************  computed   ***************
	computed:{
    //filter function
    filterModel: function(){
		return this.allModels.filter(m=>
			m.os.toLowerCase().match(this.reg.os.toLowerCase()) &&
			m.model.toLowerCase().match(this.reg.model.toLowerCase())
			);
		}
	}
}).mount('#app');

