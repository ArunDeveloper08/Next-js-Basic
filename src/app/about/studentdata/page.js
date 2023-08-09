'use client'
import Link from "next/link"

const page = () => {
    const data=["Arun","Abhishek","Bhanu","Priyanshu","Vishal"];
  return (
    <div>
 <h1> Student List</h1>
 {/* <ul>
    <li><Link href="/about/studentdata/Arun">Arun </Link></li>
    <li><Link href="/about/studentdata/Bhanu">Bhanu </Link></li>
    <li><Link href="/about/studentdata/Priyanshu">Priyanshu </Link></li>
    <li><Link href="/about/studentdata/Abhishek">Abhishek </Link></li>
    <li><Link href="/about/studentdata/Vishal">Vishal </Link></li>
 </ul> */}
 {
    data.map((item,index)=>{
        return(
            <>
            <ul>
                <li><Link href={`/about/studentdata/${item}`} style={{textDecoration:"none"}}> {item} </Link></li>
            </ul>
            </>
        )
    })
 }

    </div>
  )
}

export default page