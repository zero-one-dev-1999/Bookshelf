import { Button, Stack } from '@mui/material'
import useDispatch from '@/hooks/useDispatch'
import { booksActions } from '@/store/actions'

const Header = () => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(booksActions.setFormIsOpen(true))
	}

	const handleSearch = () => {
		dispatch(booksActions.setSearchModalIsOpen(true))
	}

	return (
		<Stack
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'flex-end',
				gap: '16px'
			}}
		>
			<Button variant='contained' color='primary' onClick={handleSearch}>
				Search
			</Button>
			<Button variant='contained' color='primary' onClick={handleClick}>
				Add book
			</Button>
		</Stack>
	)
}

export default Header
