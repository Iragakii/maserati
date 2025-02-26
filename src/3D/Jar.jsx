import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Jar(props) {
  const { nodes, materials } = useGLTF('/mercedes-benz_300sl_gullwing__www.vecarz.com.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane204_details_0.geometry}
            material={materials.details}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane178_300sl_chassis_0.geometry}
            material={materials['300sl_chassis']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane176_gauges_0.geometry}
            material={materials.gauges}
            position={[-104.116, 123.699, -3.079]}
            rotation={[0, Math.PI / 2, 0]}
            scale={15.534}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane168_300sl_paintjob_0.geometry}
            material={materials['300sl_paintjob']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_300sl_chrome_0.geometry}
            material={materials['300sl_chrome']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane164_gird_0.geometry}
            material={materials.gird}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane163_300sl_glass_0.geometry}
            material={materials['300sl_glass']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane158_blackness_0.geometry}
            material={materials.blackness}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane151_300sl_wheels_0.geometry}
            material={materials['300sl_wheels']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane149_300sl_seal_0.geometry}
            material={materials['300sl_seal']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane140_300sl_interior_0.geometry}
            material={materials['300sl_interior']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mercedes-benz_300sl_gullwing__www.vecarz.com.glb')
