import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
const Sky = () => {
 const sky = useGLTF(skyScene);

 return(
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
 )
  
}



export default Sky;
