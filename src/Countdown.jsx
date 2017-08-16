import React, { Component } from 'react'
import CountdownUnit from './CountdownUnit'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import moment from 'moment'
import countdown from 'countdown'

const CountdownText = styled.h2`
  font-size: 5rem;
  margin: 0;
  transform: translate3d(0, 5%, 0);
  font-family: 'Inconsolata', monospace;
  color: ${colors.white};
  display: flex;
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
    const destination = moment('2017-07-13T21:40:00').toDate()
    const now = moment().toDate()
    const remaining = countdown(destination, now)
    const { days, minutes, hours, seconds, months } = remaining
    return (
      <CountdownText>
        <CountdownUnit type="months">{months}</CountdownUnit>:
        <CountdownUnit type="days">{days}</CountdownUnit>:
        <CountdownUnit type="hours">{hours}</CountdownUnit>:
        <CountdownUnit type="minutes">{minutes}</CountdownUnit>:
        <CountdownUnit type="seconds">{seconds}</CountdownUnit>
      </CountdownText>
    )
  }
  componentWillUnmount = () => {
    window.clearInterval(this.state.counterRef)
  }
}
