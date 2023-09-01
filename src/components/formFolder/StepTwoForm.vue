<template>
  <div style="height: 330px">
    <div class="md:tw-flex tw-gap-5 md:tw-justify-between">
      <div v-for="item in selectData" :key="item.price">
        <SelectPlanCard @selected-plan="sendPlan" :selected="getPlanDetails.title" :item="item"/>
      </div>
    </div>
    <div class="toggle__month tw-flex tw-gap-5 tw-mt-8 tw-justify-center tw-items-center">
      <div :class="[toggleValue !== 'yr' ? 'not__select__month' : 'select__month']">Monthly</div>
      <v-switch
          v-model="toggleDuration"
          dense
          @change="chooseMonth"
          color="white"
          inset
      ></v-switch>
      <div :class="[toggleValue !== 'mo' ? 'not__select__month' : 'select__month']">Yearly</div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/services/eventBus";
import SelectPlanCard from "@/components/reusables/SelectPlanCard";
import advancedIcon from "@/assets/images/icon-advanced.svg"
import arcadeIcon from "@/assets/images/icon-arcade.svg"
import proIcon from "@/assets/images/icon-pro.svg"
import {mapGetters, mapMutations} from "vuex";


export default {
  name: "StepTwoForm",
  components: {SelectPlanCard},
  data(){
    return {
      toggleDuration: false,
      toggleValue: 'mo',
      selectData:[
        {title: 'Arcade', image: arcadeIcon, price:9, duration:'mo'},
        {title: 'Advanced', image: advancedIcon, price:12, duration:'mo'},
        {title: 'Pro', image: proIcon, price:15, duration:'mo'},

      ]
    }
  },
  computed:{
    ...mapGetters('form', ['getSelectedAddOns', 'getPlanDetails'])
  },
  methods:{
    ...mapMutations('form',['setPlanDetails', 'setSelectedAddOns']),
    sendPlan(val){
      this.setPlanDetails(val)
      this.sendClearPlan()
    },
    sendClearPlan() {
      // sending the event
      eventBus.$emit('clearPlans')
    },
    handleNext(){
      let step = this.$route.params.step
      let newStep = parseInt(step)
      console.log(newStep)
      if(step < 3){
        this.$router.push({params: {step: `${newStep + 1}`}})
      }
    },
    chooseMonth(e){
      this.setPlanDetails({})
      this.sendClearPlan()
      if(e === true){
        this.toggleValue = 'yr'
        this.selectData.map(item => {
          item.duration = 'yr'
          item.price = item.price * 10
        })
      }else{
        this.toggleValue = 'mo'
        this.selectData.map(item => {
          item.duration = 'mo'
          item.price = item.price / 10

        })
      }
    }
  },
  mounted() {
    // adding eventBus listener
    eventBus.$on('Select', () => {
      console.log('next')
      this.handleNext()

    })
  },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('Select')
  }
}
</script>

<style scoped>
.toggle__month{
  background-color: #F0F6FF;
  border-radius: 5px;
  width: 100%;
  height: 40px;
}
.select__month{
  color: #9699AB
}
.not__select__month{
  color: #02295A;
}
</style>
