import { lazy } from 'react'
import DashboardLayout from '../layouts/dashboard'
import AuthGuard from '../auth/AuthGuard'
import * as pages from '../helpers/pages'
import Loadable from '@/components/loadable'


const DashboardPage = Loadable(lazy(() => import('@/pages/dashboard')))

const MainRoutes = {
	path: '/',
	children: [
		{
			path: '/',
			element: (
				<AuthGuard>
					<DashboardLayout />
				</AuthGuard>
			),
			children: [
				// {
				// 	path: '*',
				// 	element: <Page404 />,
				// },
				{
					path: pages.DASHBOARD_PAGE,
					element: <DashboardPage />,
				},
			],
		},
	],
}
export default MainRoutes
