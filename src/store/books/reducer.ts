/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'

interface IBook {
	book: {
		author: string
		cover: string
		id: number
		isbn: string
		pages: number
		published: number
		title: string
	}
	status: number
}

interface IState {
	data: IBook[]
	loadings: { form: boolean; data: boolean }
	form: { values: null | any; isUpdate: boolean; isOpen: boolean }
	searchModal: {
		value: string
		isOpen: false
		data: IBook['book'][]
	}
}

const initialState: IState = {
	data: [],
	loadings: {
		form: false,
		data: false,
	},
	form: {
		values: null,
		isUpdate: false,
		isOpen: false,
	},
	searchModal: {
		value: '',
		isOpen: false,
		data: [],
	},
}

const { actions, reducer } = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setData(state, { payload }) {
			state.data = payload
		},
		updateData(state, { payload }) {
			state.data = state.data.map((book: IBook) => {
				if (book.book.id === payload.book.id) {
					return payload
				}
				return book
			})
		},
		setSearchModalData(state, { payload }) {
			state.searchModal.data = payload
		},
		setSearchModalValue(state, { payload }) {
			state.searchModal.value = payload
		},
		setSearchModalIsOpen(state, { payload }) {
			state.searchModal.isOpen = payload
		},
		resetSearchModal(state) {
			state.searchModal = initialState.searchModal
		},
		setDataLoading(state, { payload }) {
			state.loadings.data = payload
		},
		setFormLoading(state, { payload }) {
			state.loadings.form = payload
		},
		setFormIsUpdate(state, { payload }) {
			state.form.isUpdate = payload
		},
		setFormIsOpen(state, { payload }) {
			state.form.isOpen = payload
		},
		setFormValues(state, { payload }) {
			state.form.values = payload
		},
		resetForm(state) {
			state.form = initialState.form
		},
	},
})

export { actions, reducer as default, type IBook }
