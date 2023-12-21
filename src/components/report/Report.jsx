import { useEffect, useState } from 'react';
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function ReportProject() {
  const [project, setProject] = useState([]);
  const [selectValue, setSelectValue] = useState("")

  const handleChange = (event) => {
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
          labelId="project-name"
          value={selectValue}
          label="نام پروژه"
          onChange={handleChange}
        >
          {project.map((item) => (
            <MenuItem key={item.id} value={"گزارش " + item.topic}>{item.topic}</MenuItem>
            ))}
        </Select>

        <TextField
          color='secondary'
          label="گزارش"
          multiline
          rows={10}
          defaultValue=""
        />
        <Button variant="contained" >ارسال</Button>
      </FormControl>
    </div>
  )
}

export default ReportProject