<template>
  <div>
    <div class="tw-flex tw-gap-20">
      <div class="tw-hidden md:tw-block">
        <div class="desktop__side tw-pt-8 tw-flex tw-justify-center">
          <FormStepper :current-step="step" :steps="stepsTitle"/>
        </div>
      </div>

      <div>
        <div v-if="step < 5" class="personal">{{ headerText[step].title }}</div>
        <div v-if="step < 5" class="provide tw-mt-3 tw-mb-5">{{ headerText[step].sub }}</div>


        <div>
          <keep-alive>
            <component :is="currentComponent()" ></component>
          </keep-alive>
        </div>

        <div v-if="step < 5" class="tw-flex tw-justify-between">
          <div>
            <BaseButton @click="goBack" v-if="step > 1" color="#9699AB" text button-text="Go Back"/>
          </div>
          <BaseButton @click="goNext" btn-text-color="white" class="white--text" :color="step === '4' ?'#473DFF' : '#02295A'" :button-text="step === '4' ?'Confirm' : 'Next'"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import FormStepper from "@/components/reusables/FormStepper";
import BaseButton from "@/components/reusables/BaseButton";
import StepOneForm from "@/components/formFolder/StepOneForm";
import StepTwoForm from "@/components/formFolder/StepTwoForm";
import StepThreeForm from "@/components/formFolder/StepThreeForm";
import StepFourForm from "@/components/formFolder/StepFourForm";
import eventBus from "@/services/eventBus";
import StepFiveForm from "@/components/formFolder/StepFiveForm";

export default {
  name: "FormDesktop",
  components: {BaseButton, FormStepper},
  data(){
    return{
      step: null,
      stepsTitle:[
        { title: 'STEP 1', sub:'YOUR INFO'},
        { title: 'STEP 2', sub:'SELECT PLAN'},
        { title: 'STEP 3', sub:'ADD-ONS'},
        { title: 'STEP 4', sub:'SUMMARY'},
      ],
      headerText:{
        '1': {
          title:'Personal Info',
          sub:'Please provide your name, email address, and phone number'
        },
        '2': {
          title:'Select your plan',
          sub:'You have the option of monthly or early billing'
        },
        '3': {
          title:'Pick add-ons',
          sub:'Add-ons help enhance your gaming experience'
        },
        '4': {
          title:'Finishing up',
          sub:'Double check everything looks OK before confirming'
        },
      }
    }
  },
  methods:{
    currentComponent () {
      let component = undefined
      this.step = this.$route.params.step
      if (this.step === '1') {
        component = StepOneForm
      } else if(this.step === '2') {
        component = StepTwoForm
      } else if(this.step === '3') {
        component = StepThreeForm
      } else if(this.step === '4'){
        component = StepFourForm
      }
      else {
        component = StepFiveForm
      }
      return component
    },
    sendCustomEvent() {
      let emitTitle = this.headerText[this.step].title
      // sending the event
      eventBus.$emit(`${emitTitle.split(' ')[0]}`)
    },
    goNext(){
      this.sendCustomEvent()
    },
    goBack(){
      let newStep = parseInt(this.step)
        this.$router.push({params: {step: `${newStep - 1}`}})
    }
  },
  created() {
    this.currentComponent()
  },
}
</script>

<style scoped>
.desktop__side{
  background-image: url("../../assets/images/desktop_sidebar_bg.svg");
  image-resolution: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 2px;
  height: 515px;
  width: 250px;
}
.provide{
  font-weight: 400;
  font-size: 18px;
  color: #9699AB;
}
</style>
