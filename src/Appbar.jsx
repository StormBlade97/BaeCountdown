import React from 'react'
import Appbar from 'material-ui/AppBar'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import Love from 'material-ui/svg-icons/action/favorite'
import IconButton from 'material-ui/IconButton'
import Code from 'material-ui/svg-icons/action/code'

const ColoredAppbar = styled.div`
	background-color: ${colors.transparent} !important;
	box-shadow: none !important;
	position: fixed;
	width: 100vw;
	height: 56px;
	top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
`
const HeroText = styled.h3`
	font-family: 'Cookie', cursive;
	color: ${colors.red400};
	font-size: 2rem;
	font-weight: 200;
	margin: 0;
	position: absolute;
	left: 72px;
	@media (max-width: 700px) {
		left: 50%;
		transform: translateX(-50%) scale(1.3);
	}
`
export default class Navbar extends React.PureComponent {
	render = () => {
		return (
		<ColoredAppbar>
			<IconButton>
				<Love color={colors.red400} />
			</IconButton>
			<HeroText>What's right with you? - Everything</HeroText>
		</ColoredAppbar>)
	}
}