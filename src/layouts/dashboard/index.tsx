import { DASHBOARD_PAGE } from '@/helpers/pages'
import useDispatch from '@/hooks/useDispatch'
import useSelector from '@/hooks/useSelector'
import { appActions } from '@/store/actions'
import {
	Avatar,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const dispatch = useDispatch()

	const user = useSelector(s => s.App.user)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleLogOut = () => {
		dispatch(appActions.reset())
		handleClose()
	}

	return (
		<Stack sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			<Stack
				sx={{
					height: '80px',
					width: '100%',
					boxShadow: '0 4px 4px -2px rgba(0, 0, 0, 0.2)',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'row',
					justifyContent: 'space-between',
					px: { xs: 4, sm: 12, md: 20, lg: 30 },
					backgroundColor: '#fff',
				}}
			>
				<Link
					to={DASHBOARD_PAGE}
					style={{ textDecoration: 'none', color: '#282828' }}
				>
					<Typography variant='h4' sx={{ fontWeight: 'bold' }}>
						Bookshelf
					</Typography>
				</Link>
				<IconButton
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<Avatar
						alt='Remy Sharp'
						sx={{ cursor: 'pointer', width: 50, height: 50 }}
						src='/boy.jpg'
					/>
				</IconButton>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					sx={{
						'& .MuiPaper-root': {
							transform: 'translateX(-100%)',
						},
					}}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem
						disableTouchRipple
						sx={{
							'&:hover': {
								backgroundColor: 'transparent',
							},
						}}
					>
						{user?.name}
					</MenuItem>
					<MenuItem
						disableTouchRipple
						sx={{
							'&:hover': {
								backgroundColor: 'transparent',
							},
						}}
					>
						{user?.email}
					</MenuItem>
					<MenuItem onClick={handleLogOut} sx={{ color: 'red' }}>
						Logout
					</MenuItem>
				</Menu>
			</Stack>
			<Stack
				sx={{
					px: { xs: 4, sm: 12, md: 20, lg: 30 },
					width: '100%',
					minHeight: `calc(100vh - 80px)`,
					py: 3,
				}}
			>
				<Outlet />
			</Stack>
		</Stack>
	)
}

export default DashboardLayout
