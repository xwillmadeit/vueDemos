<template>
  <div>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" :checked="todo.completed" v-model="todo.completed" />
        <span>{{todo.text}}</span>
        <span class="delete" @click="handleDelete(todo.id)">delete</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ['todos', 'filter'],
  methods: {
    handleDelete(id) {
      this.$emit('handleDete', id)
    }
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'completed':
          return this.todos.filter(todo => todo.completed)
        case 'active':
          return this.todos.filter(todo => !todo.completed)
        case 'all':
          return this.todos
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

.delete {
  color: salmon;
  text-decoration: underline;
  cursor: pointer;
}
</style>