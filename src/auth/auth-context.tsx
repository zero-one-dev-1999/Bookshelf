import useSelector from "../hooks/useSelector"

const useAuthContext = () => {
	const state = useSelector(({ App: s }) => ({
		user: s.user,
		hasAccess: s.hasAccess,
		isAuthenticated: s.isAuth,
		basePermission: s.basePermission,
	}))

	return { ...state, isInitialized: true }
}

export { useAuthContext }
