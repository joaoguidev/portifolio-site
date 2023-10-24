import { ComputersCanvas } from "../assets/canvas/Computers"
import { motion } from "framer-motion"

export default function Hero() {
   return (
      <section className={`relative mx-auto h-screen w-full`}>
         <div
            className={`absolute inset-0 top-[120px] mx-auto max-w-7xl sm:px-16 px-6 flex flex-row items-start gap-5`}>
            <div className="mt-5 flex flex-col items-center justify-center">
               <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
               <div className="violet-gradient h-40 w-1 sm:h-80" />
            </div>
            <div>
               <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>
                  Hi, I'm <span className="text-[#915EFF]">Joao</span>
               </h1>
               <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]`}>
                  I develop Full Stack solutions <br className="hidden sm:block" />
                  connecting users to 
               </p>
            </div>
         </div>

         <ComputersCanvas />

         <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
            <a href="#about">
               <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
                  <motion.div
                     animate={{
                        y: [0, 24, 0],
                     }}
                     transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                     }}
                     className="bg-secondary mb-1 h-3 w-3 rounded-full"
                  />
               </div>
            </a>
         </div>
      </section>
   )
}
