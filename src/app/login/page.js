'use client'
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const Login=()=>{
    const router=useRouter();
  
    return(
        <>
        <h1>Login Page</h1>
        <button onClick={()=>router.push("/login/studentlogin")}>Student login</button>
        <button onClick={()=>router.push("/login/teacherlogin")}>Teacher login</button>
        </>
    )
}
export default Login;