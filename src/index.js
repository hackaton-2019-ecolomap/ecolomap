import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from "styled-components";
import Provider from 'Provider';
import Navbar from 'components/Navbar';
import Logo from 'components/Logo';
import Search from 'components/Search';
import Map from 'components/Map';

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

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0;
`;

const App = () => (
  <Provider>
    <GlobalStyles />
    <Navbar />
    <StyledHero>
      <Logo />
      <Search />
    </StyledHero>
    <Map />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
