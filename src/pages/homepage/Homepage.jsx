import React from 'react'
import { Box, Typography} from "@mui/material";

const Homepage = () => {
  return (
    <Box className='bordered' display='flex' flexDirection='column' p={10}>
        <Box>
            <Typography variant='h7' sx={{letterSpacing: '2px', textTransform: "uppercase"}}>
                Decentralized Thoughts
            </Typography>
            <Typography variant='p' fontSize='20px' paragraph={true} mt={3}>
                Designed for decentralized sharing of your thoughts, ideas and more in posts. Thanks to this, a person is free to share what he wants.
                <br />
                Create a post then save or remember CID for sharing!
            </Typography>
            <Typography variant='p' fontSize='20px' paragraph={true} >
                Markdown is used to write and display a post. <br/>
                <a className='tip' href="https://www.markdownguide.org/basic-syntax/" target='_blank'>
                    Tips for getting familiar with Markdown syntax
                </a>
                .
            </Typography>
            <Typography Typography variant='p' fontSize='20px' paragraph={true}>
                Posts are first stored in Web3.storage IPFS clusters. <br />
                <span>Therefore, you must have your own cluster  </span>
                <a className='tip' href="https://web3.storage/" target='_blank'>
                    Web3.storage
                </a>
                .
            </Typography>
        </Box>
    </Box>
  )
}

export default Homepage