/* eslint-disable @typescript-eslint/no-explicit-any */
import { bgBlur } from '@/utils/css-styles'
import { Stack, useTheme, LinearProgress, SxProps, Theme } from '@mui/material'

const Loader = ({
	sx,
	loading = false,
}: {
	sx?: SxProps<Theme>
	loading: boolean
}) => {
	const theme = useTheme()

	return (
		loading && (
			<Stack
				alignItems='center'
				justifyContent='center'
				sx={{
					top: 0,
					left: 0,
					width: 1,
					height: 1,
					zIndex: 9,
					position: 'absolute',
					...bgBlur({ color: theme.palette.background.paper }),
					...sx,
				}}
			>
				<LinearProgress color='inherit' sx={{ width: 1, maxWidth: 320 }} />
			</Stack>
		)
	)
}

export default Loader
