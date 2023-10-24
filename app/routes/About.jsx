import { motion } from "framer-motion"
import React from "react"
import { fadeIn, textVariant } from "../utils/motion"
import { Tilt } from "react-tilt"
import { mobile, backend, creator, web } from "../assets"
import SectionWrapper from '../globalComponents/SectionWrapper'


const services = [
   {
      title: "Web Developer",
      icon: web,
   },
   {
      title: "React Native Developer",
      icon: mobile,
   },
   {
      title: "Backend Developer",
      icon: backend,
   },
   {
      title: "Content Creator",
      icon: creator,
   },
]

const ServiceCard = ({ index, title, icon }) => (
   <Tilt className="w-full xs:w-[250px]">
      <motion.div
         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
         className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card">
         <div
            options={{
               max: 45,
               scale: 1,
               speed: 450,
            }}
            className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
            <img
               src={icon}
               alt="web-development"
               className="h-16 w-16 object-contain"
            />

            <h3 className="text-center text-[20px] font-bold text-white">
               {title}
            </h3>
         </div>
      </motion.div>
   </Tilt>
)

export default function About() {
   return (
      <>
         <SectionWrapper idName={"about"}>
            <motion.div variants={textVariant()}>
               <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
               <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
            </motion.div>

            <motion.p
               variants={fadeIn("", "", 0.1, 1)}
               className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary">
               I'm a skilled software developer with experience in TypeScript
               and JavaScript, and expertise in frameworks like React, Node.js,
               and Three.js. I'm a quick learner and collaborate closely with
               clients to create efficient, scalable, and user-friendly
               solutions that solve real-world problems. Let's work together to
               bring your ideas to life!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
               {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
               ))}
            </div>
         </SectionWrapper>
      </>
   )
}
