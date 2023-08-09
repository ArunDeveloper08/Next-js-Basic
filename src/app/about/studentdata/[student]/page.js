'use client'

const page = ({params}) => {
  return (
    <div>
        <h1>Student Details</h1>
        <h1> Name: {params.student}</h1>
    </div>
  )
}

export default page