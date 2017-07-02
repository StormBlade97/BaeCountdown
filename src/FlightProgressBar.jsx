/* eslint-disable jsx-quotes */

import React from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import * as colors from 'material-ui/styles/colors'
import usflag from './static/flags/usflag.jpg'
import finnishflag from './static/flags/finnishflag.png'

const BottomBar = styled.div`
    width: 90vw;
    height: 48px;
    position: absolute;
    bottom: 12px;
    display: flex;
    justify-content: space-between;
    @media (max-height: 500px) {
        display: none;
    }
`
const Flag = styled(Paper)`
    width: 48px;
    height: 48px;
    background-image: url(${({url}) => url});
    background-position: center;
    background-size: 100% 100%;
    border: 5px white solid;
    @media (max-height: 1000px) {
        transform: scale(0.7);
    }
`
const AirplaneIcon = () => (
    <svg style={{
        fill: colors.white, width: 32, height: 32, position: 'absolute', right: '-30px', top: '50%',
        transform: 'translate3d(0, -50%, 0) rotate(90deg)'
    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.15 122.81">
       <title>AirplaneIcon</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="OBJECT">
             <path class="cls-1" d="M92.61,72.22c-.09-1.66-25.26-16-36.79-22.44v-8a2.26,2.26,0,0,0-2.25-2.27,2.28,2.28,0,0,0-1.37.48V10.67C52.19,7.57,49.67.5,46.58.5S41,7.57,41,10.67V40a2.28,2.28,0,0,0-1.37-.48,2.26,2.26,0,0,0-2.25,2.27v8C25.8,56.25.63,70.55.55,72.22.44,74.38.55,81.88.55,83s2.06.61,6.68-1.54c.81-.39,2.47-1.07,4.62-1.92v.57a.82.82,0,1,0,1.64,0V78.91l3.3-1.27v1a.82.82,0,1,0,1.63,0V77c1.07-.41,2.17-.84,3.3-1.25v1.49a.81.81,0,0,0,.82.82.82.82,0,0,0,.83-.82V75.14l3.28-1.25v1.92a.81.81,0,0,0,.82.82.82.82,0,0,0,.83-.82V73.29c1.11-.43,2.21-.84,3.28-1.24v2.33a.81.81,0,0,0,.82.82.82.82,0,0,0,.83-.82v-3l3.28-1.22v2.74a.83.83,0,0,0,1.65,0V69.59l2.8-1v38c-4.08,1.32-15.64,5.23-15.64,7.26V122c0,1.12,3.9-.62,8.53-2.27,3.22-1.15,7.07-2.58,9.13-3.35a5.57,5.57,0,0,0,2.68,1.24v2.53a.92.92,0,1,0,1.84,0v-2.53a5.56,5.56,0,0,0,2.68-1.24c2.05.77,5.91,2.21,9.13,3.35,4.63,1.65,8.53,3.39,8.53,2.27v-8.12c0-2-11.57-5.95-15.64-7.26v-38l2.8,1v3.36a.83.83,0,0,0,1.65,0V70.21l3.28,1.22v3a.82.82,0,0,0,.83.82.81.81,0,0,0,.82-.82V72c1.07.4,2.17.81,3.28,1.24v2.53a.82.82,0,0,0,.83.82.81.81,0,0,0,.82-.82V73.89l3.28,1.25v2.12a.82.82,0,0,0,.83.82.81.81,0,0,0,.82-.82V75.76c1.13.42,2.22.85,3.3,1.25v1.67a.82.82,0,1,0,1.63,0v-1l3.3,1.27v1.21a.82.82,0,1,0,1.63,0v-.57c2.16.85,3.81,1.53,4.63,1.92,4.63,2.15,6.68,2.66,6.68,1.54S92.71,74.38,92.61,72.22Z"/>
          </g>
       </g>
    </svg>
)
const ProgressBar = styled.div`
    height: 12px;
    width: calc(${({percent}) => percent}% - 30px);
    background-color: rgba(255,255,255, 0.6);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    z-index: -1;
    @media (max-height: 1000px) {
        transform: translate3d(0, -50%, 0) scale(0.7);
    }
`
export default class FlightProgressBar extends React.PureComponent {
    render = () => {
        return (
            <BottomBar>
                <Flag circle zDepth={0} url={usflag}></Flag>
                <Flag circle zDepth={0} url={finnishflag}></Flag>
                <ProgressBar percent={50}>
                    <AirplaneIcon />
                </ProgressBar>
            </BottomBar>
        )
    }
}