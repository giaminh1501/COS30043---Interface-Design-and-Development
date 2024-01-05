<template>
  <div class="tasks">
    <h1>Tasks List</h1>
    <p>Enter a Task:  
      <input type="text" v-model="task">
      <button v-on:click="add(task)">Add</button>
    </p>

    <p>To do list:</p>
    <div v-for="(t,index) in taskList" :key="'task-' + index">
      <p>
        {{ t }}   
        <button v-on:click="remove(index)">Delete</button>   
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksView',
  data() {
    return {
      taskList:[],
      task:''
    }
  },

  methods: {
    add(t) {
      this.taskList.push(t)
    },

   remove(index){
     this.taskList.splice(index,1);
   }
 }
}
</script>

<style scoped>
  button {
    margin-left: 10px;
  }
</style>