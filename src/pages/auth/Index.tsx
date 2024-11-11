import FormikInput from '@/components/input/Index'
import useDispatch from '@/hooks/useDispatch'
import { appAuthLoginAction } from '@/store/actions'
import { Stack, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { FormikProvider, useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

const Login = () => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			key: '',
			secret: '',
		},
		onSubmit: values => {
			dispatch(appAuthLoginAction(values, setLoading))
		},
		validationSchema: Yup.object({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			key: Yup.string().required(),
			secret: Yup.string().required(),
		}),
	})

	const { handleSubmit } = formik

	return (
		<FormikProvider value={formik}>
			<Stack sx={{ width: 1 }}>
				<Stack spacing={2} sx={{ mb: 3 }}>
					<Typography variant='h5' textAlign='center'>
						Sign Up
					</Typography>
				</Stack>
				<Stack
					spacing={2}
					component='form'
					autoComplete='off'
					onSubmit={handleSubmit}
				>
					<FormikInput field='name' label={'Name'} />
					<FormikInput field='email' label={'Email'} />
					<FormikInput field='key' label={'Key'} />
					<FormikInput field='secret' label={'Secret'} />

					<LoadingButton
						fullWidth
						size='large'
						type='submit'
						color='inherit'
						variant='contained'
						loading={loading}
						sx={{
							bgcolor: 'text.primary',
							color: theme =>
								theme.palette.mode === 'light'
									? 'common.white'
									: 'grey.800',
							'&:hover': {
								bgcolor: 'text.primary',
								color: theme =>
									theme.palette.mode === 'light'
										? 'common.white'
										: 'grey.800',
							},
						}}
					>
						Sign up
					</LoadingButton>
				</Stack>
			</Stack>
		</FormikProvider>
	)
}

export default Login
