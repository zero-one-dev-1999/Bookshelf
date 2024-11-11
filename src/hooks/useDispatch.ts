import { useDispatch as useOriginalDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

const useDispatch = useOriginalDispatch.withTypes<AppDispatch>()

export default useDispatch
