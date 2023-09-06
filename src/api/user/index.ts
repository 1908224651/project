import request from '../../utils/request'
import type { loginForm } from './type'

enum API {
	LOGIN_URL = '/user/login',
	USERINFO_URL = '/user/info'
}

export const reqLogin = (data:loginForm) => request.post(API.LOGIN_URL, data)
export const reqUserInfo = () => request.get(API.USERINFO_URL)
