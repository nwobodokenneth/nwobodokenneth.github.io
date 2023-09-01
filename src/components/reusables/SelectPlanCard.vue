<template>
  <div>
    <div
        :class="[item.title === selected ? 'selected' : 'select']"
        class="tw-px-3 md:tw-py-5 tw-mb-3 tw-flex md:tw-block tw-items-center tw-gap-4 md:tw-gap-0 title"
        @click="sendPlan(item)"
    >
      <v-avatar class="tw-block md:tw-hidden" size="30">
        <v-img :src="item.image"/>
      </v-avatar>
      <v-avatar class="tw-hidden md:tw-block">
        <v-img :src="item.image"/>
      </v-avatar>
      <div>
        <div class="select__title md:tw-mt-10" style="width: 120px">{{item.title}}</div>
        <div class="select__price">${{item.price}}/{{item.duration}}</div>
        <div class="plan__discount tw-mt-1" v-if="item.duration === 'yr'">2 Months free</div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "SelectPlanCard",
  props: {
    item: {
      type: Object,
    },
    selected:{
      type: String
    }
  },
  methods:{
    sendPlan(val){
     this.$emit('selected-plan', val)
    }
  }


}
</script>

<style scoped lang="scss">
.planCard{
  /*width: 150px;*/
  /*overflow: hidden;*/
}
sec_title{
  width: 120px
}
.title{
  width: 9vw;
}

@media (max-width: 768px){
  .title{
    width: 100%;

  }
}
</style>
