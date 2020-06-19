import React  from 'react';
import Navbar from './Components/Navbar.jsx';
import './app.scss';
import { RecoilRoot } from 'recoil';
import { MyApp } from './Myframe/components.js';
import SideNav from './Components/SideNav.jsx';
import { Home , About , Gallery , Contact } from './Pages/pages'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'

function App() {
  return (
    <Router>      
    <MyApp >
      <RecoilRoot>
        <Navbar/>
        <SideNav shadow />
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/gallery' component={ Gallery }/>
            <Route path='/contact' component={ Contact } />
        </Switch>
      </RecoilRoot>
      </MyApp>      
    </Router>
   );
}

export default App;
