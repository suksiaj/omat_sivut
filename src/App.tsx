import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Home  from './routes/home';
import  Cyber  from './routes/cyber';
import  Security  from './routes/security';
import  Games  from './routes/games';
import Software from './routes/sofware';
import Bio from './routes/bio';
import { AppBar, Button, Container, Grid, Link, Menu, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menubar from './components/menubar';


const App: React.FC = (): React.ReactElement => {

  return (
    
    <>
    <Menubar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cyber' element={<Cyber />} />
      <Route path='/security' element={<Security />} />
      <Route path='/games' element={<Games />} />
      <Route path='/software' element={<Software />} />  
      <Route path='/bio' element={<Bio />} />
    </Routes>
    </>
  );
}

export default App;
