import { Navigate } from 'react-router'
import { lazy } from 'react'
import * as pages from '../helpers/pages'
import GuestGuard from '../auth/GuestGuard'
import Loadable from '@/components/loadable'

const AuthLayotPage = Loadable(lazy(() => import('@/layouts/login')))
const LoginPage = Loadable(lazy(() => import('@/pages/auth/Index')))

const LoginRoutes = {
	path: '/',
	children: [
		{
			path: '/',
			element: (
				<GuestGuard>
					<AuthLayotPage />
				</GuestGuard>
			),
			children: [
				{
					path: '*',
					element: <Navigate replace to={pages.LOGIN_PAGE} />,
				},
				{
					path: '/',
					element: <Navigate replace to={pages.LOGIN_PAGE} />,
				},
				{
					path: pages.LOGIN_PAGE,
					element: <LoginPage />,
				},
			],
		},
	],
}

export default LoginRoutes
