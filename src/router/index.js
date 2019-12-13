import Vue from 'vue'
import Router from 'vue-router'

import common from './common'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/Vue-Cli3-Demo/',
    routes: [...common]
})
