import { createSlice } from '@reduxjs/toolkit'

interface IApp {
	user: null | {
		name: string
		email: string
		key: string
		secret: string
	}
	isAuth: boolean
}

const initialState: IApp = {
	user: null,
	isAuth: false,
}

const { actions, reducer } = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setUser(state, { payload }) {
			state.user = payload
		},
		setAuth(state, { payload }) {
			state.isAuth = payload
		},

		reset(state) {
			state.user = initialState.user
			state.isAuth = initialState.isAuth
		},
	},
})

export { actions, reducer as default }
