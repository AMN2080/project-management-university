import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function ReportProject() {
  const [project, setProject] = useState([]);
  const [selectValue, setSelectValue] = useState()
  const [formData, setFormData] = useState({})
  const navigator = useNavigate()

  const formHandler = (event) => {
    setFormData({...formData , [event.target.name]:event.target.value})
  }

  const clickHandler = () => {
    axios.patch(`http://localhost:5000/project/${selectValue}`,formData)
    // پیام موفقیت
    .then(res => {
      if(res.status === 201){
        Swal.fire({
          icon: 'success',
          title: 'گزارش ارسال شد',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500
        })
        navigator('/home')
      }
  })}

  const selectHandler = (event) => {
    setSelectValue(event.target.value);
  };

  useEffect(()=>{
    axios.get('http://localhost:5000/project')
    .then(response => setProject(response.data))
  })

  return (
    <div className='lg:mr-80 p-5 flex flex-col justify-center'>
      <FormControl className='gap-y-5'>
        <InputLabel id="project-name" color='secondary'>نام پروژه</InputLabel>
        <Select
          color='secondary'
          value={selectValue}
          label="نام پروژه"
          onChange={selectHandler}
        >
          {project.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.topic}</MenuItem>
            ))}
        </Select>

        <TextField
          onChange={formHandler}
          color='secondary'
          name='report'
          label="گزارش"
          multiline
          rows={10}
          defaultValue=""
        />
        <Button onClick={clickHandler} variant="contained" >ارسال</Button>
      </FormControl>
    </div>
  )
}

export default ReportProject