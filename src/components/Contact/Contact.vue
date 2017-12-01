<template>
  <div class="container">
    <form>
      <h1>Contact me</h1>
      <materialInput v-model="name" placeholder="Name" type="text" required />
      <materialInput v-model="email" placeholder="Email address" type="email" required />
      <materialInput v-model="location" placeholder="Location" type="text" required />
      <mTextArea v-model="message" placeholder="Message" required />
      <button>Send</button>
    </form>

  </div>
</template>

<<script>
import materialInput from '@/components/Input/Input'
import mTextArea from '@/components/Input/TextArea'
export default {
  name: 'Contact',
  components: {
    materialInput,
    mTextArea
  },
  data () {
    return {
      name: '',
      email: '',
      location: '',
      message: ''
    }
  }
}
</script>
<style lang="scss" scoped src="./styles.scss"></style>
