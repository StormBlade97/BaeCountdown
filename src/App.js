import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import { AvatarWheel } from './AvatarWheel.js'
import CountdownBox from './CountdownBox'
import Navbar from './Appbar'
import FlightProgressBar from './FlightProgressBar'

const FullScreenWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
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
     <div>
      <Navbar />
       <FullScreenWrapper backgroundColor={colors.red400}>
         <AvatarWheel />
         <CountdownBox />
         <FlightProgressBar />
       </FullScreenWrapper>
     </div>
    )
  }
}
