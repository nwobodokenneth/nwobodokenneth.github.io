<template>
  <div style="height: 100vh;   position: relative;">
    <div class="mobile__view_top">
      <FormStepper :current-step="step" :steps="stepsTitle"/>
    </div>
    <div class="tw-flex md:tw-items-center md:tw-h-full tw-justify-center tw--mt-24 md:tw--mt-0">
      <div style="background-color: white; border-radius: 8px" class="tw-p-3 md:tw-w-7/12 tw-w-11/12" >
        <FormDesktop/>
      </div>
    </div>

  </div>
</template>

<script>
import FormDesktop from "@/components/formFolder/FormDesktop";
import FormStepper from "@/components/reusables/FormStepper";
export default {
  name: "FormPage",
  components: {FormStepper, FormDesktop},
  data(){
    return{
      // colors:[
      //   {name:'Marine Blue', color:'#02295A'},
      //   {name:'Purplish Blue', color:'#473DFF'},
      //   {name:'Pastel Blue', color:'#ADBEFF'},
      //   {name:'Light Blue', color:'#BFE2FD'},
      //   {name:'Strawberry Red', color:'#ED3548'},
      //   {name:'Cool gray', color:'#9699AB'},
      //   {name:'Light gray', color:'#D6D9E6'},
      //   {name:'Magnolia', color:'#F0F6FF'},
      //   {name:'Alabaster', color:'#FAFBFF'},
      // ]
      step: null,
      stepsTitle:[
        { title: 'STEP 1', },
        { title: 'STEP 2', },
        { title: 'STEP 3', },
        { title: 'STEP 4',},
      ],
    }
  },
  watch: {
    '$route.params.step': {
      handler: function(search) {
        this.step = search
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.step = this.$route.params.step
  }
}
</script>

<style scoped>
.mobile__view_top{
  background-image: url("../../assets/images/bg-sidebar-mobile.svg");
  image-resolution: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 2px;
  height: 215px;
  width: 100%;
}
</style>
