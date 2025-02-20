
import {Container} from '@chakra-ui/react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {Navbar} from './components/ui/common/Navbar'
import {Home} from './components/ui/common/pages/Home'
import {Workout} from './components/ui/common/pages/Workout'
function App() {


  return (
    <>
    <Navbar/>
      <Container maxWidth={"md"} mt={8}>
          <Routes>
            <Route path='/' element={<Home/>}/>
             <Route path='/workout' element={<Workout/>}/>
          </Routes>
        </Container>
    </>
  )
}

export default App
