import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import styled from 'styled-components'

export class AvatarWheel extends Component {
  render() {
    return (
        <Paper zDepth={3}>
          <Avatar>C</Avatar>
        </Paper>
      )
    }
}
