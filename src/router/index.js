import Vue from 'vue'
import Router from 'vue-router'
import web from './web/index'
import mobile from './mobile/index'

// import webRoot from '../components/web/common/Landing'
// import mobileRoot from '../components/mobile/common/Main'

Vue.use(Router)

// const routes = [
//     {
//         path:'/',
//         name:'Root',
//         components:{
//             default:webRoot,
//             mobile:mobileRoot
//         }
//     }
// ]

export default new Router({
    scrollBehavior(){
        return{x:0,y:0}
    },
    mode:'history',
    routes:[
        ...web,
        ...mobile
    ]
})