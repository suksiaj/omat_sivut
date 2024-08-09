import React from 'react';
import { AppBar, Button, Container, Grid, Link, Menu, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css';

const Menubar: React.FC = (): React.ReactElement => {
    return(
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
    )
}

export default Menubar;

