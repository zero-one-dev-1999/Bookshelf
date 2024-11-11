import {
	BOOKS_CREATE,
	BOOKS_DELETE,
	BOOKS_FETCH_DATA,
	BOOKS_SEARCH,
	BOOKS_UPDATE,
} from './actionTypes'
import { actions as booksActions, IBook } from './reducer'

const booksFetchDataAction = () => ({
	type: BOOKS_FETCH_DATA,
})

const booksSearchAction = (payload: string) => ({
	type: BOOKS_SEARCH,
	payload,
})

const booksCreateAction = (payload: { isbn: string }) => ({
	type: BOOKS_CREATE,
	payload,
})

const booksDeleteAction = (payload: number) => ({
	type: BOOKS_DELETE,
	payload,
})

const booksUpdateAction = (payload: IBook) => ({
	type: BOOKS_UPDATE,
	payload,
})

export {
	booksActions,
	booksFetchDataAction,
	booksCreateAction,
	booksDeleteAction,
	booksUpdateAction,
	booksSearchAction,
}
