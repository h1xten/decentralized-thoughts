import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Box, Typography, Button} from "@mui/material";
import { AddCircleOutline, Search } from '@mui/icons-material';

const Topbar = () => {
    const navigate = useNavigate()
  return (
    <Box display="flex" justifyContent="space-between" p={3}>
      {/* Logo */}
      <Box
        className='logo-box'
        display="flex"
        onClick={()=>navigate('/')}
      >
        <Typography 
            variant='p'
            sx={{textTransform: 'uppercase', letterSpacing: '2px', fontSize: '16px', fontWeight: '600', userSelect: 'none'}}
        >
            Decentralized Thoughts
        </Typography>
      </Box>

      {/* Buttons */}
      <Box display="flex">
        <Button sx={{marginRight: '50px'}} variant='outlined' size='small' endIcon={<AddCircleOutline />} onClick={()=>navigate('create')}>
            Create post
        </Button>
        <Button variant='outlined' size='small' endIcon={<Search />}>
            Search post
        </Button>
      </Box>
    </Box>
  )
}

export default Topbar