import React from 'react'
import styled from 'styled-components'

const RowFlexBox = styled.div`
	display: flex;
	flex-direction: column;
`
const Badge = styled.div`
	font-size: 2rem;
	color: black;
`
export default class CountdownUnit extends React.PureComponent {
	render() {
		return (
			<RowFlexBox>
				{ this.props.children }
				<Badge>
					{ this.props.type }
				</Badge>
			</RowFlexBox>
		)
	}
}