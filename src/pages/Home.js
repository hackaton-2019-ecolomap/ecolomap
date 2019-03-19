import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Search from '../components/Search';
import Map from '../components/Map';

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0;
`;

const Home = () => (
  <>
    <StyledHero>
      <Logo />
      <Search />
    </StyledHero>
    <Map />
  </>
);

export default Home;
