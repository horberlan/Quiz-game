import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import { AppProvider } from './Settings'
import Sounds from './components/Sound';
ReactDOM.render(
  <React.StrictMode>
    
<Sounds/>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)