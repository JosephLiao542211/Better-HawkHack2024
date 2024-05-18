import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Test from './Test.tsx'
import Marketplace from './Marketplace.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Marketplace></Marketplace>
    {/* <Test></Test> */}
  </React.StrictMode>,
)
