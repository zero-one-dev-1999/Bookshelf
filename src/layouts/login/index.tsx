import { Box, Grid2, Stack } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid2 container spacing={2}>
				<Grid2 size={{ xs: 12, lg: 6 }} />

				<Grid2 size={{ xs: 12, lg: 6 }}>
					<Stack
						sx={{
							px: { xs: 2, md: 8, lg: 15, xl: 30 },
							py: { xs: 5, md: 12 },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							minHeight: '100vh',
						}}
					>
						<Outlet />
					</Stack>
				</Grid2>
			</Grid2>
		</Box>
	)
}

export default AuthLayout
