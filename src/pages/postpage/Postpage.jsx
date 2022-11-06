import { Box, Alert, AlertTitle, Typography, Grid,} from '@mui/material'
import React, { useState } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview'
import { useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { useGetIpfsPostQuery } from '../../store/ipfsApi'

const Postpage = () => {
    const {postCID} = useParams()
    
    const {data: post, isLoading, isError, error} = useGetIpfsPostQuery(postCID)

    if(isLoading) return <Loader />
    if(isError && error) {
        return (
        <Box p={5}>
            <Alert 
                severity='error'
                sx={{
                    fontSize: '22px', 
                    justifyContent: 'center',
                    border: '1px solid darkred',
                    borderRadius: '20px'
                }}>
                <strong>Error!  </strong>
                Invalid post CID.
            </Alert>
        </Box>
    )}

  return (
    <Box p={5} className='bordered'>
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant='h4'>{post.post_title}</Typography>
                <Typography sx={{fontSize: '14px', letterSpacing: '1px'}} variant='p'>{new Date(post.data_created).toLocaleString()}</Typography>
                <MarkdownPreview style={{marginTop: '20px', backgroundColor: 'inherit'}} source={post.post_body} warpperElement={{"data-color-mode": "light"}} />
            </Grid>
            <Grid display='flex' flexDirection='column' item xs={3} sx={{borderLeft: '1px solid grey'}}>
                <Typography variant='subtitle'>
                    Author: {post.profile_nickname}
                </Typography>
                <Typography variant='p'>
                    Author's recommendations:
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Postpage