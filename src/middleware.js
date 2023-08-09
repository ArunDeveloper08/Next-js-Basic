 import { NextResponse } from "next/server"

 export  const middleware=(req,res)=>{
    console.log("you have no right to access this page")
    return NextResponse.redirect(new URL("/",req.url)) 
 }

 export const config={
    matcher:"/about/:path*"
 }


