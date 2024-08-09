import '../App.css';
import React from 'react';
import { AppBar, Button, Container, Grid, Link, Menu, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Home: React.FC = (): React.ReactElement => {
    return(
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
            alignItems={'space-between'}
            margin={5}
            justifyContent={'space-between'}>
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
    )
}

export default Home;