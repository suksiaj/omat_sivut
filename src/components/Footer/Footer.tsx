import React from 'react';
import './Footer.css';
import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = (): React.ReactElement => {

    const year = new Date().getFullYear();

    return (

        <Box className='App-footer'>

            <IconButton href='https://www.github.com/djesu004xamk' color='primary'>
                <GitHubIcon />
            </IconButton>

            <IconButton href='https://www.linkedin.com/in/jesse-suksia' color='secondary'>
                <LinkedInIcon />
            </IconButton>

            <Typography variant='body2' color='text.secondary'>&copy; Jesse Suksia {year}</Typography>

        </Box>

    )
}

export default Footer;