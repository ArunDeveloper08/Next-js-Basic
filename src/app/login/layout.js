'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
const layout = ({children}) => {
    const pathname=usePathname();

  return (
    <div>
        {
            pathname!=="/login/teacherlogin"? <h1>  Common layout foe login Page </h1> :""
        }
       
        {
            children
        }
    </div>
  )
}

export default layout;