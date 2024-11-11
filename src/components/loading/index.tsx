import PropTypes from 'prop-types' // @mui
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

const LoadingScreen = ({ sx, ...other }) => (
	<Box
		{...other}
		sx={{
			px: 5,
			width: 1,
			flexGrow: 1,
			minHeight: 1,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			...sx,
		}}
	>
		<LinearProgress color='inherit' sx={{ width: 1, maxWidth: 360 }} />
	</Box>
)

LoadingScreen.propTypes = {
	sx: PropTypes.object,
}

export default LoadingScreen
