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


const App: React.FC = (): React.ReactElement => {
  return (
    <>
    <div className="App-top">
        <AppBar position='static' color='transparent'>
          <Container>
            <Toolbar disableGutters>
              <MenuIcon />
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jesse Suksia
          </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

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
