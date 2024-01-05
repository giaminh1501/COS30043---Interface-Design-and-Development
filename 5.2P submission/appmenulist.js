const app = Vue.createApp({ 	})

//populate menu with a variable
app.component('mymenu', 
{
	props: ['menu'], //defining the props

	template:  `
		<div>
			<div v-for="item in menu">
				<ul>
                			<li>{{ item }}</li> 
            		</ul>
			</div>
		</div>`
})
app.mount('#app')
