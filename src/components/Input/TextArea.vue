<template>
  <div class="flex">
    <textarea
      :placeholder="placeholder"
      :rows="rows"
      ref="textArea"
      @input="updateValue($event.target.value)"
      :required="required">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'material-text-area',
  props: {
    value: {
      required: true
    },
    placeholder: {
      type: String
    },
    rows: {
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
