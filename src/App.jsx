import CreateCourse from "./components/CreateCourse"
import { CoursesContextProvider } from "./providers/CoursesContextProvider"


const App = () => {
  return <>
    <CoursesContextProvider>
      <CreateCourse />
    </CoursesContextProvider>
  </>
}

export default App