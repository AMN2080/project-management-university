import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'

let Routes = [
  {path:'/' , element:<Login />},
  {path:'/home' , element:<Dashboard />}
]

export default Routes