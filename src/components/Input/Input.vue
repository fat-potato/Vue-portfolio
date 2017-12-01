<template>
  <span>
    <input
      :placeholder="placeholder"
      :type="type"
      :required="required"
      @input="updateValue($event.target.value)"
      :value="value"
      ref="input">
    <span v-if="type === 'email'" class="validation-text">Please enter a valid email address.</span>
  </span>
</template>

<script>
export default {
  name: 'material-input',
  props: {
    value: {
      required: true
    },
    placeholder: {
      type: String
    },
    type: {
      type: String
    },
    required: {
      type: Boolean
    }
  },
  methods: {
    updateValue (value) {
      const formattedValue = value.trim()
      this.$emit('input', formattedValue)
    }
  }
}
</script>

<style lang="scss" scoped src="./styles.scss"></style>
