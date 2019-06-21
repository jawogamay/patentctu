

require('./bootstrap');

window.Vue = require('vue');
import Home from './components/Home'
import Track from './components/Track'
import Users from './components/Users'
import VueRouter from 'vue-router'


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(VueRouter)
let routes = [
    {path:'/home',component:Home},
    {path:'/track',component:Track},
    {path:'/users',component:Users}
]

const router = new VueRouter({
    mode:'history',
    routes  
})
const app = new Vue({
    el: '#app',
    router
});
