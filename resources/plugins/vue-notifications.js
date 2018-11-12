import Vue from 'vue'
import VueNotifications from 'vue-notifications'

Vue.use(VueNotifications)

export default ({ app }, inject) => 
{
   inject('notifications', (string) => console.log('That was easy!', string))
}
