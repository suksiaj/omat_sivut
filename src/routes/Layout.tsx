import React from 'react';
import Menubar from '../components/Menubar/Menubar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <>
    <Menubar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;