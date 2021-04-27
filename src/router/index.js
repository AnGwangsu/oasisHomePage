import Vue from 'vue'
import Router from 'vue-router'
import common from './common/index'
import service from './service/index'


Vue.use(Router)



export default new Router({
    mode:'history',
    routes:[
        ...common,
        ...service
    ]
})