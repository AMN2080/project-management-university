import Menu from "../../components/menu/Menu"
import Navbar from "../../components/navbar/Navbar"
import Add from "../../components/add/Add"

function AddProject() {
  return (
    <div className="flex flex-col">
      <Menu />
      <Navbar />
      <Add />
    </div>
  )
}

export default AddProject