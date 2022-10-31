import React from 'react'
import { Box, Typography, SvgIcon} from "@mui/material";

const Homepage = () => {
  return (
    <Box display='flex' flexDirection='column' pt={15} pb={15}>
        <Box>
            <Typography variant='h7' sx={{letterSpacing: '2px', textTransform: "uppercase"}}>
                Decentralized Thoughts
            </Typography>
            <Typography variant='p' fontSize='20px' paragraph={true} mt={3}>
                Designed for decentralized sharing of your thoughts, ideas and more in posts. Thanks to this, a person is free to share what he wants.
                <br />
                Create a post then save or remember hash for sharing!
            </Typography>
        </Box>
    </Box>
  )
}

export default Homepage