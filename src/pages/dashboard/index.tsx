/* eslint-disable react-hooks/exhaustive-deps */
import { Divider } from '@mui/material'
import Header from './Header'
import Books from './Books'
import ModalForm from './Form'
import SearchModal from './SearchModal'
import { useLayoutEffect } from 'react'
import { booksFetchDataAction } from '@/store/actions'
import useDispatch from '@/hooks/useDispatch'

const Dashboard = () => {
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		dispatch(booksFetchDataAction())
	}, [])

	return (
		<>
			<Header />

			<Divider sx={{ my: 2 }} />

			<Books />

			<ModalForm />
			<SearchModal />
		</>
	)
}

export default Dashboard
