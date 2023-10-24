import {
   Links,
   Meta,
   Outlet,
   Scripts,
   LiveReload,
   useMatches,
   useRouteError,
   ScrollRestoration,
   isRouteErrorResponse,
   useLoaderData,
} from "@remix-run/react"
import stylesheet from "./tailwind.css"
import { json } from "@remix-run/cloudflare"

// This is important to avoid re-fetching root queries on sub-navigations
export const shouldRevalidate = ({ formMethod, currentUrl, nextUrl }) => {
   // revalidate when a mutation is performed e.g add to cart, login...
   if (formMethod && formMethod !== "GET") {
      return true
   }

   // revalidate when manually revalidating via useRevalidator
   if (currentUrl.toString() === nextUrl.toString()) {
      return true
   }
   return false
}

export const links = () => [{ rel: "stylesheet", href: stylesheet }]

export default function App() {
   const loaderData = useLoaderData()
   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <Meta />
            <Links />
         </head>
         <body>
            <Outlet context={loaderData} />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
         </body>
      </html>
   )
}

export const loader = async ({ request, context }) => {
   return json({
      GOOGLE_RECAPTCHA_PUBLIC_KEY: context.env.GOOGLE_RECAPTCHA_PUBLIC_KEY,
   })
}

export function ErrorBoundary() {
   const error = useRouteError()
   const [root] = useMatches()
   let errorMessage = "Unknown error"
   let errorStatus = 500

   if (isRouteErrorResponse(error)) {
      errorMessage = error?.data?.message ?? error.data
      errorStatus = error.status
   } else if (error instanceof Error) {
      errorMessage = error.message
   }

   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width,initial-scale=1"
            />
            <Meta />
            <Links />
         </head>
         <body>
            <div className="route-error">
               <h1>Oops</h1>
               <h2>{errorStatus}</h2>
               {errorMessage && (
                  <fieldset>
                     <pre>{errorMessage}</pre>
                  </fieldset>
               )}
            </div>

            <ScrollRestoration />
            <Scripts />
            <LiveReload />
         </body>
      </html>
   )
}
