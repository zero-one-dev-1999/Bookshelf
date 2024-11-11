import { all, spawn } from 'redux-saga/effects'
import appSaga from './app/saga'
import booksSaga from './books/saga'

function* rootSaga() {
    yield all([
        spawn(appSaga),
        spawn(booksSaga),
    ])
}

export default rootSaga
