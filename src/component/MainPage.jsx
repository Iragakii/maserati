import React from 'react'
import { Canvas } from '@react-three/fiber'
import Ea from './Ea'
import Header from './Header'


const MainPage = () => {
  return (
    <>
      
      <Header></Header>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 20 }}>
        <Ea></Ea>
      </Canvas>
      </>
  )
}

export default MainPage