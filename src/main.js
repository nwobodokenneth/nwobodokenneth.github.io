import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/css/tailwind.css"
import "./assets/css/global.scss"
import vuetify from './plugins/vuetify'
import { ValidationObserver, ValidationProvider, extend, localize, setInteractionMode } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';


Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

setInteractionMode('lazy')

localize("en", en);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
