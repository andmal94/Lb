import { Canvas, useFrame, } from "@react-three/fiber";
import { Gltf, ScrollControls, useScroll, Text, Image,} from "@react-three/drei";
import { getProject, val, types, T } from "@theatre/core";
import theatreState from "./State.json";
import React from "react";

import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
  editable as e, 
} from "@theatre/r3f";

export default function App() {
  const sheet = getProject("Fly Through", { state: theatreState }).sheet(
    "Scene"

  );

  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
}

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  const bgColor = "#0f172a";

  return (
    <>
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" color={bgColor} near={-10} far={20} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0]} intensity={1} />

      <e.mesh theatreKey="LbVillage">
      <Gltf src="/lbvillage.glb" castShadow receiveShadow />
      </e.mesh>

      <e.mesh theatreKey="Plane">
      <planeGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#000000" transparent opacity={1} />
      </e.mesh>

      <e.mesh theatreKey="Plane2">
      <planeGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#000000" transparent opacity={1} />
      </e.mesh>

      <e.mesh theatreKey="lbl">
      <Gltf src="/lbl.glb" castShadow receiveShadow />
      </e.mesh>

      <e.mesh theatreKey="lbb">
      <Gltf src="/lbb.glb" castShadow receiveShadow />
      </e.mesh>

      <e.mesh theatreKey="laurelwreath1">
      <Gltf src="/laurelwreath.glb" castShadow receiveShadow />
      </e.mesh>

      <e.mesh theatreKey="laurelwreath2">
      <Gltf src="/laurelwreath2.glb" castShadow receiveShadow />
      </e.mesh> 

      <e.mesh theatreKey="lbgeometric">
      <Gltf src="/lbgeometric/lbgeometric.glb" castShadow receiveShadow />
      </e.mesh> 
      <e.mesh theatreKey="lbgeometric1">
      <Gltf src="/lbgeometric/lbgeometric1.glb" castShadow receiveShadow />
      </e.mesh> 
      <e.mesh theatreKey="lbgeometric2">
      <Gltf src="/lbgeometric/lbgeometric2.glb" castShadow receiveShadow />
      </e.mesh> 
      <e.mesh theatreKey="lbgeometric3">
      <Gltf src="/lbgeometric/lbgeometric3.glb" castShadow receiveShadow />
      </e.mesh> 
      <e.mesh theatreKey="lbgeometric4">
      <Gltf src="/lbgeometric/lbgeometric4.glb" castShadow receiveShadow />
      </e.mesh> 

      <e.mesh theatreKey="www">
      <Gltf src="/www.glb" castShadow receiveShadow />
      </e.mesh> 
      <e.mesh theatreKey="www1">
      <Gltf src="/www1.glb" castShadow receiveShadow />
      </e.mesh> 

      <e.mesh theatreKey="box">
      <Gltf src="/box.glb" castShadow receiveShadow />
      </e.mesh> 

      <e.pointLight theatreKey="LightPoint" position={[0, 0, 0]}/>
      <e.pointLight theatreKey="LightPoint2" position={[0, 0, 0]}/>
      <e.pointLight theatreKey="LightPoint3" position={[0, 0, 0]}/>
      <e.pointLight theatreKey="LightPoint4" position={[0, 0, 0]}/>
      <e.pointLight theatreKey="LightPoint5" position={[0, 0, 0]}/>

      <e.mesh theatreKey= "text1">
      <Text 
      color="#fafafa" 
      anchorX="center"
      anchorY='middle'
      font="/fonts/AlegreyaSansSC-Medium.ttf"
      castShadow receiveShadow
      text= 
'Text 1'
       />
      </e.mesh>

      <e.mesh theatreKey= "text2">
      <Text 
      color="#fafafa" 
      anchorX="center"
      anchorY='middle'
      font="/fonts/AlegreyaSansSC-Medium.ttf"
      castShadow receiveShadow
      text= 
'Text 2'
       />
      </e.mesh>

      <e.mesh theatreKey= "text3">
      <Text 
      color="#fafafa" 
      anchorX="center"
      anchorY='middle'
      font="/fonts/AlegreyaSansSC-Medium.ttf"
      castShadow receiveShadow
      text= 
'Text 3'
       />
      </e.mesh>

      <e.mesh theatreKey= "text4">
      <Text 
      color="#fafafa" 
      anchorX="center"
      anchorY='middle'
      font="/fonts/AlegreyaSansSC-Medium.ttf"
      castShadow receiveShadow
      text= 
'Text 4'
       />
      </e.mesh>

      <e.mesh theatreKey= "text5">
      <Text 
      color="#fafafa" 
      anchorX="center"
      anchorY='middle'
      font="/fonts/AlegreyaSansSC-Medium.ttf"
      castShadow receiveShadow
      text= 
'Text 5'
       />
      </e.mesh>



      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  );
  
}
