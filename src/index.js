import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Provider from './Provider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biomes from './pages/Biomes';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  @import url('https://fonts.googleapis.com/css?family=Comfortaa');

  html {
    height: 100%;
  }

  body {
    font-family: 'Raleway';
    color: #3C3C3B;
    height: 100%;
    a {
      font-weight: bold;
      color: #3C3C3B;
    }
    h1 {
      font-family: 'Comfortaa';
      font-size: 32px;
      font-weight: bold;
    }
  }
`;

const AppRouter = () => {
  return (
    <Router>
      <Provider>
        <GlobalStyles />
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/biomes" component={Biomes} />
      </Provider>
    </Router>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));
