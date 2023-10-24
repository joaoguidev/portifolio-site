import { nullable, z } from "zod";

const ContactInfo = z.object({
   name: z.string().min(1, { message: "Name required" }).max(100, { message: "Name too long" }),
   email: z.string().trim().toLowerCase().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }).max(90, { message: "Email too long" }),
   message: z.string().min(1, { message: "Message Required" }).max(50000, { message: "Message too long" }),
   reCaptchaToken: z.string().min(1, { recaptcha: "Recaptcha Required" }).max(10000, { recaptcha: "Recaptcha too long" }),
});

export async function cleanContactForm(dirtyData) {
   try {
      const data = ContactInfo.parse(dirtyData)
      return { success: true, errors: null, validatedData: data }
   } catch (error) {
      const formattedErrors = error.issues.reduce((acc, curr) => {
         acc[curr.path[0]] = curr.message;
         return acc;
     }, {})
     return { success: false, errors: formattedErrors }
   }
}
