import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Cyber from './routes/Cyber/Cyber';
import Security from './routes/Security/Security';
import Games from './routes/Games/Games';
import Software from './routes/Software/Software';
import Bio from './routes/Bio/Bio';
import Contact from './routes/Contact/Contact';
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
