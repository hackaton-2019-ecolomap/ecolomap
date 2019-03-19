import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  padding: 3rem 0;
`;

const StyledTitle = styled.h1`
  font-family: 'Comfortaa';
`;

export default () => (
  <StyledHero>
    <StyledTitle>Ecolomap</StyledTitle>
  </StyledHero>
);
