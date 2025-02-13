import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Spo(props) {
  const { nodes, materials } = useGLTF('/maserati_ghibli_hybrid.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.desirefxme_145_lights_0.geometry}
            material={materials.lights}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.desirefxme_145_lights_0_1.geometry}
            material={materials.lights}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.desirefxme_146_lights_0.geometry}
            material={materials.lights}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.desirefxme_146_lights_0_1.geometry}
            material={materials.lights}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_001_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_002_glass_0.geometry}
          material={materials.glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_003_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_004_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_005_glass_0.geometry}
          material={materials.glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_006_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_007_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_008_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_009_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_010_silver_0.geometry}
          material={materials.silver}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_011_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_012_black_0.geometry}
          material={materials.black}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_013_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_014_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_015_glass_0.geometry}
          material={materials.glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_016_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_017_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_018_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_019_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_020_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_021_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_022_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_023_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_024_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_025_silver_0.geometry}
          material={materials.silver}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_026_logo_0.geometry}
          material={materials.logo}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_027_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_028_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_029_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_030_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_031_glass_0.geometry}
          material={materials.glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_032_glass_0.geometry}
          material={materials.glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_033_glass_0.geometry}
          material={materials.glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_034_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_035_silver_0.geometry}
          material={materials.silver}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_036_silver_0.geometry}
          material={materials.silver}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_037_logo_wheel_0.geometry}
          material={materials.logo_wheel}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_038_logo_wheel_0.geometry}
          material={materials.logo_wheel}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_039_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_040_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_041_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_042_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_043_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_044_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_045_blue_0.geometry}
          material={materials.blue}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_046_blue_0.geometry}
          material={materials.blue}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_047_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_048_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_049_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_050_orange_0.geometry}
          material={materials.orange}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_051_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_052_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_053_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_054_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_055_silver_0.geometry}
          material={materials.silver}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_056_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_057_lights_0.geometry}
          material={materials.lights}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_058_brakes1_0.geometry}
          material={materials.brakes1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_059_brakes1_0.geometry}
          material={materials.brakes1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_060_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_061_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_062_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_063_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_064_tire_mat1_0.geometry}
          material={materials.tire_mat1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_065_tire_mat1_0.geometry}
          material={materials.tire_mat1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_066_logo_wheel_0.geometry}
          material={materials.logo_wheel}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_067_logo_wheel_0.geometry}
          material={materials.logo_wheel}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_068_silver_0.geometry}
          material={materials.silver}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_069_silver_0.geometry}
          material={materials.silver}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_070_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_071_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_072_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_073_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_074_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_075_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_076_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_077_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_078_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_079_d_glass_0.geometry}
          material={materials.d_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_080_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_081_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_082_vd_glass_0.geometry}
          material={materials.vd_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_083_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_084_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_085_black_0.geometry}
          material={materials.black}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_086_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_087_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_088_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_089_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_090_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_091_plate_0.geometry}
          material={materials.plate}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_092_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_093_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_094_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_095_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_096_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_097_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_098_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_099_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_100_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_101_d_glass_0.geometry}
          material={materials.d_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_102_plate_0.geometry}
          material={materials.plate}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_103_red_0.geometry}
          material={materials.material}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_104_r_glass_0.geometry}
          material={materials.r_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_105_d_red_0.geometry}
          material={materials.d_red}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_106_black_0.geometry}
          material={materials.black}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_107_r_glass_0.geometry}
          material={materials.r_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_108_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_109_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_110_blue_0.geometry}
          material={materials.blue}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_111_blue_0.geometry}
          material={materials.blue}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_112_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_113_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_114_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_115_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_116_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_117_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_118_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_119_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_120_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_121_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_122_d_glass_0.geometry}
          material={materials.d_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_123_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_124_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_125_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_126_interior_0.geometry}
          material={materials.interior}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_127_black_0.geometry}
          material={materials.black}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_128_d_glass_0.geometry}
          material={materials.d_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_129_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_130_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_131_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_132_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_133_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_134_blue_0.geometry}
          material={materials.blue}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_135_brakes1_0.geometry}
          material={materials.brakes1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_136_brakes1_0.geometry}
          material={materials.brakes1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_137_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_138_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_139_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_140_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_141_tire_mat1_0.geometry}
          material={materials.tire_mat1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_142_tire_mat1_0.geometry}
          material={materials.tire_mat1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_143_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_144_lights_0.geometry}
          material={materials.lights}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_147_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_148_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_149_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_150_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_151_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_152_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_153_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_154_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_155_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_156_r_glass_0.geometry}
          material={materials.r_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_157_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_158_d_red_0.geometry}
          material={materials.d_red}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_159_red_0.geometry}
          material={materials.material}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_160_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_161_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_162_black_matt_0.geometry}
          material={materials.black_matt}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_163_r_glass_0.geometry}
          material={materials.r_glass}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_164_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_165_black_shiny_0.geometry}
          material={materials.black_shiny}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_166_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desirefxme_167_body_0.geometry}
          material={materials.body}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/maserati_ghibli_hybrid.glb')
