import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



const isProtectedRouter = createRouteMatcher(['/dashboard'])
export default clerkMiddleware(async (auth, req) => {
   const {userId,} = await auth()

   if(!userId && isProtectedRouter(req)) {

     
     const signInUrl = new URL('/auth/sign-in', req.url)

     signInUrl.searchParams.set('redirectUrl', req.url)
     signInUrl.searchParams.set('from', 'protected')


     
     return NextResponse.redirect(signInUrl)
   }

   return NextResponse.next()
   

});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};