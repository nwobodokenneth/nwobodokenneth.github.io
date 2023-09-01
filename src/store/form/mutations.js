export default {
   setPlanDetails:(state, data) => {
      state.planDetails = data
   },
   setSelectedAddOns:(state, data) => {
      if(Object.keys(data).length !== 0){
         if(state.selectedAddOns.includes(data)){
            state.selectedAddOns = state.selectedAddOns.filter(item => item !== data)
         }else{
            state.selectedAddOns.unshift(data)
         }
      }else {
         console.log('clear')
         state.selectedAddOns = []
         console.log(state.selectedAddOns)
      }

   }
}
