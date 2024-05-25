import { createContext } from "react"

const coursesContext = createContext({
  createCourse: async () => {}
})

const CoursesContextProvider = ({children}) => {

  const createCourse = async (courseName, courseDescription) => {
    const response = await fetch('http://localhost:8000/courses', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        courseName: courseName,
        courseDescription: courseDescription
      })
    })

    const data = await response.json()

    console.log(data.message)
  }


  return <>
    <coursesContext.Provider value={{createCourse}}>
      {children}
    </coursesContext.Provider>
  </>
}

export { CoursesContextProvider, coursesContext }