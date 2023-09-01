<template>
  <div class="successThanks">
    <div class="tw-flex tw-items-center tw-h-full">
      <div class="d-flex justify-center align-center flex-column">
        <v-avatar size="50">
          <v-img :src="thankImage"/>
        </v-avatar>
        <div class="personal">Thank you</div>
        <div class="select__price tw-text-left">{{ thankYouMessage }}</div>

      </div>
    </div>
  </div>

</template>

<script>
import thankYouIcon from "@/assets/images/icon-thank-you.svg"

export default {
  name: "StepFiveForm",
  data(){
    return{
      thankImage: thankYouIcon,
      thankYouMessage: 'Thanks for confirming your subscription!' +
          ' We hope you have fun using our platform. If you ever need support,' +
          ' please feel free to to email us at support@loremgaming.com'
    }
  }
}
</script>

<style scoped>
.successThanks{
  width: 500px;
  height: 500px;
}
@media (max-width: 768px){
  .successThanks{
    width: 100%;

  }
}
</style>
