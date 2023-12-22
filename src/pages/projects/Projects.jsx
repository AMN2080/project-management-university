import Menu from "../../components/menu/Menu"
import Navbar from "../../components/navbar/Navbar"
import StudentsProjects from "../../components/studentsProjects/StudentsProjects"

function Projects() {
  return (
    <div className="flex flex-col">
      <Menu />
      <Navbar />
      <StudentsProjects />
    </div>
  )
}

export default Projects