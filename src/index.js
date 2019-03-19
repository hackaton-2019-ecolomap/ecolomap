import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Provider from './Provider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Result from './pages/Result';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  @import url('https://fonts.googleapis.com/css?family=Comfortaa');

  body {
    font-family: 'Raleway';
    color: #3C3C3B;
    a {
      color: #3C3C3B;
    }
  }
`;

const AppRouter = () => (
  <Router>
    <Provider>
      <GlobalStyles />
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/result" component={Result} />
    </Provider>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
