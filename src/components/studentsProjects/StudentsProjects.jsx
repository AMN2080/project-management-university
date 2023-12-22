import { useState, useEffect } from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button'
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

function StudentsProjects(){
  let [project, setProject] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/project')
    .then(response => setProject(response.data))
  })

  return(
    <div className="lg:mr-80 p-5 text-blue-600">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">نام دانشجو</StyledTableCell>
              <StyledTableCell align="center">عنوان</StyledTableCell>
              <StyledTableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            {project.map(item => (
              <StyledTableRow key={item.id}>
                <StyledTableCell align="center">{item.user}</StyledTableCell>
                <StyledTableCell align="center">{item.topic}</StyledTableCell>
                <StyledTableCell align="center"><Button color='secondary' href={`/project-details/${item.id}`}>جزئیات</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div> 
  )
}

export default StudentsProjects