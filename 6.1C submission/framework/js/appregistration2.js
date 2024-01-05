const vuetify = Vuetify.createVuetify( )  
const app = Vue.createApp({
methods: {
	validate() {
		this.$refs.myForm.validate() // validate all inputs  
	},

	show() {
		this.enable = !this.enable
	}
},

data: () => ({
	valid: true, firstName: '', lastName: '', email: '', address: '', suburb: '', postcode: '', mobile: '', userName: '', password: '', repassword: '', enable: false,

	fnameRules: [
      		v => !!v || 'First name required!', 
		v => /^[A-Za-z ]+$/.test(v) || 'First name must be letters only!'
        ],

	lnameRules: [
      		v => !!v || 'Last name required!',
		v => /^[A-Za-z ]+$/.test(v) || 'Last name must be letters only!' 
        ],

	emailRules: [
      		v => !!v || 'E-mail required!',
      		v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail must be valid!'
        ],

	addressRules: [
      		v => (v.length <= 40) || 'Street address must not exceed 40 characters!' 
        ],

	suburbRules: [
      		v => (v.length <= 20) || 'Suburb must not exceed 20 characters!' 
        ],

	pcodeRules: [
      		v => !!v || 'Postcode required!',
      		v => (v && /^[0-9]+$/.test(v)) || 'Postcode must be number only!',
        	v => (v && v.length === 4) || 'Postcode must contain exactly 4 digits!'
        ],

	mobileRules: [
      		v => !!v || 'Mobile number required!',
      		v => (v && /^[0-9]+$/.test(v)) || 'Mobile number must be number only!',
        	v => (v && v.length === 10) || 'Mobile number must contain exactly 10 digits!',
		v => (v && v.split('').splice(0, 2).join('') === '04') || 'Mobile number must start with 04!'
        ],

	unameRules: [
      		v => !!v || 'User name required!',
      		v => (v && v.length >= 3) || 'User name must be at least 3 characters!'
        ],

	passwordRules: [
        	v => !!v ||  'Password required!',
        	v => (v && v.length >= 8) || 'Password must be at least 8 characters!',
        	v => (v && v.split('').find(e => e.match(/^[$%^&*]+$/)) != undefined) || 'Password must contain at least 1 of these following special character: $, %, ^, &, or *'
    	],
}),

watch: {
	firstName () {this.$refs.myForm.validate() },
	lastName () {this.$refs.myForm.validate() },
	email () {this.$refs.myForm.validate() },
	address () {this.$refs.myForm.validate() },
	suburb () {this.$refs.myForm.validate() },
	postcode () {this.$refs.myForm.validate() },
	mobile () {this.$refs.myForm.validate() },
	username () {this.$refs.myForm.validate() },
	password () {this.$refs.myForm.validate() },
	repassword () {this.$refs.myForm.validate() }
}
})

app.use(vuetify)
app.mount('#app')