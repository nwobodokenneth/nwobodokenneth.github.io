<template>
  <div style="height: 330px">
    <div class="step__card tw-px-5 tw-py-4">
      <div class="tw-flex tw-justify-between tw-items-center">
        <div>
          <div class="select__title">{{getPlanDetails.title}}({{getPlanDetails.duration === 'yr' ? 'Yearly' : 'Monthly'}})</div>
          <div @click="switchToSelect" class="selects">Change</div>
        </div>
        <div class="select__title">${{getPlanDetails.price}}/{{getPlanDetails.duration}}</div>
      </div>
      <v-divider class="tw-my-5"/>
      <div v-for="item in getSelectedAddOns" :key="item.title" class="tw-flex tw-justify-between">
        <div class="services mb-2">{{item.title}}</div>
        <div class="services--price">${{item.price}}/{{getPlanDetails.duration === 'yr' ? 'yr' : 'mo'}}</div>
      </div>

    </div>
    <div class="tw-flex tw-justify-between tw-px-6 tw-mt-5">
      <div class="services">Total (per {{getPlanDetails.duration === 'yr' ? 'year' : 'month'}})</div>
      <div class="totalNumber">${{getPrice}}/{{getPlanDetails.duration === 'yr' ? 'yr' : 'mo'}}</div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/services/eventBus";
import {mapGetters} from "vuex";

export default {
  name: "StepFourForm.vue",
  computed:{
    ...mapGetters('form', ['getSelectedAddOns', 'getPlanDetails']),
    getPrice(){
      let price
      console.log(this.getPlanDetails)
      let sumWithInitial = this.getSelectedAddOns.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal.price;
      }, 0);
      price = this.getPlanDetails.price + sumWithInitial
      return price

    }
  },
  methods:{
    handleNext(){
      let step = this.$route.params.step
      let newStep = parseInt(step)
      if(step < 5){
        this.$router.push({params: {step: `${newStep + 1}`}})
      }
    },
    switchToSelect(){
      let step = this.$route.params.step
      let newStep = parseInt(step)
        this.$router.push({params: {step: `${newStep - 2}`}})
    }
  },
  mounted() {
    // adding eventBus listener
    eventBus.$on('Finishing', () => {
      this.handleNext()

    })
  },

  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('Finishing')
  }

}
</script>

<style scoped lang="scss">
.step__card{
  background-color: #F0F6FF;
  width: 30vw;
  border-radius: 8px;
}
@media (max-width: 768px){
  .step__card{
    background-color: #F0F6FF;
    width: 100% !important;
    border-radius: 8px;
  }
}
.selects{
  text-decoration: underline;
  font-size: 14px;
  color: #9699AB;
}
.selects:hover{
  font-size: 14px;
  color: #473DFF;
}
.services{
  font-size: 15px;
  color: #9699AB;
}
.totalNumber{
  font-size: 20px;
  color: #473DFF;
  font-weight: 700;
}
.services--price{
  color: #02295A;
  font-weight: 400;
  font-size: 16px;
}
</style>
