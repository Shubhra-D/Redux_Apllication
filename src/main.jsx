import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  
  
  
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <ChakraProvider>
          <App/>
         </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
