import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Link, Typography } from '@mui/material';

const App : React.FC = () : React.ReactElement => {
  return (
    <div className="App">

      <div className="App-header">
        <div className="App-title">
        <Typography variant='h1'>Jesse Suksia</Typography>
        <Typography variant='h2'>Data Processing Student & Security Professional</Typography>
        </div>

        <div className="App-link">
          <Grid
            container
            direction='row'
            alignItems={'flex-end'}
            justifyContent={'space-around'}>
              <Link href='#' underline='hover' color='inherit'>
              <Typography variant='h6'>Software</Typography>
              </Link>
               |
               <Link href='#' underline='hover' color='inherit'>
              <Typography variant='h6'>Cybersecurity</Typography>
              </Link>
               |
               <Link href='#' underline='hover' color='inherit'>
              <Typography variant='h6'>Games</Typography>
              </Link>
               |
               <Link href='#' underline='hover' color='inherit'>
              <Typography variant='h6'>Safety & Security</Typography>
              </Link>
               
            </Grid>
            
        </div>
        
      </div>
      
      <div className="App-body">
        <Typography variant='h3'>About Me</Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Amet beatae porro quas repellat laboriosam tempora voluptates optio magni minima delectus dolores, blanditiis, sed, 
          assumenda quae quis veritatis! Pariatur, obcaecati at!
        </Typography>
      </div>
    </div>
  );
}

export default App;
