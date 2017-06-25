import React, { Component } from 'react'
import MuiPaper from 'material-ui/Paper'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import Avatar1 from './statics/Avatar1.PNG'

const Paper = styled(MuiPaper)`
    width: 450px;
    height: 450px;
    background-image: url(${Avatar1});
    background-position: center;
    background-size: 100% 100%;
`
const BorderLine = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid;
  transform: translate3d(-50%, -50%, 0);
  border-color: ${props => props.borderColor};
`
export class AvatarWheel extends Component {
  render () {
    return (
      <BorderLine borderColor={colors.red400}>
        <Paper zDepth={3} circle />
      </BorderLine>
      )
    }
}
