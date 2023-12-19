import {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()
  const submitHandler = () =>{
    if(username === 'student' && password === '12345'){
      document.cookie = "username=student";
      navigate('/home')
    }else{
      Swal.fire({
        icon: 'error',
        title: 'اوپس',
        text: 'نام کاربری یا رمز اشتباهه',
        confirmButtonText: 'تلاش دوباره'
      })
    }
  }

  return (
    <div className="h-[100vh] flex items-center justify-center bg-[url(./assets/img/login-background.svg)] bg-center">
      <Box dir='ltr' className='w-96 py-8 rounded-3xl flex items-center flex-col gap-y-4 justify-center bg-rgba shadow border'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
          <TextField onChange={(e) => setUsername(e.target.value)} label="نام کاربری" variant="filled" />
          <TextField onChange={(e) => setPassword(e.target.value)} label="رمز عبور" variant="filled" type="password" />
          <Button onClick={submitHandler} className='w-72 mt-5' variant="contained">ورود</Button>
      </Box>
    </div>
  )
}

export default Login;