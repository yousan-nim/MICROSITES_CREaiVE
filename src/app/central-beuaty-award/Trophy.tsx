'use client'

import {
    useLoader
} from '@react-three/fiber'
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';

const Tropgy = () => {

    const [autoMove, setAutoMove] = useState(0)

    const gltf = useLoader(GLTFLoader, "./gltf/Button.gltf")



    useEffect( () => {

    })

    return (
        <group>
            <primitive
                scale={10}
                object={gltf.scene}
                position={new THREE.Vector3(
                    0, -3, 0
                )}
            />
        </group>
    )
}


export default Tropgy;