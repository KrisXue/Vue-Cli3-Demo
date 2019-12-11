import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import router from '@/router/index'
//  reset CSS
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

import axios from '@/utils/httpConfig'
import '@/icons'
import i18n from '@/i18n/i18n'

Vue.prototype.$http = axios
// if (
//     window.sessionStorage.getItem('theme') !== 'null' &&
//     window.sessionStorage.getItem('theme') !== null
// ) {
//     const theme = window.sessionStorage.getItem('theme')
//     console.log('theme>>', theme)
//     store.dispatch('ChangeTheme', theme)
// } else {
//     const theme = GLOBAL.defaultTheme
//     console.log('theme>>', theme)
//     store.dispatch('ChangeTheme', theme)
// }


Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (!store.state.UserToken) {
        if (
            to.matched.length > 0 &&
            !to.matched.some(record => record.meta.requiresAuth)
        ) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else if (!store.state.permission.permissionList) {
        store.dispatch('permission/FETCH_PERMISSION').then(() => {
            next({ path: to.path })
        })
    } else if (to.path !== '/login') {
        next()
    } else {
        next(from.fullPath)
    }
})

router.afterEach((to, from, next) => {
    const routerList = to.matched
    store.commit('setCrumbList', routerList)
    store.commit('permission/SET_CURRENT_MENU', to.name)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})
