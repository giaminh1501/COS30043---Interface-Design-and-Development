<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome {{fname}} {{lname}}!</h1>
    <p>What is your name?</p>
    <p>First Name:
		<input v-model="fname" ></p> 
    <p>Last Name:
		<input v-model="lname" ></p>
    <input type="radio" id="ocean" value="Ocean" v-model="selectedOption">
					<label for = "ocean">Ocean</label>
    <input type="radio" id="mountain" class="display" value="Mountain" v-model="selectedOption">
					<label for = "mountain">Mountain</label><br/>
    <img class="display" v-if='selectedOption === "Ocean"' src="../assets/ocean.png">
    <img class="display" v-if='selectedOption === "Mountain"' src="../assets/mountain.png">
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data() {       
			return {
        fname: '',
        lname: '',
        selectedOption: '' 
      }
		}
  }
</script>

<style scoped>
  img.display {
    margin-top: 20px;
  }
</style>
