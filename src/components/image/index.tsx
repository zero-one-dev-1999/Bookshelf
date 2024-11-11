 
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Box, SxProps } from '@mui/material'
import { forwardRef } from 'react'

const Image = forwardRef(({ sx, src, ...other }: { sx?: SxProps, src: string }, ref) => {
	const content = (
		<Box
			{...other}
			src={src}
			sx={{ width: 1, height: 1, objectFit: 'cover' }}
			component={LazyLoadImage}
			wrapperClassName='wrapper'
			effect='blur'
		/>
	)

	return (
		<Box
			ref={ref}
			component='span'
			sx={{
				color: 'red',
				lineHeight: 1,
				display: 'block',
				overflow: 'hidden',
				position: 'relative',
				'& .wrapper': {
					width: 1,
					height: 1,
					backgroundSize: 'cover !important',
				},
				...sx,
			}}
		>
			{content}
		</Box>
	)
})

export default Image
