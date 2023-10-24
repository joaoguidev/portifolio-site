import React from "react"
import { BallCanvas } from "../assets/canvas"
import StarWrapper from "../globalComponents/SectionWrapper"
import {
   javascript,
   typescript,
   html,
   css,
   reactjs,
   redux,
   tailwind,
   nodejs,
   mongodb,
   git,
   figma,
   docker,
   threejs,
} from "../assets"

const technologies = [
   {
      name: "HTML 5",
      icon: html,
   },
   {
      name: "CSS 3",
      icon: css,
   },
   {
      name: "JavaScript",
      icon: javascript,
   },
   {
      name: "TypeScript",
      icon: typescript,
   },
   {
      name: "React JS",
      icon: reactjs,
   },
   {
      name: "Redux Toolkit",
      icon: redux,
   },
   {
      name: "Tailwind CSS",
      icon: tailwind,
   },
   {
      name: "Node JS",
      icon: nodejs,
   },
   {
      name: "MongoDB",
      icon: mongodb,
   },
   {
      name: "Three JS",
      icon: threejs,
   },
   {
      name: "git",
      icon: git,
   },
   {
      name: "figma",
      icon: figma,
   },
   {
      name: "docker",
      icon: docker,
   },
]

export default function Tech() { 
   return (
      <StarWrapper idName={"Tech"}>
         <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
               <div className="h-28 w-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
               </div>
            ))}
         </div>
      </StarWrapper>
   )
}
