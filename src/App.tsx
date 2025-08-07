import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Home  from './routes/home';
import  Cyber  from './routes/cyber';
import  Security  from './routes/security';
import  Games  from './routes/games';
import Software from './routes/sofware';
import Bio from './routes/bio';
import Contact from './routes/contact';
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
