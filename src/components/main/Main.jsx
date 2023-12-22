import { useState, useEffect } from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Main(){
  let [project, setProject] = useState([])
  let [notification, setNotification] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/project')
    .then(response => setProject(response.data))
  })
  useEffect(()=>{
    axios.get('http://localhost:5000/notification')
    .then(response => setNotification(response.data))
  })

  return(
    <div className="lg:mr-80 p-5 text-blue-600">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">عنوان پروژه</StyledTableCell>
              <StyledTableCell align="left">وضعیت</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {project.map(item => (
              <StyledTableRow key={item.id}>
                <StyledTableCell align="right">{item.topic}</StyledTableCell>
                <StyledTableCell align="left">{item.situation}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="h-full overflow-x-auto mt-8 p-12 text-center flex flex-col flex-wrap lg:flex-row gap-y-20 items-center justify-between border-4 border-gray-400 border-dashed rounded">
        {notification.map(item => (
          <div key={item.id} className="p-12 break-words border-2 border-dashed rounded">
            <h3 className='font-bold text-red-700'>{item.topic}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div> 
  )
}

export default Main