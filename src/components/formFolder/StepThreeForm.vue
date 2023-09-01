<template>
  <div style="height: 330px">
    <div v-for="item in getData" :key="item.title">
      <AddOnsCard :selected="getSelectedAddOns" @add-ons="sendSelectedAddOns" :item="item"/>
    </div>
  </div>
</template>

<script>

import AddOnsCard from "@/components/reusables/AddOnsCard";
import {mapGetters, mapMutations, mapState} from "vuex";
import eventBus from "@/services/eventBus";

export default {
  name: "StepThreeForm",
  components: {AddOnsCard},
  data(){
    return{
      add_OnsData:[
        {title: 'Online Service', selected: false, sub_title:'Access to multiplayer games', price: 1, duration:'mo'},
        {title: 'Larger Storage', selected: false, sub_title: 'Extra 1TB of cloud storage',  price: 2, duration:'mo'},
        {title: 'Customizable Profile', selected:false, sub_title:'Custom theme on your profile',  price: 2, duration:'mo'},
      ],
    }
  },
  computed:{
    ...mapGetters('form', ['getSelectedAddOns', 'getPlanDetails']),
    ...mapState('form', ['selectedAddOns']),
    getData(){
      let newData = []
      if(this.getPlanDetails.duration === 'yr'){
        this.add_OnsData.map(item => {
          item.duration = 'yr'
          item.price = item.price * 10
        })
        newData = this.add_OnsData
      }else {
        newData = this.add_OnsData
      }

      return newData
    }
  },
  methods:{
    ...mapMutations('form',['setSelectedAddOns']),
    sendSelectedAddOns(val){
      this.setSelectedAddOns(val)
      let add = this.add_OnsData.find(e => e.title === val.title)
      if(!this.selectedAddOns.includes(val)){
        add.selected = false
      }else{
        add.selected = true
      }
      // this.add_OnsData.splice(this.add_OnsData.findIndex(e => e.title === add.title), 1, add)
    },
    handleNext(){
      let step = this.$route.params.step
      let newStep = parseInt(step)
      if(step < 4){
        this.$router.push({params: {step: `${newStep + 1}`}})
      }
    },

  },
  mounted() {
    // adding eventBus listener
    eventBus.$on('Pick', () => {
      this.handleNext()

    }),
    eventBus.$on('clearPlans', () => {
      this.add_OnsData.map(item => {
        item.selected = false
      })
      this.setSelectedAddOns({})
    })

  },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('Pick')
    eventBus.$off('clearPlans')

  }

}
</script>

<style scoped>

</style>
