import { createContext } from "react"

const coursesContext = createContext({
  createCourse: async () => {}
})

const CoursesContextProvider = ({children}) => {

  const createCourse = () => {

  }


  return <>
    <coursesContext.Provider value={{createCourse}}>
      {children}
    </coursesContext.Provider>
  </>
}

export { CoursesContextProvider, coursesContext }