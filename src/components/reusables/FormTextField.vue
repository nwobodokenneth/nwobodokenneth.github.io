<template>
  <div>
    <v-text-field
        hide-details
        v-bind="{ ...$props, ...$attrs }"
        v-on="$listeners"
        @change="updateValue"
        @input="callInput"
        hide-spin-buttons
        :type="item.type"
        solo
    />
  </div>
</template>

<script>
export default {
  name: "FormTextField",
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    },
    basketLength: {
      type: Number,
    },

  },
  methods: {
    updateValue(val) {
      this.$emit('value', val)
    },
    callInput(val){
      this.$emit('input', val)
    },
  }

}
</script>

<style scoped>

</style>
