import loginJson from './json/login.json'

// eslint-disable-next-line import/prefer-default-export
export const login = req => {
    console.log('mock>>>>>>', req)
    return loginJson
}
