<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h4>Parent counter is {{counter}}</h4>
    <Children @increment="increment" :counter="counter"></Children>
  </div>
</template>

<script>
import Children from './components/Children'

export default {
  name: 'Parent',
  components: {
    Children
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter += 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
