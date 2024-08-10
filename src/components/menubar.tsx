import React from 'react';
import { AppBar, Button, Container, Drawer, Grid, Link, Menu, Toolbar, Typography, Divider, IconButton, Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import '../App.css';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import TerminalIcon from '@mui/icons-material/Terminal';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';

const Menubar: React.FC = (): React.ReactElement => {

  const [open, setOpen] = React.useState(false);
  const [nestedOpen, setNestedOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNestedOpen = () => {
    setNestedOpen(true);
  }

  const handleNestedClose = () => {
    setNestedOpen(false);
  }


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>

        <ListItem disablePadding>
          <ListItemButton href='/' onClick={() => handleDrawerClose()}>
            <ListItemIcon>
              {<HomeIcon />}
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            nestedOpen 
            ? handleNestedClose() 
            : handleNestedOpen();
          }}>
            <ListItemIcon>
              {<CodeIcon />}
            </ListItemIcon>
            <ListItemText primary='Software' />
            {nestedOpen
              ? <ExpandLess />
              : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => {
              handleNestedClose();
              handleDrawerClose();
            }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>


        <ListItem disablePadding>
          <ListItemButton href='/cyber' onClick={() => handleDrawerClose()}>
            <ListItemIcon>
              {<TerminalIcon />}
            </ListItemIcon>
            <ListItemText primary='Cyber' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='/games' onClick={() => handleDrawerClose()}>
            <ListItemIcon>
              {<SportsEsportsIcon />}
            </ListItemIcon>
            <ListItemText primary='Games' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='/security' onClick={() => handleDrawerClose()}>
            <ListItemIcon>
              {<SecurityIcon />}
            </ListItemIcon>
            <ListItemText primary='Safety&Security' />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>

        <ListItem disablePadding>
          <ListItemButton href='/bio' onClick={() => handleDrawerClose()}>
            <ListItemIcon>
              {<InfoIcon />}
            </ListItemIcon>
            <ListItemText primary='Bio' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href='/contact' onClick={() => handleDrawerClose()}>
            <ListItemIcon>
              {<MailIcon />}
            </ListItemIcon>
            <ListItemText primary='Contact me' />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  return (
    <div className="App-top">
      <AppBar position='static' color='success'>
        <Container>
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
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
      <Drawer open={open} onClose={handleDrawerClose}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default Menubar;

