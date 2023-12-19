import Menu from "../../components/menu/Menu"
import Navbar from "../../components/navbar/Navbar"
import Main from "../../components/main/Main"

function Dashboard() {
  return (
    <div className="flex flex-col">
      <Menu />
      <Navbar />
      <Main />
    </div>
  )
}

export default Dashboard