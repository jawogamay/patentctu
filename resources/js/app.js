

require('./bootstrap');

window.Vue = require('vue');
import Home from './components/Home'
import Track from './components/Track'
import Users from './components/Users'
import Waiting from './components/Waiting'
import Approved from './components/Approved'
import Accepted from './components/Accepted'
import Recieved from './components/Recieved'
import Submission from './components/Submission'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(VueRouter)
let routes = [
    {path:'/patent',component:Home},
    {path:'/track',component:Track},
    {path:'/users',component:Users},
    {path:'/waiting',component:Waiting},
    {path:'/accepted',component:Accepted},
    {path:'/approved',component:Approved},
    {path:'/recieved',component:Recieved},
    {path:'/submission',component:Submission}
]

const router = new VueRouter({
    mode:'history',
    routes  
})
const app = new Vue({
    el: '#app',
    router
});
