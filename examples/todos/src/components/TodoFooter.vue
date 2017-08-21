<template>
  <div>
    <a v-for="t in ['all', 'active', 'completed']" :key="t" @click="changeFilter(t)" :class="{active: filter === t}">
      {{t | uppercase}}
    </a>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['filter'],
  methods: {
    changeFilter(type) {
      this.$emit('changeFilter', type)
    }
  },
  filters: {
    uppercase(letter) {
      return `${letter.charAt(0).toUpperCase()}${letter.slice(1)}`
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: underline;
  cursor: pointer;
  margin: 10px;
}

a.active {
  color: salmon;
}
</style>