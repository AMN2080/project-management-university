import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Menu(){
  let [menu, setMenu] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/menu')
    .then(response => setMenu(response.data))
  })

  return(
    <Box bgcolor="primary.main" className="hidden text-white lg:block fixed w-80 h-full space-y-4 p-5">
      <List>
        <ListItem disablePadding>
          <Link className='w-full' to='/home'>
            <ListItemButton>
                <ListItemIcon className="flex justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 pl-2 text-indigo-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="داشبورد" />
            </ListItemButton>
          </Link>
        </ListItem>
        {menu.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link className='w-full' to={item.route}>
              <ListItemButton>
                <ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 pl-2 text-indigo-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.dSVG} />
                  </svg>
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton href='/'>
            <ListItemIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 pl-2 text-indigo-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="خروج" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Menu