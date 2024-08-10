import React from 'react';
import { AppBar, Button, Container, Drawer, Grid, Link, Menu, Toolbar, Typography, Divider, IconButton, Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import '../App.css';

const Menubar: React.FC = (): React.ReactElement => {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  // Valikon koodi tulee muuttaa listamaiseksi
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerClose}>
      <List>
        {['Home', 'Software', 'Cyber', 'Safety&Security', 'Games'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Bio', 'Contact me'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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

