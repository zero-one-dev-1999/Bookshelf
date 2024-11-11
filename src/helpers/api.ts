import { store } from '@/store'
import { appActions } from '@/store/actions'
import { toastErrorAction } from '@/utils/toast-messages'
import axios from 'axios'
import CryptoJS from 'crypto-js'

// baseURL: import.meta.env.VITE_API_URL,
const api = axios.create({
	baseURL: '/api',
	withCredentials: true,
	validateStatus: status => status !== 401 && status <= 500,
})

api.interceptors.request.use(config => {
	if (config.withCredentials) {
		const { App } = store.getState()

		if (App?.isAuth) {
			const method = config.method?.toUpperCase()
			const url = config.url
			const data = config.data ? JSON.stringify(config.data) : ''
			const secretKey = App?.user?.secret

			const hash = CryptoJS.MD5(
				method + '/' + url + (data || '') + secretKey,
			).toString()

			config.headers.set('Sign', hash)
			config.headers.set('Key', App?.user?.key)
		}
	}

	return config
})

api.interceptors.response.use(
	response => {
		if (!(response.data instanceof Blob)) {
			if (!response.data.isOk) {
				toastErrorAction(response.data.message)
			}
		}
		return response
	},
	error => {
		if (error.response?.status === 401) {
			store.dispatch(appActions.reset())
		}
		return Promise.reject(error)
	},
)

export { api as default }
