import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"

export default function StarWrapper ({children, idName}) {
   return (
      <motion.section
         variants={staggerContainer()}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.25 }}
         className={`relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16`}>
         <span className="hash-span" id={idName}>
            &nbsp;
         </span>

         {children}
      </motion.section>
   )
}
