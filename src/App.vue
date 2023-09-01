<template>
  <v-app data>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  beforeCreate() {
    this.$router.push({name:'form',params: {step: '1'}})
  }
};
</script>

<style lang="scss">
#app{
  font-family: 'Ubuntu', sans-serif !important;
  background-color: #EEF4FB;
}
</style>

