/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/model.glb 
Author: The Hallwyl Museum (Hallwylska museet) (https://sketchfab.com/TheHallwylMuseum)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-great-drawing-room-feb9ad17e042418c8e759b81e3b2e5d7
Title: The Great Drawing Room
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.418}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.model_Material_u1_v1} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
