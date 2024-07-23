import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './Style/GlobalStyles.js'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStyles/>
    <App />
  </React.StrictMode>,
)
