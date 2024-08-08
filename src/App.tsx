import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';

const App : React.FC = () : React.ReactElement => {
  return (
    <div className="App">

      <div className="App-header">
        <div className="App-title">
        <Typography variant='h1'>Jesse Suksia</Typography>
        <Typography variant='h2'>Data Processing Student & Security Professional</Typography>
        <Typography variant='h5'>Software | Cybersecurity | Gaming | Safety & Security</Typography>
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
