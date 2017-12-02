<template>
  <div class="container">
    <KHeader/>
    <form v-on:submit.prevent="sendMail">
      <div class="title">
        <h1>Contact me</h1>
      </div>
      <div class="media">
        <img class="article-image" src="../../assets/contact.jpg">
      </div>
      <materialInput v-model="name" placeholder="Name" type="text" required />
      <materialInput v-model="email" placeholder="Email address" type="email" required />
      <mTextArea v-model="message" placeholder="Message" rows="1" required />
      <button class="mdl-button">Submit</button>
    </form>

  </div>
</template>

<script>
import materialInput from '@/components/Input/Input'
import mTextArea from '@/components/Input/TextArea'
import KHeader from '@/components/Header/Header'
import axios from 'axios'
export default {
  name: 'Contact',
  components: {
    materialInput,
    mTextArea,
    KHeader
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMail () {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        subject: 'CV Form Submission'
      }
      axios.post('http://formspree.io/khoi.martin28@gmail.com', data)
    }
  }
}
</script>
<style lang="scss" scoped src="./styles.scss"></style>
