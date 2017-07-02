import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import _ from 'lodash'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import IconButton from 'material-ui/IconButton';
const imagesReq = require.context('./static', false, /^.*\.*$/)
const images = imagesReq.keys().map(imagesReq);
console.log(images);
// constants
const MAIN_BUTTON_D = 400
const CHILD_BUTTON_D = 50
const CHILD_NUM = _.size(images)
const SEPARATION_ANGLE = 36
const FLY_OUT_R = 300
const FAN_ANGLE = (CHILD_NUM - 1) * SEPARATION_ANGLE
const BASE_ANGLE = (180 - FAN_ANGLE)/2
// styled components
const BorderLine = styled.div`
  @media (max-width: 700px) {
    width: ${FLY_OUT_R*1.7}px;
    height: ${FLY_OUT_R*1.7}px;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  width: ${FLY_OUT_R*2}px;
  height: ${FLY_OUT_R*2}px;
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
  transition: 0.3s all ease;
`
const MainAvatar = styled(Paper)`
  position: absolute;
  width: ${MAIN_BUTTON_D}px;
  height: ${MAIN_BUTTON_D}px;
  background-image: url(${({url}) => url});
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ChildAvatar = MainAvatar.extend`
  position: absolute;
  width: ${CHILD_BUTTON_D}px;
  height: ${CHILD_BUTTON_D}px;
  transform: translate3d(
    ${({deltaX}) => deltaX + CHILD_BUTTON_D/2}px,
    ${({deltaY}) => -deltaY - CHILD_BUTTON_D/2}px,
    0) scale(${({active}) => (active) ? 2 : 1});
  z-index: 5000;
  background-image: url(${({url}) => url});
  border: 2px ${({active}) => active ? colors.red400 : colors.transparent} solid;
  @media (max-width: 700px) {
    transform: translate3d(
    ${({deltaX}) => (deltaX + CHILD_BUTTON_D/2)*0.85}px,
    ${({deltaY}) => (-deltaY - CHILD_BUTTON_D/2)*0.85}px,
    0) scale(${({active}) => (active) ? 1.5 : 1});
    width: ${CHILD_BUTTON_D*0.7}px;
    height: ${CHILD_BUTTON_D*0.7}px; 
  }
`
const Prev = styled(IconButton)`
  border-radius: 50%;
  transform: translate3d(-${MAIN_BUTTON_D/2 - 48}px, 0, 0);
`
const Next = styled(IconButton)`
  border-radius: 50%;
  transform: translate3d(${MAIN_BUTTON_D/2 - 48}px, 0, 0);
`
// helper methods
const toRad = (deg) => deg * 0.0174533
const getDeltaPosition = (index) => {
  let angle = BASE_ANGLE + (index * SEPARATION_ANGLE)
  return {
    dx: FLY_OUT_R * Math.cos(toRad(angle)) - (CHILD_BUTTON_D/2),
    dy: FLY_OUT_R * Math.sin(toRad(angle)) - (CHILD_BUTTON_D/2)
  }
}

// main react class

export class AvatarWheel extends Component {
  state = {
    activeIndex: 0
  }
  handleNext = () => {
    (this.state.activeIndex >= (CHILD_NUM - 1))
      ? this.setState({activeIndex: 0})
      : this.setState((state) => {
          return { activeIndex: ++state.activeIndex}
      })
  }
  handlePrev = () => {
    (this.state.activeIndex < 1)
      ? this.setState({activeIndex: CHILD_NUM -1})
      : this.setState((state) => {
          return { activeIndex: --state.activeIndex}
      })
  }
  render () {
    return (
      <BorderLine borderColor={colors.red400}>
        {/* main, visible avatar */}
        <MainAvatar zDepth={3} circle url={images[this.state.activeIndex]}>
          <Prev
            onTouchTap={this.handleNext}
            hoveredStyle={{ backgroundColor: colors.lightWhite }}>
              <ChevronLeft color={colors.darkWhite}/>
            </Prev>
          <Next
            onTouchTap={this.handlePrev}
            hoveredStyle={{ backgroundColor: colors.lightWhite }}>
              <ChevronRight color={colors.darkWhite}/>
          </Next>
        </MainAvatar>
        {/* thumbnails  */
          _.range(CHILD_NUM).map((index) => {
            const active = this.state.activeIndex === index;
            return (
              <ChildAvatar
              key={index}
              circle
              deltaX={getDeltaPosition(index)['dx']}
              deltaY={getDeltaPosition(index)['dy']}
              zDepth={active ? 5 : 0}
              active={active}
              onMouseEnter={() => this.setState({activeIndex: index})}
              url={images[index]}
              />
              )
          })
        }

      </BorderLine>
      )
    }
}
