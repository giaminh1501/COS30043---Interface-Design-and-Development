//create new vue instance
Vue.createApp({
	data() {
		return {mess:'',guess:0,secret:0}
	},

	methods: {
		getRandomNumber: function() {
			return Math.floor(Math.random() * 100) +1;
		},

		checkGuess: function() {
			if (this.guess < 1 || this.guess > 100) {
                		this.mess = "Error. Please enter a number from 1 to 100!";
            	} 
			else {
                		if (this.guess - this.secret < 0)
                    		this.mess = "Guess higher!";
                		else if (this.guess - this.secret > 0)
                    		this.mess = "Guess lower!";
                		else
                    		this.mess = "You got it!";
			}
            },

		giveUp: function() {
            	this.mess = "You gave up. The random number this time is " + this.secret + "!";
        	},		

		startOver: function() {
			this.mess = "Start guessing!";
            	this.secret = this.getRandomNumber();
		}
	},

	created: function() {
			this.mess = "Start guessing!";
			this.secret = this.getRandomNumber();
	}
}).mount('#app');