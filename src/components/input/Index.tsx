/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, TextField, InputLabel, FormControl, TextFieldProps } from '@mui/material'
import { useFormikContext } from 'formik'
import { FC } from 'react'

interface FormikInputProps extends Omit<TextFieldProps, 'variant'> {
	min?: string
	max?: string
	readOnly?: boolean
	withoutHelpertext?: boolean
	field: string
	mask?: string
	required?: boolean
	maxLength?: number
	label?: string | any
	hideErrorMessage?: boolean
	validateOnChange?: boolean
	definitions?: Record<string, RegExp>
}

const FormikInput:FC<FormikInputProps> = ({ min, max, field, label, type = 'text', InputProps = {}, readOnly = false, required = false, withoutHelpertext = false, ...props }) => {
	const { getFieldMeta, getFieldProps } = useFormikContext()

	const fieldProps = getFieldProps(field)
	const meta = getFieldMeta(field)

	return (
		<Stack spacing={0.2}>
			{label && <InputLabel required={required}>{label}</InputLabel>}
			<FormControl fullWidth>
				<TextField
					{...props}
					type={type}
					size='small'
					{...fieldProps}
					inputProps={{ max, min }}
					value={fieldProps.value || ''}
					onWheel={(e) => e.target.blur()}
					InputProps={{ ...InputProps, readOnly }}
					error={Boolean(meta.touched && meta.error)}
					helperText={!withoutHelpertext && Boolean(meta.touched && meta.error) && (meta.error)}
				/>
			</FormControl>
		</Stack>
	)
}

export default FormikInput
