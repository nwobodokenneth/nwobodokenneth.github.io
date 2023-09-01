<template>
  <div class=" tw-flex tw-justify-center md:tw-block tw-items-center tw-h-40 md:tw-h-full">
    <div v-for="(step, i) in steps" :key="i" class="d-flex align-center tw-mb-6">
      <v-avatar
          size="35" class="mr-3"
          :class="[currentStep >= i + 1 ? 'current__avatar' : 'done__avatar']"
      >
        <span :class="[currentStep >= i + 1 ? 'current__text' : 'done--text']">{{i + 1}}</span>
      </v-avatar>
      <div class="tw-hidden md:tw-block">
          <h4 class="step--title text-uppercase">{{ step.title }}</h4>
          <span class="step--sub">{{ step.sub }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormStepper",
  data: () => ({
    //
  }),
  props: {
    currentStep: [Number, String],
    steps: {
      type: Array,
      default: () => ([])
    }
  },
  watch: {
    currentStep: {
      handler: function (step) {
        this.$emit('change', this.steps[step - 1])
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">

.current__text{
  color: #02295A;
  font-weight: 500;

}

.done--text {
  color: white !important;
  font-weight: 500;


}

.step--title {
  color: #9699AB;
  font-weight: 500;
  font-size: 13px;
}
.step--sub {
  color: #FAFBFF;
  font-weight: 500;
  font-size: 15px;
}
.done--text{
  color:  #02295A;
}
.current__avatar{
  background-color: #BFE2FD;
  color: #ADBEFF
}
.done__avatar{
  background-color: transparent;
  border: 1px solid white;
}
//.step__step{
//  height: 80vh;
//}
</style>
