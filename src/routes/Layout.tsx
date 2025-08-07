import React from 'react';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <>
    <Menubar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;