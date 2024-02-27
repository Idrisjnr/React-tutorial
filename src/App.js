import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageWrapper from './components/PageWrapper';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

class App extends Component {
  render(){
    return (
      <Router>
        <PageWrapper>
          <Home/>
          <About/>
          <Contact/>
          
          <Routes>
            <Route
              exact={true}
              path= "/"
              component={<Home/>}
            />

            <Route
              path="/about"
              component={<About/>} 
            />
            <Route
              path="/contact"
              component={<Contact/>}
            />
          </Routes>

        </PageWrapper>
      </Router>
    );
  }
}

export default App;