import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ReportProject from './pages/reportProject/ReportProject'
import AddProject from './pages/addProject/AddProject'
import NotFound from './pages/notFound/NotFound'

let Routes = [
  {path:'/' , element:<Login />},
  {path:'/home' , element:<Dashboard />},
  {path:'/report-project' , element:<ReportProject />},
  {path:'/create-project' , element:<AddProject />},
  {path:'/*' , element:<NotFound />},
]

export default Routes