import { IBook } from '@/store/books/reducer'
import {
	Card,
	CardContent,
	CardMedia,
	Chip,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Typography,
} from '@mui/material'
import { FC, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useConfirm } from 'material-ui-confirm'
import useDispatch from '@/hooks/useDispatch'
import { booksDeleteAction, booksUpdateAction } from '@/store/actions'

const statusList = [
	{ value: 0, label: 'New' },
	{ value: 1, label: 'Reading' },
	{ value: 2, label: 'Finished' },
]

const Book: FC<IBook> = book => {
	const confirm = useConfirm()
	const dispatch = useDispatch()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleUpdate = (status: number) => {
		dispatch(booksUpdateAction({ book: book.book, status }))
		handleClose()
	}

	const handleDelete = () => {
		confirm({
			title: 'Are you sure',
			cancellationText: 'Cancel',
			confirmationText: 'Delete',
			titleProps: { textAlign: 'center' },
			cancellationButtonProps: { variant: 'outlined' },
			confirmationButtonProps: { color: 'error', variant: 'contained' },
		}).then(() => {
			dispatch(booksDeleteAction(book.book.id))
		})
	}

	return (
		<Card
			sx={{
				width: '100%',
				height: '100%',
			}}
		>
			<CardMedia sx={{ height: 200 }} image={book.book.cover} />
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					height: 'calc(100% - 200px)',
				}}
			>
				<Stack>
					<Typography gutterBottom variant='h5' component='div'>
						{book.book.title}
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }}>
						{book.book.author}
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }}>
						{book.book.pages} pages, published {book.book.published}
					</Typography>
				</Stack>
				<Stack
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						mb: -2,
						mt: 1,
					}}
				>
					<Chip
						label={
							statusList?.find(item => item.value === book.status)?.label
						}
						color={
							book.status === 0
								? 'warning'
								: book.status === 1
								? 'primary'
								: 'success'
						}
					/>
					<Stack
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-end',
						}}
					>
						<IconButton
							color='success'
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						>
							<EditIcon />
						</IconButton>
						<Menu
							id='basic-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							{statusList.map(item => (
								<MenuItem
									key={item.value}
									onClick={() => {
										if (book.status !== item.value) {
											handleUpdate(item.value)
										}
									}}
								>
									{item.label}
								</MenuItem>
							))}
						</Menu>
						<IconButton
							color='error'
							sx={{ mr: -1 }}
							onClick={handleDelete}
						>
							<DeleteIcon />
						</IconButton>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default Book
