//Defining the list of subjects in an array
var subjects = [{
    code: 'ICT10001',
    desc: 'Problem Solving with ICT',
    cp: '12.5',	 
    type: 'Core'
  },
  {
    code: 'COS10005',
    desc: 'Web Development',
    cp: '12.5', 
    type: 'Core'
  },
  {
    code: 'INF10003',
    desc: 'Introduction to Business Information Systems',
    cp: '12.5', 
    type: 'Core'
  },
  {
    code: 'INF10002',
    desc: 'Database Analysis and Design',
    cp: '12.5', 
    type: 'Core'
  },
  {
    code: 'COS10009',
    desc: 'Introduction to Programming',
    cp: '12.5',
    type: 'Core' 
  },
  {
    code: 'INF30029',
    desc: 'Information Technology Project Management', 
    cp: '12.5',
    type: 'Core'
  },
  {
    code: 'ICT30005',
    desc: 'Professional Issues in Information Technology', 
    cp: '12.5',
    type: 'Core'
  },
  {
    code: 'ICT30001',
    desc: 'Information Technology Projects', 
    cp: '12.5',
    type: 'Core'
  }
];

// creating a component to pass in the router
const Subject = {
	data: function() {  return {    subjects    }  },

	//A dynamic segment is denoted by a colon :   When a route is matched, the value of the dynamic segments will be exposed as this.$route.params
	
	template: `<div>
		
		<h2>Unit Code: {{ $route.params.id }}</h2> 
		<ul v-for="unit in filteredUnits">
			<li>{{unit.code}}</li>
			<li>{{unit.desc}}</li>
			<li>{{unit.cp}}</li>
			<li>{{unit.type}}</li>
		</ul>
	</div>`,

	computed: {
		//returns the selected subjects 
		filteredUnits: function() {
		return this.subjects.filter(s => s.code.toLowerCase().match((this.$route.params.id.toLowerCase())));
		}
	}
}

// Creating the Router
const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	
	routes: [
		{ path: '/subject/:id',  component: Subject }
    ] 	//defining path and component mapping
})

//Creating new Vue instance
const app = Vue.createApp({})

// creating component for the lookup table
app.component('example_component', {
	data: function() { 
		return {   subjects    }
	},
	
	//defining template  
	template: `
		<div>
			<h2>Unit Information System</h2>
			<table class="table table-striped table-hover">
				<tr>
					<th>Code</th>
					<th>Description</th>
					<th>More Info</th>
				</tr>
				<tr v-for="s in subjects">
					<td>{{ s.code }}</td>
					<td>{{ s.desc }}</td>
					<td><router-link :to="{ path:'/subject/'+s.code }">show details</router-link></td>
				</tr>
			</table>
			<router-view ></router-view>		
		</div> `
})

app.use(router)
app.mount('#app')
