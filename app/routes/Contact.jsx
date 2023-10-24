import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import ReCAPTCHA from "react-google-recaptcha"
import { EarthCanvas } from "../assets/canvas"
import SectionWrapper from "../globalComponents/SectionWrapper"
import { slideIn } from "../utils/motion"
import {
   Form,
   useActionData,
   useOutletContext,
   useSubmit,
} from "@remix-run/react"

export default function Contact() {
   const outletContextData = useOutletContext()
   const actionData = useActionData()
   console.log("actionData--------->", actionData)
   const submit = useSubmit()
   const captchaRef = useRef(null)
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
      lastName: "",
   })

   const onChange = async (value) => {
      if (value) {
         // Submit the form here
         formData.formName = "contact"
         formData.reCaptchaToken = value
         console.log(formData)
         //Honeypot return if filled
         if (formData.lastName) {
            return
         }
         if (formData?.reCaptchaToken) {
            alert("aaaa")
            await submit(formData, { method: "POST" })
         }
         return
         // setState('submitting')
      }
   }
   return (
      <SectionWrapper idName={"contact"}>
         <div
            className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
            <motion.div
               variants={slideIn("left", "tween", 0.2, 1)}
               className="flex-[0.75] rounded-2xl bg-black-100 p-8">
               <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
                  Get in touch
               </p>
               <h3 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
                  Contact.
               </h3>
               <Form
                  onSubmit={() => {
                     captchaRef.current.execute()
                  }}
                  className="mt-12 flex flex-col gap-8">
                  <input
                     className="hidden"
                     type="text"
                     name="lastName"
                     tabIndex="-1"
                     autoComplete="off"
                     value={formData.lastName}
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           lastName: e.target.value,
                        })
                     }
                  />
                  <label className="flex flex-col">
                     <span className="mb-4 font-medium text-white">
                        Your Name
                     </span>
                     <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                           setFormData({
                              ...formData,
                              name: e.target.value,
                           })
                        }
                        placeholder="What's your name?"
                        className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                        aria-invalid={
                           actionData?.errors?.name ? true : undefined
                        }
                        aria-describedby="invalidName"
                     />
                     {actionData?.errors?.name && (
                        <div
                           id="invalidName"
                           className="bg mt-1 inline-block w-fit items-center rounded-md bg-red-100 px-3 text-sm text-red-700">
                           {actionData?.errors?.name}
                        </div>
                     )}
                  </label>
                  <label className="flex flex-col">
                     <span className="mb-4 font-medium text-white">
                        Your email
                     </span>
                     <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                           setFormData({
                              ...formData,
                              email: e.target.value,
                           })
                        }
                        placeholder="What's your email?"
                        className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                        aria-invalid={
                           actionData?.errors?.email ? true : undefined
                        }
                        aria-describedby="invalidEmail"
                     />
                     {actionData?.errors?.email && (
                        <div
                           id="invalidEmail"
                           className="bg mt-1 inline-block w-fit items-center rounded-md bg-red-100 px-3 text-sm text-red-700">
                           {actionData?.errors?.email}
                        </div>
                     )}
                  </label>
                  <label className="flex flex-col">
                     <span className="mb-4 font-medium text-white">
                        Your Message
                     </span>
                     <textarea
                        required
                        maxLength={10000}
                        rows={7}
                        name="message"
                        value={formData.message}
                        onChange={(e) =>
                           setFormData({
                              ...formData,
                              message: e.target.value,
                           })
                        }
                        placeholder="What you want to say?"
                        className="resize-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                        aria-invalid={
                           actionData?.errors?.message ? true : undefined
                        }
                        aria-describedby="invalidMessage"
                     />
                     {actionData?.errors?.message && (
                        <div
                           id="invalidMessage"
                           className="bg mt-1 inline-block w-fit items-center rounded-md bg-red-100 px-3 text-sm text-red-700">
                           {actionData?.errors?.message}
                        </div>
                     )}
                  </label>

                  <button
                     type="submit"
                     className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none">
                     {/* {loading ? "Sending..." : "Send"} */} Send
                  </button>

                  <ReCAPTCHA
                     badge="inline"
                     style={{ display: "inline-block" }}
                     size="invisible"
                     ref={captchaRef}
                     sitekey={outletContextData.GOOGLE_RECAPTCHA_PUBLIC_KEY}
                     onChange={onChange}
                     theme={"dark"}
                  />
                  {actionData?.errors?.recaptcha && (
                     <div
                        id="invalidRecaptcha"
                        className="bg mt-3 inline-block w-fit items-center rounded-md bg-red-100 px-3 text-sm text-red-700">
                        {actionData?.errors?.recaptcha}
                     </div>
                  )}
               </Form>
            </motion.div>

            <motion.div
               variants={slideIn("right", "tween", 0.2, 1)}
               className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1">
               <EarthCanvas />
            </motion.div>
         </div>
      </SectionWrapper>
   )
}
