import { DASHBOARD_PAGE } from '@/helpers/pages'
import { useAuthContext } from './auth-context'
import { Navigate } from 'react-router'
import PropTypes from 'prop-types'
import { FC, PropsWithChildren } from 'react'

const GuestGuard:FC<PropsWithChildren> = ({ children }) => {
	const {  isAuthenticated } = useAuthContext()

	if (isAuthenticated) {
		return <Navigate to={DASHBOARD_PAGE} />
	}

	return <>{children}</>
}

GuestGuard.propTypes = {
	children: PropTypes.node,
}

export default GuestGuard
