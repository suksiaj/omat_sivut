import React from 'react';
import '../App.css';
import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = (): React.ReactElement => {


    return (

        <Box className='App-footer' sx={{padding: '5px'}}>

            <IconButton href='https://www.github.com/djesu004xamk' color='secondary'>
                <GitHubIcon />
            </IconButton>

            <IconButton href='https://www.linkedin.com/in/jesse-suksia' color='primary'>
                <LinkedInIcon />
            </IconButton>

            <Typography variant='body2'>&copy; Jesse Suksia 2025</Typography>

        </Box>

    )
}

export default Footer;