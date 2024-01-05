var readJsonURL = 'framework/js/units-1.json' //json file location for show preview
//var readJsonURL = 'http://127.0.0.1:5500/units-1.json' //json file location using live server extension for browser

const app = Vue.createApp({ })

app.component('mytable', // indicating the component tag
  {
	components: {
			paginate: VuejsPaginateNext,
	},
	  
    // defining data to be used in the component
    data: function() {
      return {
        perPage: 5,
        currentPage: 1,
        units: []
      }
    },

    //store data from JSon file to units after the component has been mounted
    mounted() {
      var self = this
      $.getJSON(readJsonURL, function(data) {
        self.units = data;
      })
    },
    // define the template for the component
    template: `
    <div>
  		<v-row>
  			<v-col cols="12" md="12 ">
  				<v-card class="mx-auto" max-width="90%">
  					<v-row>
  						<v-col md="12 " cols="12">
  							<v-card-text>
  								<v-table>
  									<template v-slot:default>
  										<thead>
  											<tr>
  												<th>Code</th>
  												<th>Description</th>
  												<th>Credit Points</th>
  												<th>Type</th>
  											</tr>
  										</thead>

  										<!-- Using v-for to loop units and list them -->
  										<tbody>
  											<tr v-for="unit in getItems" :key="unit.code">
  												<td>{{unit.code}}</td>
  												<td>{{unit.desc}}</td>
  												<td>{{unit.cp}}</td>
  												<td>{{unit.type}}</td>
  											</tr>
  										</tbody>
  									</template>
  								</v-table>

  						</v-col>
  					</v-row>

  					<v-row>
  						<v-col cols="12" md="4">

  							<!-- Vue Paginate template -->
  							<paginate 
							:page-count="getPageCount" 
							:page-range="5" 
							:margin-pages="5" 
							:click-handler="clickCallback" 
							:prev-text=" 'Prev' " 
							:next-text="'Next'" 
							:container-class="'pagination'" 
							:page-class="'page-item'">
  							</paginate>

  						</v-col>
  					</v-row>

  					</v-card-text>
  				</v-card>
  			</v-col>
  		</v-row>
  	</div>
    `,
    computed: {
      // returns the data according to the page number
      getItems: function() {
        let current = this.currentPage * this.perPage;
        let start = current - this.perPage;
        return this.units.slice(start, current);
      },

      //returns total number of pages required according to the total rows of data
      getPageCount: function() {
        return Math.ceil(this.units.length / this.perPage);
      }
    },

    methods: {
      //sets the clicked page
      clickCallback: function(pageNum) {
        this.currentPage = Number(pageNum);
      }
    }
  });


const vuetify = Vuetify.createVuetify( )  
app.use(vuetify)
app.mount('#app')
 