const app = Vue.createApp({	})
	
app.component('my-component', // component name
{
	// defining data to be used in the component
	data:function(){
		return{
			statusList:[],
			status:''
		}
	},

	// define the template for the component
	template:  `
		<div>
			<p><strong>Status:</strong>	
				<input type="text" v-model="status" >
				<button v-on:click="add(status)">Post</button>
			</p>
			
			<div v-for="(t,index) in statusList">
				<p>
					{{ t }}   
					<button v-on:click="remove(index)">Del</button>   
				</p>
			</div>
		</div>`,

	// defining the methods  
	methods:{
		add:function(t){
			this.statusList.push(t) //push t into array
		},

 		remove:function(index){
			this.statusList.splice(index,1);  // remove the element at index position
		}
	}
});

app.mount('#app')
