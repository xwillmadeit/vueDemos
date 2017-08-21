<template>
  <div id="app">
    <div class="sidebar">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  display: flex;
}

#app {
  flex: 1;
  display: flex;
}

#app .router-link-active {
  color: salmon;
}

.sidebar,
.sub-sidebar {
  width: 120px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-right: 1px solid #fff;
}

.sidebar a,
.sub-sidebar a {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.main {
  display: flex;
  flex: 1;
}

.sub-main {
  flex: 1;
}
</style>
