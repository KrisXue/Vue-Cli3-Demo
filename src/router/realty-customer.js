import Customer from '@/pages/realty-manage/CustomerManage'
import VisitorList from '@/pages/realty-manage/CustomerManage/visitor/list'
import CustomerList from '@/pages/realty-manage/CustomerManage/customer/list'
import CustomerGroupList from '@/pages/realty-manage/CustomerManage/customerGroup/list'

export default {
    path: '/customer',
    component: Customer,
    name: 'customer',
    meta: {
        name: '客户管理',
        icon: 'user'
    },
    children: [
        {
            path: '/visitorList',
            name: 'visitorList',
            component: VisitorList,
            meta: {
                name: '来客管理'
            }
        },
        {
            path: '/customerList',
            name: 'customerList',
            component: CustomerList,
            meta: {
                name: '有效客户'
            }
        },
        {
            path: '/customerGroupList',
            name: 'customerGroupList',
            component: CustomerGroupList,
            meta: {
                name: '客户库'
            }
        }
    ]
}
