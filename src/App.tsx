import React from 'react';
import './App.css';
import { Button, Grid, Link, Typography } from '@mui/material';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">

      <div className="App-header">
        <div className="App-title">
          <Typography variant='h1'>Jesse Suksia</Typography>
          <Typography variant='h3'>Data Processing Student & Security Professional</Typography>
        </div>

        <div className="App-link">
          <Grid
            container
            direction='row'
            alignItems={'flex-end'}
            margin={5}
            justifyContent={'space-around'}>
            <Link href='/home' underline='hover' color='inherit'>
              <Typography variant='h5'>Software</Typography>
            </Link>
            |
            <Link href='/cyber' underline='hover' color='inherit'>
              <Typography variant='h5'>Cybersecurity</Typography>
            </Link>
            |
            <Link href='/games' underline='hover' color='inherit'>
              <Typography variant='h5'>Games</Typography>
            </Link>
            |
            <Link href='/sec' underline='hover' color='inherit'>
              <Typography variant='h5'>Safety & Security</Typography>
            </Link>

          </Grid>

        </div>

      </div>

    </div>
  );
}

export default App;
