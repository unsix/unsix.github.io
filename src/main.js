import Vue from 'vue'
import { Button,Tabs} from 'ant-design-vue';
import App from './App'

Vue.component(Button.name, Button)
Vue.component(Tabs.name, Tabs)
Vue.config.productionTip = false
Vue.use(Tabs)
new Vue({
  render: h => h(App)
}).$mount("#app");