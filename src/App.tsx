import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Cyber from './routes/Cyber';
import Security from './routes/Security';
import Games from './routes/Games';
import Software from './routes/Software';
import Bio from './routes/Bio';
import Contact from './routes/Contact';
import Layout from './routes/Layout';


const App: React.FC = (): React.ReactElement => {

  return (
    
    <div className='App'>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cyber" element={<Cyber />} />
        <Route path="security" element={<Security />} />
        <Route path="games" element={<Games />} />
        <Route path="software" element={<Software />} />
        <Route path="bio" element={<Bio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>

    </div>
  );
}

export default App;
