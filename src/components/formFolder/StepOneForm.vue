<template>
  <div style="height: 330px">
        <div v-for="(item, i) in fields" :key="i" class="tw-mb-5">

          <div class="tw-flex tw-items-center tw-justify-between tw-mb-1">
            <span class="text__title">{{item.title}}</span>
            <div v-if="item.error" class="px-2">
              <v-icon size="14" color="red">mdi-alert-circle-outline</v-icon>
              <span class="error--text err ml-1">{{ item.error }}</span>
            </div>
          </div>
          <FormTextField
              :placeholder="item.placeholder"
              v-model="item.value" @input="changeInput"
              @value="changeValue($event, item.type)"
              :item="item"
          />
        </div>
  </div>
</template>

<script>
import FormTextField from "@/components/reusables/FormTextField";
import eventBus from "@/services/eventBus";
export default {
  name: "StepOneForm",
  components: {FormTextField},
  data(){
    return{
      fields:[
        {title: 'Name', value: '', error: '', type: 'name', placeholder: 'e.g Stephen King'},
        {title: 'Email Address', value: '', error: '', type:'email', placeholder: 'e.g stephenking@lorem.com'},
        {title: 'Phone Number', value: '', error: '', type:'number', placeholder: 'e.g +1 234 567'},
      ]
    }
  },
  methods:{
    validateEmail(email){
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(email.match(validRegex)){
        return true;
      }else{ return false}
    },
    clearError(){
      this.fields.forEach(item => {
        if(item.value !== '' ){
          item.error = ''
        }
      })
    },
    changeValue(){
      this.clearError()
    },
    checkValue() {
      return this.fields.some(field => {
        return field.value === '' || field.error
      })
    },
    changeInput(e){
      console.log(e)
    },
    handleRegister(){
      this.fields.map(item => {
        if(item.value === ''){
          item.error = 'This field is required'
        }else if(item.type === 'email' && !this.validateEmail(item.value)) {
          item.error = 'valid email'
        }
      })
      if(this.checkValue()){
        return
      }else {

        let step = this.$route.params.step
        let newStep = parseInt(step)
        if(step < 4){
          this.$router.push({params: {step: `${newStep + 1}`}})
        }
      }

    }
  },
  mounted() {
    // adding eventBus listener
    eventBus.$on('Personal', () => {
      this.handleRegister()

    })
  },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('Personal')
  }

}
</script>

<style scoped>
.text__title{
  font-weight: normal;
  color: #02295A;
  letter-spacing: -0.6px;
}
.error--text{
  color: #ED3548;
  font-size: 14px;
  font-weight: 500;
}
</style>
