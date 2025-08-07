import React from 'react';
import { AppBar, Container, Drawer, Link, Toolbar, Typography, Divider, IconButton, Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
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
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';

const Menubar : React.FC = (): React.ReactElement => {

  const [open, setOpen] = React.useState(false);
  const [nestedOpen, setNestedOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  }

  const handleNested = () => {
    setNestedOpen(!nestedOpen);
  }

  const DrawerList = (
    <Box sx={{ width: 250, height: '100%', backgroundColor: '#282c34', color: 'white' }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "10px", marginRight: "25px" }}>
        <IconButton
          onClick={handleDrawer}
          sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/" onClick={handleDrawer}> 
            <ListItemIcon sx={{ color: 'white' }}>
              {<HomeIcon />}
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleNested }>
            <ListItemIcon sx={{ color: 'white' }}>
              {<CodeIcon />}
            </ListItemIcon>
            <ListItemText primary='IT' />
            {nestedOpen
              ? <ExpandLess />
              : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to="/software" onClick={() => {
              handleNested();
              handleDrawer();
            }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Software" />
            </ListItemButton>
          </List>
        </Collapse>

        <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to='/cyber' onClick={() => {
              handleNested();
              handleDrawer();
            }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <TerminalIcon />
              </ListItemIcon>
              <ListItemText primary="Cybersecurity" />
            </ListItemButton>
          </List>
        </Collapse>

        <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={RouterLink} to='/games' onClick={() => {
              handleNested();
              handleDrawer();
            }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary="Games" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to='/security' onClick={handleDrawer}>
            <ListItemIcon sx={{ color: 'white' }}>
              {<SecurityIcon />}
            </ListItemIcon>
            <ListItemText primary='Safety&Security' />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to='/bio' onClick={handleDrawer}>
            <ListItemIcon sx={{ color: 'white' }}>
              {<InfoIcon />}
            </ListItemIcon>
            <ListItemText primary='Bio' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to='/contact' onClick={handleDrawer}>
            <ListItemIcon sx={{ color: 'white' }}>
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
      <AppBar position='static' color='transparent'>
        <Container>
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'inline' }) }}
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
              <Link component={RouterLink} to= '/' variant='inherit' color='inherit' underline='none'>
              Jesse Suksia
              </Link>
              
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={open} onClose={handleDrawer} >
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default Menubar;

