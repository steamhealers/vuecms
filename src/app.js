import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import app from './app.vue'
import '../statics/css/mui.min.css'
import '../statics/fonts/mui.ttf'

axios.defaults.baseURL='http://60.205.213.93:8080/api/'
Vue.prototype.$http=axios


// mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

//注册Mint的全部组件
Vue.use(Mint);

// router
Vue.use(VueRouter)

import home from './components/home/home.vue'
    import news from './components/home/News/news.vue'
    import share from './components/home/Share/share.vue'
    import buy from './components/home/buy/Buy.vue'
    import contact from './components/home/Contact/contact.vue'
    import videos from './components/home/Videos/videos.vue'
    import feedback from './components/home/Feedback/feedback.vue'
import member from './components/member/member.vue'
import cart from './components/cart/cart.vue'
import search from './components/search/search.vue'

let router = new VueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {path:'/',redirect:'/home'},
        {path : '/home', component:home},
        {path : '/member', component:member},
        {path : '/search', component:search},
        {path : '/cart', component:cart},
        {path : '/news', component:news},
        {path : '/share', component:share},
        {path : '/buy', component:buy},
        {path : '/contact', component:contact},
        {path : '/videos', component:videos},
        {path : '/feedback', component:feedback}
    ]
})




// Vue
let vm = new Vue({
    el:'#app',
    router,
    render: c => c(app)
})