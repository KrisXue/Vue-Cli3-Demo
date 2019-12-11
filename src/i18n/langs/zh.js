import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// Chinese Config

const zh = {
    login: {
        projectTitle: window.g.project_title_zh || 'Vue-Cli3-Demo',
        username: '用户名',
        password: '密码',
        loginBtn: '登录'
    },
    common: {
        version: '版本'
    },
    ...zhLocale
}
export default zh
