import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import messages from './langs'
// import storeFunc from '@/store/index.js'

Vue.use(VueI18n)
console.log('locale', locale)
const i18n = new VueI18n({
    locale: window.g.project_default_lang,
    messages
})
locale.i18n((key, value) => i18n.t(key, value))
export default i18n
