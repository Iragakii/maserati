import React from 'react'
import { Canvas } from '@react-three/fiber'
import Ea from './Ea'
import Header from './Header'
import Auction from './Auction'
import Data from './Dat'







const MainPage = () => {
  return (
    <>
      
      <Header></Header>
      <Canvas shadows camera={{ position: [0, 0, 0], fov: 20 }}>
        <Ea></Ea>
      </Canvas>
      <Auction></Auction>
      <Data></Data>
      
      </>
  )
}

export default MainPage