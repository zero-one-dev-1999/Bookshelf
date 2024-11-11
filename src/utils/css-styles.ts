import { alpha } from '@mui/material/styles'

interface IProps {
	color?: string
	blur?: number
	opacity?: number
	imgUrl?: string
}

export const bgBlur = (props: IProps) => {
	const color = props?.color || '#000000'
	const blur = props?.blur || 6
	const opacity = props?.opacity || 0.8
	const imgUrl = props?.imgUrl

	if (imgUrl) {
		return {
			position: 'relative',
			backgroundImage: `url(${imgUrl})`,
			'&:before': {
				top: 0,
				left: 0,
				zIndex: 9,
				width: '100%',
				content: '""',
				height: '100%',
				position: 'absolute',
				backdropFilter: `blur(${blur}px)`,
				backgroundColor: alpha(color, opacity),
				WebkitBackdropFilter: `blur(${blur}px)`,
			},
		}
	}

	return {
		backdropFilter: `blur(${blur}px)`,
		backgroundColor: alpha(color, opacity),
		WebkitBackdropFilter: `blur(${blur}px)`,
	}
}
