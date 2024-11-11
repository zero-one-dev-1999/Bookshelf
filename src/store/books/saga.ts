import { put, call, takeLeading, takeLatest } from 'redux-saga/effects'
import { booksActions, booksFetchDataAction } from './actions'
import api from '@/helpers/api'
import { BOOKS_URL } from '@/helpers/urls'
import {
	BOOKS_CREATE,
	BOOKS_DELETE,
	BOOKS_FETCH_DATA,
	BOOKS_SEARCH,
	BOOKS_UPDATE,
} from './actionTypes'
import { IBook } from './reducer'

function* booksFetchSaga() {
	try {
		yield put(booksActions.setDataLoading(true))
		const { data: response } = yield call(api.get, BOOKS_URL)

		if (response.isOk && response.data?.length) {
			yield put(booksActions.setData(response.data))
		}
	} finally {
		yield put(booksActions.setDataLoading(false))
	}
}

function* booksSearchSaga({ payload }: { payload: string }) {
	try {
		yield put(booksActions.setFormLoading(true))
		const { data: response } = yield call(api.get, BOOKS_URL + '/' + payload)

		if (response.isOk && response.data?.length) {
			yield put(booksActions.setSearchModalData(response.data))
		}
	} finally {
		yield put(booksActions.setFormLoading(false))
	}
}

function* booksCreateSaga({ payload }: { payload: { isbn: string } }) {
	try {
		yield put(booksActions.setFormLoading(true))
		const { data: response } = yield call(api.post, BOOKS_URL, payload)

		if (response.isOk) {
			yield put(booksActions.resetForm())
			yield put(booksFetchDataAction())
		}
	} finally {
		yield put(booksActions.setFormLoading(false))
	}
}

function* booksDeleteSaga({ payload }: { payload: number }) {
	try {
		yield put(booksActions.setDataLoading(true))
		const { data: response } = yield call(
			api.delete,
			BOOKS_URL + '/' + payload,
		)

		if (response.isOk) {
			yield put(booksActions.setData(response.data))
		}
	} finally {
		yield put(booksActions.setDataLoading(false))
	}
}

function* booksUpdateSaga({ payload }: { payload: IBook }) {
	try {
		yield put(booksActions.setDataLoading(true))

		const { data: response } = yield call(
			api.patch,
			BOOKS_URL + '/' + payload.book.id,
			payload,
		)

		if (response.isOk) {
			yield put(booksActions.updateData(response.data))
		}
	} finally {
		yield put(booksActions.setDataLoading(false))
	}
}

function* booksSaga() {
	yield takeLatest(BOOKS_FETCH_DATA, booksFetchSaga)
	yield takeLeading(BOOKS_SEARCH, booksSearchSaga)
	yield takeLeading(BOOKS_CREATE, booksCreateSaga)
	yield takeLeading(BOOKS_DELETE, booksDeleteSaga)
	yield takeLeading(BOOKS_UPDATE, booksUpdateSaga)
}

export default booksSaga
