import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import moment from 'moment'

const CountdownText = styled.h2`
  font-weight: 600;
  font-size: 5rem;
  margin: 0;
  transform: translate3d(0, 20%, 0)
`
export default class Countdown extends Component {
  componentWillMount = () => {
    const counterRef = setInterval(
      () => this.forceUpdate(),
      1000 // 1 second
    )
    this.setState({ counterRef })
  }
  render () {
    console.log('render');
    return (
      <CountdownText>
        { moment('2017:07:13', 'YYYY:MM:DD').format('DD : hh : mm : ss') }
      </CountdownText>
    )
  }
}
