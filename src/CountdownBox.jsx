import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import Countdown from './Countdown'

const CenterTextBox = styled.div`
  transform: translate3d(0, 250px, 0);
  text-align: center;
  transition: 0.5s all ease;
  @media (max-width: 700px) {
    transform: translate3d(0, 150px, 0) scale(0.6);
  }
`
const FlavorText = styled.div`
  font-family: 'Inconsolas', monospace;
  font-size: 3rem;
  font-weight: 500;
  color: ${props => props.textColor};
  border: 1px ${colors.fullWhite} solid;
  border-radius: 4px;
  background-color: white;
`
export default class CountdownBox extends Component {
  render () {
    return (
      <CenterTextBox>
        <FlavorText textColor={colors.red400}>He's coming!</FlavorText>
        <Countdown />
      </CenterTextBox>
      )
  }
}
