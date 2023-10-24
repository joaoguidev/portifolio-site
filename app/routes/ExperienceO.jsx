import StarWrapper from "../globalComponents/SectionWrapper"
import { textVariant } from "../utils/motion"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import { meta, starbucks, tesla, shopify } from "../assets"
import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html } from "@react-three/drei"

const experiences = [
   {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: ["aa."],
   },
]

function ScrollContainer({ scroll, children }) {
   const { viewport } = useThree()
   const group = useRef()
   useFrame((state, delta) => {
      group.current.position.y = THREE.MathUtils.damp(
         group.current.position.y,
         viewport.height * scroll.current,
         4,
         delta,
      )
   })
   return <group ref={group}>{children}</group>
}

function Scene() {
   const viewport = useThree((state) => state.viewport)
   return (
      <>
         <Box text={<span>This is HTML</span>} color="aquamarine" />
         <Box
            text={<h1>H1 caption</h1>}
            color="lightblue"
            position={[0, -viewport.height, 0]}
         />
      </>
   )
}

function Box({ text, color, ...props }) {
   const [hovered, set] = useState(false)
   return (
      <mesh
         {...props}
         onPointerOver={(e) => set(true)}
         onPointerOut={(e) => set(false)}>
         <boxGeometry args={[2, 2, 2]} />
         <meshStandardMaterial color={hovered ? "hotpink" : color} />
         <Html position={[0, 0, 1]} className="label" center>
            {text}
         </Html>
      </mesh>
   )
}

export default function Experience() {
   const scrollRef = useRef()
   const scroll = useRef(0)
   const [canvasHeight, setCanvasHeight] = useState("100vh")

   const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop
      const scrollHeight = e.target.scrollHeight
      const clientHeight = e.target.clientHeight
      console.log(
         "scrollTop",
         scrollTop,
         "scrollHeight",
         scrollHeight,
         "clientHeight",
         clientHeight,
      )
      if (scrollTop + clientHeight < scrollHeight) {
         scroll.current = scrollTop / (scrollHeight - clientHeight)
      } else {
         setCanvasHeight(clientHeight)
      }
   }
   return (
      <>
         <div className="relative">
            <Canvas>
               <ambientLight />
               <pointLight position={[10, 0, 10]} />
               <ScrollContainer scroll={scroll}>
                  <Scene />
               </ScrollContainer>
            </Canvas>
            <div
               ref={scrollRef}
               // onScroll={handleScroll}
               onScroll={(e) => {
                  const scrollTop = e.target.scrollTop
                  const scrollHeight = e.target.scrollHeight
                  const clientHeight = e.target.clientHeight
                  console.log(
                     "scrollTop",
                     scrollTop,
                     "scrollHeight",
                     scrollHeight,
                     "clientHeight",
                     clientHeight,
                  )
                  // (scroll.current =
                  //    e.target.scrollTop /
                  //    (e.target.scrollHeight - e.target.clientHeight))
               }}
               className="absolute left-0 top-0 h-screen w-full overflow-y-auto">
               <div style={{ height: `200vh`, pointerEvents: "none" }}></div>
            </div>
         </div>
      </>
   )
}
