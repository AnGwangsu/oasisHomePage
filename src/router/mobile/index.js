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
        name:'MobileBusiness',
        component:Business
    },
    {
        path:"/m/creator",
        name:'MobileCreator',
        component:Creator
    },
    {
        path:'/m/work',
        name:'MobileWork',
        component:Work
    }
]