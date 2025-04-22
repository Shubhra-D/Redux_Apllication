
import {Container} from '@chakra-ui/react'
import { Route,Routes } from 'react-router-dom'
import {Navbar} from './common/Navbar'
import {Home} from './common/pages/Home'
import {Workout} from './common/pages/Workout'
import { ParticleBackground } from './common/ParticleBackground'


export function App() {
  return (
    <>
    <ParticleBackground/>
    <Navbar/>
      
          <Routes>
            <Route path='/' element={<Home/>}/>
             <Route path='/workout' element={<Workout/>}/>
          </Routes>
  
    </>
  )
}


