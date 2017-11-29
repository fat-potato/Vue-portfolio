<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
require('material-design-icons/iconfont/material-icons.css')
require('font-awesome/css/font-awesome.css')
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
</style>
