import React from 'react';
import Navbar from './Components/Navbar.jsx';
import { MFGrid } from './Myframe/components'
import './app.scss';
import { RecoilRoot } from 'recoil';
import { MyApp } from './Myframe/components.js';
import SideNav from './Components/SideNav.jsx';

function App() {
  return (
    <MyApp>
      <RecoilRoot>
        <Navbar/>
        <MFGrid></MFGrid>
        <SideNav shadow />
      </RecoilRoot>
    </MyApp>
   );
}

export default App;
