import { setTheme, defaultTheme } from '@/assets/theme/setTheme.js'

const theme = {
    state: {
        theme: defaultTheme
    },
    mutations: {
        // eslint-disable-next-line no-shadow
        SET_THEME: (state, theme) => {
            state.theme = theme
        }
    },

    actions: {
        // 改变用户主题
        // eslint-disable-next-line no-shadow
        ChangeTheme({ commit }, theme) {
            commit('SET_THEME', theme)
            setTheme(theme)
            // 将用户改变的主题数据，存到缓存的userData里
            sessionStorage.setItem('theme', JSON.stringify(theme))
            // 存到数据库（不方便mock所以省略）
        }
    }
}

export default theme
