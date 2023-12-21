import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import Swal from 'sweetalert2'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function ReportProject() {
  const [formData, setFormData] = useState({})
  const navigator = useNavigate()

  const formHandler = (event) => {
    setFormData({...formData , [event.target.name]:event.target.value})
  }
  const clickHandler = () => {
    axios.post('http://localhost:5000/project',formData)
    // پیام موفقیت
    .then(res => {
      console.log(res.status)
      if(res.status === 201){
        Swal.fire({
          icon: 'success',
          title: 'درخواست ارسال شد',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500
        })
        navigator('/home')
      }
  })}

  return (
    <Box className="lg:mr-80 p-5 flex flex-col justify-center gap-y-5">
      <div className='flex justify-between'>
        <TextField
          onChange={formHandler}
          color='secondary'
          name='topic'
          label="موضوع"
          size='small'
          maxRows={1}
          variant="standard"
        />
        <Button onClick={clickHandler} variant="contained" >ارسال</Button>
      </div>

      <TextField
        onChange={formHandler}
        color='secondary'
        name='discription'
        label="توضیحات"
        multiline
        rows={10}
        defaultValue=""
      />
    </Box>
  )
}

export default ReportProject