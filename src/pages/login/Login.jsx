import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
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
          <TextField label="نام کاربری" variant="filled" />
          <TextField label="رمز عبور" variant="filled" type="password" />
          <Button className='w-72 mt-5' variant="contained">ورود</Button>
      </Box>
    </div>
  )
}

export default Login;