import { setTheme, defaultTheme } from '@/assets/theme/setTheme.js'

const theme = {
    state: {
        theme: defaultTheme
    },
    mutations: {
        SET_THEME: (state, theme) => {
            state.theme = theme
        }
    },

    actions: {
        // 改变用户主题
        ChangeTheme({ commit, state }, theme) {
            commit('SET_THEME', theme)
            setTheme(theme)
            // 将用户改变的主题数据，存到缓存的theme里
            sessionStorage.setItem('theme', sessionStorage.getItem('theme'))
        }
    }
}

export default theme
