<template>
  <router-link class="m_box" id="contact-button" :to="url">
    <i class="material-icons mail">mail</i>
  </router-link>
</template>

<script>
export default {
  name: 'Circle',
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

#contact-button {
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 40px;
  margin-bottom: 40px;
  z-index: 900;
  background-color: #d14836;
  border-radius: 50%;
  font-size: 24px;
  height: 56px;
  min-width: 56px;
  width: 56px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
  }

}

.mail {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-12px,-12px);
  line-height: 24px;
  width: 24px;
}

</style>
