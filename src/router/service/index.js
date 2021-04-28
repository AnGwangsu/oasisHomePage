import Benefit from '@/components/creator/Benefit'
import Partners from '@/components/partners/Partners'
import BrandChennel from '@/components/business/BrandChennel'
import Work from '@/components/work/Work'

export default [
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
    }
]