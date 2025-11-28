import '../../App.css';
import './Home.css';
import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { linkContainerStyle } from '../../styles/styles';

const Home: React.FC = (): React.ReactElement => {
    return(
        <div >

      <div className="App-header">
        <div className="App-title">
          <Typography variant='h1'>Jesse Suksia</Typography>
          <Typography variant='h3'>Data Processing Student & Security Professional</Typography>
        </div>

        <div className="App-link">
          <Grid
            container
            direction='row'
            alignItems={'space-between'}
            margin={5}
            justifyContent={'space-between'}
            sx={linkContainerStyle}>
            <Link component={RouterLink} to='/software' underline='hover' color='primary.main'>
              <Typography variant='h5'>Software</Typography>
            </Link>
            <Typography variant='h5' sx={{ color: 'primary.light' }}>|</Typography>
            <Link component={RouterLink} to='/cyber' underline='hover' color='primary.main'>
              <Typography variant='h5'>Cybersecurity</Typography>
            </Link>
            <Typography variant='h5' sx={{ color: 'primary.light' }}>|</Typography>
            <Link component={RouterLink} to='/games' underline='hover' color='primary.main'>
              <Typography variant='h5'>Games</Typography>
            </Link>
            <Typography variant='h5' sx={{ color: 'primary.light' }}>|</Typography>
            <Link component={RouterLink} to='/security' underline='hover' color='primary.main'>
              <Typography variant='h5'>Safety & Security</Typography>
            </Link>
          </Grid>
        </div>

      </div>

    </div>
    )
}

export default Home;