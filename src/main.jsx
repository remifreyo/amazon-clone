import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StateProvider } from './StateProvider.jsx'
import reducer, { initialState } from './reducer'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>
)
