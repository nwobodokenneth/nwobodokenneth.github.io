<template>
  <div>
    <div
        class="tw-flex tw-justify-between tw-items-center tw-mb-4 md:tw-px-5 tw-px-3 title"
        :class="[selected && selected.includes(item) ? 'selected' : 'select']"
        @click="sendAddOns(item)"
    >
      <div class="tw-flex md:tw-gap-3 tw-gap-1 tw-items-center">
        <v-checkbox
            :value="item.selected"
            color="#473DFF"
        />
        <div>
          <div class="select__title">{{item?.title}}</div>
          <div class="select__price tw--mt-2 md:tw--mt-0">{{item?.sub_title}}</div>
        </div>
      </div>
      <div class="add_ons_price">+${{item?.price}}/{{item?.duration}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddOnsCard",
  props: {
    item: {
      type: Object,
    },
    selected:{
      type: Array
    }
  },
  methods:{
    sendAddOns(val){
      this.$emit('add-ons', val)
    }
  }
}
</script>

<style scoped>
.title{
  width: 30vw;
}
@media (max-width: 768px){
  .title{
    width: 100%;
  }
}
</style>
