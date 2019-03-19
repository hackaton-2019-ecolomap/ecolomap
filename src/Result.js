import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
`;

const Result = () => (
  <>
    <StyledHero>
      <Search />
    </StyledHero>
  </>
);

export default Result;
