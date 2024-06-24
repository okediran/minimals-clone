import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// if (process.env.NODE_ENV === 'development') {
//   const { server } = require('./mocks/browser.ts');
//   server.listen();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
