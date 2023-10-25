import { cssBundleHref } from "@remix-run/css-bundle"
import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from "@remix-run/react"
import stylesheet from "~/tailwind.css"

export const links = () => [{ rel: "stylesheet", href: stylesheet }]

export default function App() {
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
         <body className="m-0 w-[100vw] h-[100vh]">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
         </body>
      </html>
   )
}
