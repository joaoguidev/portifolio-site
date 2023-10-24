import Hero from "./Hero"
import Navbar from "./Navbar"

import Tech from "./Tech"
import Works from "./Works"
import Feedbacks from "./Feedbacks"
import About from "./About"
import Contact from "./Contact"
import StarsCanvas from "./StarCanvas"
import bgImg from "../assets/herobg.png"
import Experience from "./Experience"
import { cleanContactForm } from "../../model/clean/cleanContact"
import { json } from "@remix-run/cloudflare"
import { useSubmit } from "@remix-run/react"

export const meta = () => {
   return [
      { title: "New Remix App" },
      { name: "description", content: "Welcome to Remix!" },
   ]
}
export default function Index() {
   return (
      <div className="bg-primary relative z-0">
         <div
            className="bg-cover bg-center bg-no-repeat"
            style={{
               backgroundImage: `url(${bgImg})`,
            }}>
            <Navbar />
            {/* <Hero /> */}
         </div>
         {/* <ExperienceO /> */}
         {/* <About /> */}
         {/* <Experience /> */}
         {/* <Tech /> */}
         {/* <Works /> */}
         {/* <Feedbacks /> */}
         <div className="relative z-0">
            <Contact />
            <StarsCanvas />
         </div>
      </div>
   )
}


export const action = async ({ request, context }) => {
   const formData = await request.formData()
   const dirtyData = Object.fromEntries(formData)
   if (dirtyData.lastName) {
      throw new Response('BIP BOP BUP', { status: 404 })
   } 
   const cleandata = await cleanContactForm(dirtyData)
   console.log('cleandata', JSON.stringify(cleandata))
   console.log('GOOGLE_RECAPTCHA_SECRET_KEY', JSON.stringify(context.env.GOOGLE_RECAPTCHA_SECRET_KEY))

   if(cleandata.success){
      const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: `secret=${context.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${cleandata.validatedData.reCaptchaToken}`
      });
      const captchaRes = await captchaResponse.json()
      console.log('CAPTCHAAA ->',JSON.stringify(captchaRes))
      if(!captchaRes.success){
         return json({ success:false, errors:{recaptcha:"Oops! Something went wrong. Try again"}})
      }
   }

   return json(cleandata)
}

export const loader = async ({ request, context }) => {
   return ""
}