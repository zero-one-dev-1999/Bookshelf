import Image from '@/components/image'
import { Stack, Typography } from '@mui/material'

const NoData = () => {
	return (
		<Stack
			alignItems='center'
			justifyContent='center'
			sx={{
				height: 1,
				textAlign: 'center',
				p: theme => theme.spacing(8, 2),
			}}
		>
			<Image sx={{ my: 2, height: 250 }} src='/illustration_empty_content.svg' />
			<Typography variant='h4' sx={{ mt: 4 }} gutterBottom>
				No data
			</Typography>
		</Stack>
	)
}

export default NoData
