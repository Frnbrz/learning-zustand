import { JSLogo } from '@/assets/JSLogo'
import { Stack, Typography } from '@mui/material'

function Header() {
	return (
		<Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
			<JSLogo />
			<Typography variant='h2' component='h1'>
				JavaScript Quizz
			</Typography>
		</Stack>
	)
}

export default Header
