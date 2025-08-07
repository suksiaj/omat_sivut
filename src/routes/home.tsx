import '../App.css';
import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
            sx={{backgroundColor: 'rgba(159, 210, 255, 0.5)', padding: '5px', borderRadius: '15px'}}>
            <Link component={RouterLink} to='/software' underline='hover' color='inherit'>
              <Typography variant='h5'>Software</Typography>
            </Link>
            |
            <Link component={RouterLink} to='/cyber' underline='hover' color='inherit'>
              <Typography variant='h5'>Cybersecurity</Typography>
            </Link>
            |
            <Link component={RouterLink} to='/games' underline='hover' color='inherit'>
              <Typography variant='h5'>Games</Typography>
            </Link>
            |
            <Link component={RouterLink} to='/security' underline='hover' color='inherit'>
              <Typography variant='h5'>Safety & Security</Typography>
            </Link>

          </Grid>

        </div>

      </div>

    </div>
    )
}

export default Home;