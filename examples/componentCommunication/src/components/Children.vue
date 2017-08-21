<template>
  <div class="hello">
    <h4>Children counter is {{counter}}</h4>
    <button @click="increment">increment counter from children</button>
  </div>
</template>

<script>
export default {
  name: 'Children',
  props: ['counter'],
  methods: {
    increment() {
      this.$emit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
