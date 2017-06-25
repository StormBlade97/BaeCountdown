import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import { AvatarWheel } from './AvatarWheel.js'
import CountdownBox from './CountdownBox'

const FullScreenWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 60vh;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default class App extends Component {
  render () {
    return (
      <FullScreenWrapper backgroundColor={colors.red400}>
        <AvatarWheel />
        <CountdownBox />
      </FullScreenWrapper>
    )
  }
}
