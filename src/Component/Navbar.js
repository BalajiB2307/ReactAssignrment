import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function Navbar() {
  return (
    <div className='loginBanner'>
      
        <nav className='loginBanner'>
        
         <Box mr={2}>
           <Typography component={Link} to="/" variant="button" color = "yellow"><strong>Add Contact</strong></Typography>
        </Box>
          <Typography component={Link} to="/contactList" variant="button" color="yellow" ><strong>View Contact List</strong></Typography>
        </nav>
    </div>
  )
}

export default Navbar