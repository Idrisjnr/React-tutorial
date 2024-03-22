import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageWrapper from './components/PageWrapper';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Team from './components/Common/Team';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';

class App extends Component {
  render(){
    return (
      <Router>
        <PageWrapper>
          
          <Routes>
            <Route
              exact={true}
              path= "/"
              element={<Home/>}
            />
            <Route
              path="/services"
              element={<Services/>}
            />
            <Route
              path="/portfolio"
              element={<Portfolio/>}
            />
            <Route
              path="/about"
              element={<About/>} 
            />
            <Route
              path="/team"
              element={<Team/>}
            />
          
            <Route
              path="/contact"
              element={<Contact/>}
            />
          </Routes>
          <About/>
          <Contact/>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;