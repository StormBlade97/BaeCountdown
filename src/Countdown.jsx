import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import moment from 'moment'
import countdown from 'countdown'

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
    const destination = moment('2017-07-13T16:05:42').toDate()
    const now = moment().toDate()
    const remaining = countdown(destination, now)
    const { days, minutes, hours, seconds } = remaining
    return (
      <CountdownText>
        {days}:{minutes}:{hours}:{seconds}
      </CountdownText>
    )
  }
  componentWillUnmount = () => {
    window.clearInterval(this.state.counterRef)
  }
}
