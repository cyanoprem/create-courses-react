import { useState, useContext } from "react"
import { coursesContext } from "../providers/CoursesContextProvider"

const CreateCourse = () => {

  const [courseName, setCourseName] = useState("")
  const [courseDescription, setCourseDescription] = useState("")

  const {createCourse} = useContext(coursesContext)

  const captureCourseName = (event) => {
    setCourseName(event.target.value)
  }

  const captureCourseDescription = (event) => {
    setCourseDescription(event.target.value)
  }

  const createCourseFn = () => {
    createCourse(courseName, courseDescription)
    setCourseName("")
    setCourseDescription("")
  }

  return <>
    <input type="text" placeholder="Enter Course Name" onChange={captureCourseName} value={courseName}/>
    <input type="text" placeholder="Enter Course Desc" onChange={captureCourseDescription} value={courseDescription}/>
    <button onClick={createCourseFn}>Create Course</button>
  </>
}

export default CreateCourse
