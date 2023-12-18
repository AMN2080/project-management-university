import Navbar from "../../components/navbar/Navbar"
import Offcanvas from "../../components/offcanvas/Offcanvas"
import Main from "../../components/main/Main"

function Dashboard() {
  return (
    <div className="flex flex-col">
      <Offcanvas />
      <Navbar />
      <Main />
    </div>
  )
}

export default Dashboard