/* eslint-disable react-hooks/exhaustive-deps */
import useSelector from '@/hooks/useSelector'
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	FormControl,
	Grid2,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { debounce } from 'lodash'
import useDispatch from '@/hooks/useDispatch'
import {
	booksActions,
	booksCreateAction,
	booksSearchAction,
} from '@/store/actions'
import { IBook } from '@/store/books/reducer'
import CloseIcon from '@mui/icons-material/Close'
import NoData from './NoData'
import Loader from '@/components/loader'

const SearchModal: FC = () => {
	const inputRef = useRef<null | HTMLInputElement>(null)
	const dispatch = useDispatch()

	const { data, isOpen, value, loading } = useSelector(({ Books: s }) => ({
		data: s.searchModal.data,
		isOpen: s.searchModal.isOpen,
		value: s.searchModal.value,
		loading: s.loadings.form
	}))

	const handleClick = (isbn: string) => {
		dispatch(booksCreateAction({ isbn }))
	}

	const handleClose = () => {
		dispatch(booksActions.resetSearchModal())
	}

	const delayFunction = useCallback(
		debounce((value: string) => {
			dispatch(booksSearchAction(value))
		}, 500),
		[],
	)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(booksActions.setSearchModalValue(e.target.value))
		delayFunction(e.target.value)
	}

	const renderedData = useMemo(
		() =>
			data.map((book: IBook['book'], index: number) => (
				<Grid2 size={3} key={index}>
					<Card
						sx={{
							width: '100%',
							height: '100%',
						}}
					>
						<CardMedia
							sx={{ height: 160 }}
							image={book.cover}
							title='green iguana'
						/>
						<CardContent
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								alignItems: 'flex-start',
								height: 'calc(100% - 160px)',
							}}
						>
							<Stack>
								<Typography gutterBottom variant='h5' component='div'>
									{book.title}
								</Typography>
								<Typography
									variant='body2'
									sx={{ color: 'text.secondary' }}
								>
									{book.author}
								</Typography>
								<Typography
									variant='body2'
									sx={{ color: 'text.secondary' }}
								>
									{book.pages} pages, published {book.published}
								</Typography>
							</Stack>
							<Stack
								sx={{
									width: '100%',
									mb: -2,
									mt: 1,
								}}
							>
								<Button
									color='success'
									variant='contained'
									onClick={() => handleClick(book.isbn)}
								>
									Add
								</Button>
							</Stack>
						</CardContent>
					</Card>
				</Grid2>
			)),
		[data],
	)

	useEffect(() => {
		if (isOpen) {
			inputRef.current?.focus()
		}
	}, [isOpen])
	return (
		<Dialog fullWidth maxWidth='lg' open={isOpen}>
			<Loader loading={loading} />
			<DialogTitle>
				<Stack
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography variant='h6'>Search book</Typography>
					<IconButton color='error' onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</Stack>
			</DialogTitle>
			<Divider />
			<DialogContent>
				<FormControl fullWidth>
					<TextField
						size='small'
						value={value}
						onChange={handleChange}
						ref={inputRef}
						placeholder='Search'
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</FormControl>
				<Grid2 container spacing={3} sx={{ mt: 3 }}>
					{data?.length ? (
						renderedData
					) : (
						<Grid2 size={12}>
							<NoData />
						</Grid2>
					)}
				</Grid2>
			</DialogContent>
		</Dialog>
	)
}

export default SearchModal
