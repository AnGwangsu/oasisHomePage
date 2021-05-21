import Landing from '@/components/web/common/Landing'
import Benefit from '@/components/web/creator/Benefit'
import Partners from '@/components/web/partners/Partners'
import BrandChennel from '@/components/web/business/BrandChennel'
import Work from '@/components/web/work/Work'
import List from '@/components/web/creator/List'

export default [
    {
        path:'/',
        name:'Landing',
        component:Landing
    },
    {
        path:'/creator/benefit',
        name:'Benefit',
        component:Benefit
    },
    {
        path:'/partners',
        name:'Partners',
        component:Partners
    },
    {
        path:'/business/brandChennel',
        name:'BrandChennel',
        component:BrandChennel
    },
    {
        path:'/work',
        name:'Work',
        component:Work
    },
    {
        path:'/creator/list',
        name:'List',
        component:List
    }
]