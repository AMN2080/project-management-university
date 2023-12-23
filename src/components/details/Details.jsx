import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios"
import Swal from 'sweetalert2'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Details() {
  const projectID = useParams().projectID
  const navigator = useNavigate()
  let [project, setProject] = useState([])

  const acceptHandler = () => {
    axios.patch(`http://localhost:5000/project/${projectID}`,{"situation":"تایید استاد"})
    .then(res => {
      if(res.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'عملیات موفقیت آمیز بود',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500
        })
        navigator('/home')
      }
    })
  }
  const rejectHandler = () => {
    axios.patch(`http://localhost:5000/project/${projectID}`,{"situation":"رد استاد"})
    .then(res => {
      if(res.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'عملیات موفقیت آمیز بود',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500
        })
        navigator('/home')
      }
    })
  }

  useEffect(()=>{
    axios.get(`http://localhost:5000/project/${projectID}`)
    .then(response => setProject(response.data))
  })

  return (
    <Box className="lg:mr-80 p-5 flex flex-col justify-center gap-y-5">
      <div className='flex justify-between'>
        <div className='flex flex-col gap-y-3'>
          <Typography fontWeight="bold" variant="p">عنوان: {project.topic}</Typography>
          <Typography fontWeight="bold" variant="p">نام دانشجو: {project.user}</Typography>
        </div>
        <div className='flex flex-col gap-y-3'>
          <Button onClick={acceptHandler} variant="contained" >تایید</Button>
          <Button onClick={rejectHandler} sx={{ backgroundColor: 'red','&:hover': {backgroundColor: '#aa2e25'}}} variant="contained" >رد</Button>
        </div>
      </div>

      <Typography mt={1} fontWeight="bold" variant="h5">توضیحات:</Typography>
      <Typography>{project.discription}</Typography>

      <Typography mt={2} fontWeight="bold" variant="h5">گزارش اول:</Typography>
      <Typography>{project.report}</Typography>

      <Typography mt={2} fontWeight="bold" variant="h5">گزارش دوم:</Typography>
      <Typography>{project.report}</Typography>
    </Box>
  )
}

export default Details