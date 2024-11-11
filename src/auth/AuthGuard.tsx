import { FC, PropsWithChildren, useState } from 'react'
import { useAuthContext } from './auth-context'
import { Navigate, useLocation } from 'react-router'
import { LOGIN_PAGE } from '@/helpers/pages'

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
	const [requestedLocation, setRequestedLocation] = useState<string | null>(null)
	const { isAuthenticated } = useAuthContext()
	const { pathname } = useLocation()

	if (!isAuthenticated) {
		if (pathname !== requestedLocation) {
			setRequestedLocation(pathname)
		}

		return <Navigate to={LOGIN_PAGE} />
	}

	if (requestedLocation && pathname !== requestedLocation) {
		setRequestedLocation(null)

		return <Navigate to={requestedLocation} />
	}

	return <>{children}</>
}

export default AuthGuard
