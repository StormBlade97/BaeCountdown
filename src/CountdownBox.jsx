import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import Countdown from './Countdown'

const CenterTextBox = styled.div`
  transform: translate3d(0, 300px, 0);
  text-align: center;
`
const FlavorText = styled.div`
  font-family: 'Roboto', san-serif;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 300;
  color: ${props => props.textColor};
`
export default class CountdownBox extends Component {
  render () {
    return (
      <CenterTextBox>
        <FlavorText textColor={colors.darkWhite}>He's coming!</FlavorText>
        <Countdown />
      </CenterTextBox>
      )
  }
}
