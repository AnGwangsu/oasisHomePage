import MobileHome from '@/components/mobile/common/Main'
import Business from '@/components/mobile/service/Business'
import Creator from '@/components/mobile/service/Creator'
import Work from '@/components/mobile/service/Work'


export default [
    {
        path:'/m',
        name:'MobileHome',
        component:MobileHome
    },
    {
        path:'/m/business',
        name:'Business',
        component:Business
    },
    {
        path:"/m/creator",
        name:'Creator',
        component:Creator
    },
    {
        path:'/m/work',
        name:'Work',
        component:Work
    }
]