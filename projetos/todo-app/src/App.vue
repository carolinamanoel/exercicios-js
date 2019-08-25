<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ToDo/>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  name: 'app',
  components: {
    ToDo
  }
}
</script>

<style>
html, body {
  height: 100%;
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding-top: 60px; */
  height: 100%;
}
</style>
