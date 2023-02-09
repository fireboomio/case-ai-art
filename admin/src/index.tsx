import { AuthenticationProvider } from './providers/AuthenticationContext'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
// import reportWebVitals from "./reportWebVitals";
import App from './App'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  // <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
