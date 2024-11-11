/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, Suspense } from 'react'

const Loadable = (Component: ComponentType) => (props: any) =>
	(
		<Suspense fallback={<h3>Loading...</h3>}>
			<Component {...props} />
		</Suspense>
	)

export default Loadable
