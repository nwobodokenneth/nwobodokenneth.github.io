import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const initialState = {
   planDetails:{},
   selectedAddOns:[]

}

export default {
   namespaced: true,
   state: initialState,
   mutations,
   actions,
   getters
};
