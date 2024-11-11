import { Stack } from '@mui/material'
import { persistor, store } from './store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { setLocale } from 'yup'
import { ConfirmProvider } from 'material-ui-confirm'
import Router from './routes'

setLocale({
	mixed: {
		required: 'This field is required',
	},
})

function App() {
	return (
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<ConfirmProvider>
						<Stack spacing={2} direction='row'>
							<Router />
						</Stack>
					</ConfirmProvider>
				</BrowserRouter>
			</PersistGate>
		</ReduxProvider>
	)
}

export default App
