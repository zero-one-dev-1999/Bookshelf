import { shallowEqual, TypedUseSelectorHook, useSelector as useOriginalSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'

const useSelector: TypedUseSelectorHook<RootState> = (selector, equalityFnOrOptions = shallowEqual) => {
	return useOriginalSelector(
		createSelector(state => state, selector),
		equalityFnOrOptions,
	)
}

export default useSelector
