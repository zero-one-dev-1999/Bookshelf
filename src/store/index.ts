import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import reducers from './reducers'
import rootSaga from './sagas'
import { configureStore } from '@reduxjs/toolkit'



const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(
	{
		storage,
		version: 5,
		key: 'root',
		whitelist: ['App'],
		transforms: [

			encryptTransform({
				secretKey: 'QuYu1N1fZWuN3SFJ99d8l1CKyBFKs2+9VtBEjSWc0URLLcmoGnuF1KW/PHC/xgse',
			}),
		],
	},
	reducers,
)

const store = configureStore({
	reducer: persistedReducer,
	devTools: import.meta.env.DEV,
	middleware: gdm => gdm({ serializableCheck: false }).concat([sagaMiddleware]),

})

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof reducers>

export { store, persistor }
