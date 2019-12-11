/* 订单管理 */
import Order from '@/pages/order-manage'
import OrderList from '@/pages/order-manage/order-list'
import ProductManage from '@/pages/order-manage/product-manage'
import ProductionList from '@/pages/order-manage/product-manage/production-list'
import ReviewManage from '@/pages/order-manage/product-manage/review-manage'
import ReturnGoods from '@/pages/order-manage/return-goods'

/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/order',
        component: Order,
        name: 'order-manage',
        meta: {
            name: '1',
            icon: 'example'
        },
        children: [
            {
                path: '/orderlist',
                name: 'order-list',
                component: OrderList,
                meta: {
                    name: '1-1',
                    icon: 'table'
                }
            },
            {
                path: '/orderproduct',
                name: 'product-manage',
                component: ProductManage,
                meta: {
                    name: '1-2',
                    icon: 'user'
                },
                children: [
                    {
                        path: '/orderproduct',
                        name: 'product-list',
                        component: ProductionList,
                        meta: {
                            name: '1-2-1',
                            icon: 'table'
                        }
                    },
                    {
                        path: '/orderproductreview',
                        name: 'review-manage',
                        component: ReviewManage,
                        meta: {
                            name: '1-2-2',
                            icon: 'eye'
                        }
                    }
                ]
            },
            {
                path: '/returnGoods',
                name: 'return-goods',
                component: ReturnGoods,
                meta: {
                    name: '1-3',
                    icon: 'nested'
                }
            }
        ]
    }
]

export default dynamicRoutes
