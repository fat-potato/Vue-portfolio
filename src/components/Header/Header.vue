<template>
  <header class="m_box">
    <router-link class="site-logo" to="/"></router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>

header {
  position: absolute;
  top: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  min-height: 64px;
  z-index: 3;
  background-color: rgb(63,81,181);
  color: rgb(255,255,255);
}

.site-logo {
  height: 50px;
  width: 50px;
  margin: 7px auto;
  background: url(../../assets/K.png);
  background-size: cover;
}

</style>

