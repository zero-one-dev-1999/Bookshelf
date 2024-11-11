import { toast } from 'react-toastify'

export const toastSuccessAction = (msg: string) => {
	toast.success(msg, { theme: 'colored' })
}

export const toastErrorAction = (msg: string) => {
	toast.error(msg, { theme: 'colored' })
}
