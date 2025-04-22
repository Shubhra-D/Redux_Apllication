import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { BrowserRouter } from 'react-router-dom'
import {Provider as ChakraProvider } from '../src/components/ui/provider'
import {App} from './App'




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
