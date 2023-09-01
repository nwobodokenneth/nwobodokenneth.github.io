<template>
  <div>
    <v-btn
        :type="type"
        :block="block"
        :depressed="depressed"
        :outlined="outlined"
        :width="width"
        :height="height"
        :color="color"
        :disabled="disabled"
        :text="text"
        @click="$emit('click')"
        class="tw-normal-case	font-weight-bold tw-rounded-lg"
        :class="outlined||text?'':'btn-hover'"
        :loading="loading"
    >
      <template v-slot:loader>
        <span class="custom-loader">
             <v-progress-circular
                 indeterminate
                 color="white"
             ></v-progress-circular>
        </span>
      </template>

      <slot name="left-icon">
      </slot>
      <span class="tw-normal-case tw-text-3xl"
            :class="outlined||text?'button-text-outlined':'button-text-depressed'" :style="{color: btnTextColor}"> {{ buttonText }}</span>
      <slot name="right-icon">

      </slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  components: {},
  props: {
    block: [Boolean],
    buttonText: [String],
    btnTextColor:[String],
    outlined: [Boolean],
    depressed: [Boolean],
    text: [Boolean],
    disabled: [Boolean],
    width: {
      type: String,
      default: '101px'
    },
    height: {
      type: String,
      default: '48px'
    },
    loading: [Boolean],
    type: {
      type: String,
      default: 'submit'
    },
    color: {
      type: String,
      default: '#008EEF'
    }

  }
}
</script>

<style scoped>


</style>
