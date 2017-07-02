import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import { AvatarWheel } from './AvatarWheel.js'
import CountdownBox from './CountdownBox'
import Navbar from './Appbar'
import FlightProgressBar from './FlightProgressBar'

const Background = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 60vh;
  background-color: ${props => props.backgroundColor};
  @media (max-width: 700px) {
    height: 55vh;
  }
`
const FullWidth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  transform-origin: top center;
`
export default class App extends Component {
  render () {
    return (<div>
      <Navbar />
        <Background backgroundColor={colors.red400}>
          <FullWidth>
            <AvatarWheel />
            <CountdownBox />
            <FlightProgressBar />
          </FullWidth>
        </Background>
      </div>
    )
  }
}
