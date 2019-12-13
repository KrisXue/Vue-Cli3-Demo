import LOGIN from '@/pages/login/login.vue'
import NotFound from '@/pages/errorPage/404.vue'
import Forbidden from '@/pages/errorPage/403.vue'
import Layout from '@/pages/layout/index'
import realty from './realty-customer'
import realtyDashboard from './realty-dashboard'

export default [
    {
        path: '/login',
        component: LOGIN,
        name: 'login'
    },
    {
        path: '/403',
        component: Forbidden,
        name: '403'
    },
    {
        path: '*',
        component: NotFound,
        name: '404'
    },
    {
        path: '',
        component: Layout,
        children: [realtyDashboard, realty],
        name: 'layout'
    }
]
