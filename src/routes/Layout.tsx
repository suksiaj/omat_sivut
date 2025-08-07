import React from 'react';
import Menubar from '../components/menubar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <>
    <Menubar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;