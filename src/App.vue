<template>
  <div id="app">
    <router-view/>
    <CircleBtn />
  </div>
</template>

<script>
import CircleBtn from '@/components/CircleBtn/Circle'

require('material-design-icons/iconfont/material-icons.css')
require('font-awesome/css/font-awesome.css')

export default {
  name: 'app',
  components: {
    CircleBtn
  }
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

a {
  cursor:pointer;
}

li {
  margin:0;
  padding:0;
  list-style-type:none;
  padding-top:9px;
}

ul {
  margin:0;
  padding:0;
  list-style-type:none;
}

p {
  margin-top:0;
  margin-bottom:25px;
  font-family:'Roboto', sans-serif;
  font-weight:300;
  font-size:10pt;
  line-height:17pt;
}

  h1, h3, h5, h6 {
    font-weight:400;
    margin:0;
  }
  h2 {
    font-weight:400;
    font-weight:500;
    margin:0;
    margin:0;
    font-size:22pt;
    line-height:37pt;
  }
  h4 {
    font-weight:400;
    margin:0;
    font-size:12pt;
    line-height:20pt;
    opacity:1;
  }

.section-headline {
  text-transform:uppercase;
  font-weight:500;
  letter-spacing:3px;
  font-size:10pt;
  opacity:0.8;
  margin-top:40px;
  margin-bottom:20px;
  color:#3f3d3c;
}

.m_box {
  box-shadow:0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}

</style>
