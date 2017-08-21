<template>
  <div>
    <h2>Todos App</h2>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList :todos="todos" :filter="filter" @handleDete="handleDelete"></TodoList>
    <TodoFooter :filter="filter" @changeFilter="changeFilter"></TodoFooter>
  </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

export default {
  name: "Todos",
  components: {
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  methods: {
    addTodo(text) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      }
      this.todos = this.todos.concat(newTodo)
    },
    changeFilter(type) {
      this.filter = type
    },
    handleDelete(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style scoped>

</style>