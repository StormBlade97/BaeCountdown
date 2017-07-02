import React from 'react'
import Appbar from 'material-ui/AppBar'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import Love from 'material-ui/svg-icons/action/favorite'
import IconButton from 'material-ui/IconButton'
import Code from 'material-ui/svg-icons/action/code'

const ColoredAppbar = styled(Appbar)`
	font-family: 'Cookie', cursive;
	background-color: ${colors.transparent} !important;
	box-shadow: none !important;
`

export default class Navbar extends React.PureComponent {
	render = () => {
		return (
		<ColoredAppbar
			iconElementLeft={<IconButton>
				<Love color={colors.red400} />
			</IconButton>}
			iconElementRight={<IconButton><Code color={colors.red400} /></IconButton>}
			title="Bae Countdown"
			titleStyle={{ color: colors.red400, fontFamily: 'Cookie, cursive', fontSize: '2rem' }}
		/>)
	}
}