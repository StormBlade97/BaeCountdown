import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

const Root = (props) => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
