import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { github, carrent, jobit, tripguide } from "../assets"
import StarWrapper from "../globalComponents/SectionWrapper"
import { fadeIn, textVariant } from "../utils/motion"

const projects = [
   {
      name: "Car Rent",
      description:
         "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "mongodb",
            color: "green-text-gradient",
         },
         {
            name: "tailwind",
            color: "pink-text-gradient",
         },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
   },
   {
      name: "Job IT",
      description:
         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "restapi",
            color: "green-text-gradient",
         },
         {
            name: "scss",
            color: "pink-text-gradient",
         },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
   },
   {
      name: "Trip Guide",
      description:
         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
         {
            name: "nextjs",
            color: "blue-text-gradient",
         },
         {
            name: "supabase",
            color: "green-text-gradient",
         },
         {
            name: "css",
            color: "pink-text-gradient",
         },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
   },
]

const ProjectCard = ({
   index,
   name,
   description,
   tags,
   image,
   source_code_link,
}) => {
   return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
         <Tilt
            options={{
               max: 45,
               scale: 1,
               speed: 450,
            }}
            className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]">
            <div className="relative h-[230px] w-full">
               <img
                  src={image}
                  alt="project_image"
                  className="h-full w-full rounded-2xl object-cover"
               />

               <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                  <div
                     onClick={() => window.open(source_code_link, "_blank")}
                     className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
                     <img
                        src={github}
                        alt="source code"
                        className="h-1/2 w-1/2 object-contain"
                     />
                  </div>
               </div>
            </div>

            <div className="mt-5">
               <h3 className="text-[24px] font-bold text-white">{name}</h3>
               <p className="mt-2 text-[14px] text-secondary">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
               {tags.map((tag) => (
                  <p
                     key={`${name}-${tag.name}`}
                     className={`text-[14px] ${tag.color}`}>
                     #{tag.name}
                  </p>
               ))}
            </div>
         </Tilt>
      </motion.div>
   )
}

export default function Works() {
   return (
      <>
         <StarWrapper idName={"about"}>
            <motion.div variants={textVariant()}>
               <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
                  My work
               </p>
               <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
                  Projects.
               </h2>
            </motion.div>

            <div className="flex w-full">
               <motion.p
                  variants={fadeIn("", "", 0.1, 1)}
                  className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary">
                  Following projects showcases my skills and experience through
                  real-world examples of my work. Each project is briefly
                  described with links to code repositories and live demos in
                  it. It reflects my ability to solve complex problems, work
                  with different technologies, and manage projects effectively.
               </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
               {projects.map((project, index) => (
                  <ProjectCard
                     key={`project-${index}`}
                     index={index}
                     {...project}
                  />
               ))}
            </div>
         </StarWrapper>
      </>
   )
}
