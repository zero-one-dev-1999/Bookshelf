import { put, call, takeLeading } from 'redux-saga/effects'
import api from '../../helpers/api'
import { AUTH_LOGIN_URL } from '../../helpers/urls'
import { appActions } from './actions'
import { APP_AUTH_LOGIN } from './actionTypes'

interface IProps {
	payload: {
		name: string
		email: string
		key: string
		secret: string
	}
	setLoading: (val: boolean) => void
}

function* appAuthLoginSaga({ payload, setLoading }: IProps) {
	try {
		setLoading?.(true)

		const { data: response } = yield call(api.post, AUTH_LOGIN_URL, payload, {
			withCredentials: false,
		})

		if (response.isOk) {
			yield put(appActions.setUser(response.data))
			yield put(appActions.setAuth(true))
		}
	} finally {
		setLoading?.(false)
	}
}

function* appSaga() {
	yield takeLeading(APP_AUTH_LOGIN, appAuthLoginSaga)
}

export { appSaga as default, type IProps }
