import React from 'react'
import ReactDOM from 'react-dom/client'// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
