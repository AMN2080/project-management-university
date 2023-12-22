import Menu from "../../components/menu/Menu"
import Navbar from "../../components/navbar/Navbar"
import Details from '../../components/details/Details'

function ProjectDetails() {
  return (
    <div className="flex flex-col">
      <Menu />
      <Navbar />
      <Details />
    </div>
  )
}

export default ProjectDetails