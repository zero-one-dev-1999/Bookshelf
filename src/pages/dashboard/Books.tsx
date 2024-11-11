import useSelector from '@/hooks/useSelector'
import { IBook } from '@/store/books/reducer'
import { Box, Grid2 } from '@mui/material'
import { useMemo } from 'react'
import Book from './Book'
import NoData from './NoData'
import Loader from '@/components/loader'

const Books = () => {
	const { data, loading } = useSelector(({ Books: s }) => ({
		data: s.data,
		loading: s.loadings.data,
	}))

	const renderBooks = useMemo(
		() =>
			data.map((book: IBook, index: number) => (
				<Grid2 size={{ xs: 12, sm: 6, lg: 4, xl: 3 }} key={index}>
					<Book {...book} />
				</Grid2>
			)),
		[data],
	)

	return (
		<Box sx={{px: 0.5}}>
			<Loader loading={loading} />
			<Grid2 container spacing={3}>
				{data?.length ? (
					renderBooks
				) : (
					<Grid2 size={12}>
						<NoData />
					</Grid2>
				)}
			</Grid2>
		</Box>
	)
}

export default Books
