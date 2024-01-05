<template>
  <h1>Units</h1>
  <div class="units">
			<div class="table">
				<table>
					<tr>
						<th scope="col" id="code">Code</th>
						<th scope="col" id="desc">Description</th>
            <th scope="col" id="cp">Credit Points</th>
						<th scope="col" id="type">Unit Type</th>
					</tr>
					
					<tr v-for="u in units" v-bind:key="u.code">
						<td headers="code">{{u.code}}</td>
						<td headers="desc">{{u.desc}}</td>
						<td headers="cp">{{u.cp}}</td>
            <td headers="type">{{u.type}}</td>
					</tr> 
				</table>
			</div>
		</div>
</template>

<script>
  import Units from "../assets/units-3.json"; 
  export default {
    name: 'UnitsView',
    data() {
      return {
        units: Units,
      }
    }
  }
</script>

<style scoped>
.units {
  display: flex;
  justify-content: center; 
}

.table {
  width: fit-content; 
}

th,td {
  padding: 8px;
  text-align: left;
}
</style>
