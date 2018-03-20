<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
  <todo
  v-for="todo in todos"
  :todo.sync="todo"
  v-on:delete-todo="deleteTodo"
  v-on:complete-todo="completeTodo"></todo>
</div>
</template>

<script type = "text/javascript" >

import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      console.log("toto", todo.done)
      const todoIndex = this.todos.indexOf(todo);
      if(todo.done) {
        this.todos[todoIndex].done = false;
      } else {
        this.todos[todoIndex].done = true;
      }
    }
  },
};

</script>


<style>

</style>
