import FormikInput from '@/components/input/Index'
import Loader from '@/components/loader'
import useDispatch from '@/hooks/useDispatch'
import useSelector from '@/hooks/useSelector'
import { booksActions, booksCreateAction } from '@/store/actions'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Stack,
} from '@mui/material'
import { Form, Formik, useFormikContext } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'

const FormComponent = () => {
	const dispatch = useDispatch()
	const { handleSubmit } = useFormikContext()

	return (
		<Form
			autoComplete='off'
			onSubmit={e => {
				e.preventDefault()
				handleSubmit(e)
			}}
			onKeyDown={e => {
				if (e.key === 'Enter') {
					e.preventDefault()
				}
			}}
		>
			<DialogContent>
				<FormikInput field='isbn' label='ISBN' />
			</DialogContent>
			<Divider />

			<DialogActions sx={{ px: 3, py: 2 }}>
				<Stack spacing={2} direction='row' alignItems='center'>
					<Button
						color='error'
						variant='outlined'
						onClick={() => dispatch(booksActions.resetForm())}
					>
						Cancel
					</Button>
					<Button type='submit' color='success' variant='contained'>
						Save
					</Button>
				</Stack>
			</DialogActions>
		</Form>
	)
}

const ModalForm: FC = () => {
	const dispatch = useDispatch()

	const { isOpen, isUpdate, loading } = useSelector(({ Books: s }) => ({
		isOpen: s.form.isOpen,
		isUpdate: s.form.isUpdate,
		loading: s.loadings.form,
	}))

	return (
		<Dialog fullWidth maxWidth='md' open={isOpen}>
			<Loader loading={loading} />
			<DialogTitle>Add book</DialogTitle>
			<Divider />
			<Formik
				component={FormComponent}
				initialValues={{ isbn: '9781118464465' }}
				validationSchema={Yup.object({
					isbn: Yup.string().required(),
				})}
				onSubmit={values => {
					if (!isUpdate) {
						dispatch(booksCreateAction(values))
					}
				}}
			/>
		</Dialog>
	)
}

export default ModalForm
