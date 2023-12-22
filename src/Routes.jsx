import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ReportProject from './pages/reportProject/ReportProject'
import AddProject from './pages/addProject/AddProject'
import NotFound from './pages/notFound/NotFound'
import Projects from './pages/projects/Projects'
import ProjectDetails from './pages/projectDetails/ProjectDetails'

let Routes = [
  {path:'/' , element:<Login />},
  {path:'/home' , element:<Dashboard />},
  {path:'/report-project' , element:<ReportProject />},
  {path:'/create-project' , element:<AddProject />},
  {path:'/projects' , element:<Projects />},
  {path:'/project-details/:projectID' , element:<ProjectDetails />},
  {path:'/*' , element:<NotFound />},
]

export default Routes