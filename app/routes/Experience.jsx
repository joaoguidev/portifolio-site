import { meta, starbucks, tesla, shopify } from "../assets"
import React from "react"
import SectionWrapper from "../globalComponents/SectionWrapper"
import { textVariant } from "../utils/motion"
import {
   VerticalTimeline,
   VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"

const experiences = [
   {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
         "AAA.",
         "BBB",
         "cccc",
         "dddd",
      ],
   },
   {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
         "AAA.",
         "BBB",
         "cccc",
         "dddd",
      ],
   },
   {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
         "AAA.",
         "BBB",
         "cccc",
         "dddd",
      ],
   },
   {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
         "AAA.",
         "BBB",
         "cccc",
         "dddd",
      ],
   },
]

const ExperienceCard = ({ experience }) => {
   return (
      <VerticalTimelineElement
         contentStyle={{
            background: "#1d1836",
            color: "#fff",
         }}
         contentArrowStyle={{ borderRight: "7px solid  #232631" }}
         date={experience.date}
         iconStyle={{ background: experience.iconBg }}
         icon={
            <div className="flex h-full w-full items-center justify-center">
               <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="h-[60%] w-[60%] object-contain"
               />
            </div>
         }>
         <div>
            <h3 className="text-[24px] font-bold text-white">
               {experience.title}
            </h3>
            <p className="text-[16px] font-semibold text-secondary">
               {experience.company_name}
            </p>
         </div>

         <ul className="ml-5 mt-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
               <li
                  key={`experience-point-${index}`}
                  className="pl-1 text-[14px] tracking-wider text-white-100">
                  {point}
               </li>
            ))}
         </ul>
      </VerticalTimelineElement>
   )
}

export default function Experience() {
   return (
      <>
         <SectionWrapper idName={"experience"}>
            <motion.div variants={textVariant()}>
               <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
                  What I have done so far section
               </p>
               <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
                  Work Experience. section
               </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
               <VerticalTimeline animate={true} visible={true}>
                  {experiences.map((experience, index) => (
                     <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                     />
                  ))}
               </VerticalTimeline>
            </div>
         </SectionWrapper>
      </>
   )
}
