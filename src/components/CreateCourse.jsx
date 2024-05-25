import { useState } from "react"

const CreateCourse = () => {

  const [courseName, setCourseName] = useState("")
  const [courseDescription, setCourseDescription] = useState("")

  const captureCourseName = (event) => {
    setCourseName(event.target.value)
  }

  const captureCourseDescription = (event) => {
    setCourseDescription(event.target.value)
  }

  return <>
    <input type="text" placeholder="Enter Course Name" onChange={captureCourseName}/>
    <input type="text" placeholder="Enter Course Desc" onChange={captureCourseDescription}/>
    <p>{courseName}</p>
    <p>{courseDescription}</p>
  </>
}

export default CreateCourse
