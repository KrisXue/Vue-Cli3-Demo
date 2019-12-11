import axios from '@/utils/httpConfig'

// eslint-disable-next-line import/prefer-default-export
export function login(data) {
    return axios.post('/user/login', data)
}
