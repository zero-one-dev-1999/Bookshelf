import { combineReducers } from 'redux'
import App from './app/reducer'
import Books from './books/reducer'

export default combineReducers({
	App,
	Books,
})
