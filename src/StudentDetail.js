import React from 'react'

const StudentDetail = (props) => {
  return (
    <div>
        <h1>Student Details</h1>
        <h1>{props.name}</h1>
        <h1>{props.tele}</h1>


    </div>
  )
}

export default StudentDetail