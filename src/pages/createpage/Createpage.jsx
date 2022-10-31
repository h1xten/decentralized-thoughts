import React, {useState} from 'react'
import {Box, Button, TextField, Typography, Stepper, Step, StepLabel, StepContent} from '@mui/material';

const Createpage = () => {
    const [activeStep, setActiveStep] = useState(0)

    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')

    const [profileNickname, setProfileNickname] = useState('')
    const [profileDescription, setProfileDescription] = useState('')

    const [storageApiKey, setStorageApiKey] = useState('')

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

  return (
    <Box p={5}>
        <Box>
            <Box mt={3} display='flex' justifyContent='center' alignItems='center'>
                <Typography 
                    variant='p'
                    sx={{textTransform: 'uppercase', letterSpacing: '2px', fontSize: '16px', fontWeight: '600', userSelect: 'none'}}
                >
                    Create Post
                </Typography>
            </Box>
            <Stepper activeStep={activeStep} orientation='vertical'>
                <Step>
                    <StepLabel>Post</StepLabel>
                    <StepContent>
                        <TextField 
                            id="outlined-basic" 
                            label="Title" 
                            required 
                            variant="outlined" 
                            margin='normal'
                            fullWidth
                            value={postTitle}
                            onChange={e => setPostTitle(e.target.value)}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Body"
                            required 
                            multiline
                            fullWidth
                            rows={4}
                            margin='normal'
                            value={postBody}
                            onChange={e => setPostBody(e.target.value)}
                        />
                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Continue
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Profile Settings</StepLabel>
                    <StepContent>
                        <TextField 
                            id="outlined-basic" 
                            label="Nickname"
                            required 
                            variant="outlined" 
                            margin='normal'
                            fullWidth
                            value={profileNickname}
                            onChange={e => setProfileNickname(e.target.value)}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Profile Description"
                            multiline
                            fullWidth
                            rows={2}
                            margin='normal'
                            value={profileDescription}
                            onChange={e => setProfileDescription(e.target.value)}
                        />
                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Continue
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Back
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Decentralized Storage</StepLabel>
                    <StepContent>
                        <TextField 
                            id="outlined-basic" 
                            label="Web3.storage API Key"
                            required 
                            variant="outlined" 
                            margin='normal'
                            fullWidth 
                            value={storageApiKey}
                            onChange={e => setStorageApiKey(e.target.value)}
                        />
                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={() => {}}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Create Post
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Back
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
            </Stepper>
            
        </Box>
    </Box>
  )
}

export default Createpage