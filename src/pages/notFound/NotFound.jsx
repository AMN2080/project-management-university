import IMG404 from '../../assets/img/404.svg'
import Button from '@mui/material/Button'

function Dashboard() {
  return (
    <div className="h-[100vh] flex flex-col items-center bg-center">
      <img className='w-6/12 drop-shadow-2xl' src={IMG404} alt="not found" />
      <p className='mb-3'>اوپس... انگار این صفحه وجود نداره!</p>
      <Button variant="contained" href='/' >صفحه ورود</Button>
    </div>
  )
}

export default Dashboard