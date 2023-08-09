'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router =  useRouter();
  return (
    <main className="flex min-h-screen ml-auto items-center justify-between p-24">
  <h1>Home Page</h1>
      <Link href="/login" style={{textDecoration:"none"}}>Go to Login Page</Link>
      <br/>
      <Link href="/about" style={{textDecoration:"none"}}>Go to About Page</Link>
      <br/>

      <br/> <br/>
      <button onClick={()=>router.push("/about/aboutstudent")}>Student</button>
    
<button onClick={()=>alert("Jai Shree Ram")}>Click</button>
    </main>
  )
}


