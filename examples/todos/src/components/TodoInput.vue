<template>
  <div>
    <input type="text" v-model="text" @keyup.enter="addTodo">
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      text: ''
    }
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', this.text)
      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>