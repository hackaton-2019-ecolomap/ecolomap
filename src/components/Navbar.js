import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3rem;
`;

const StyledHelp = styled.a`
  font-family: 'Comfortaa';
  font-size: 1.5rem;
  margin: 0 1rem;
`;

const Navbar = () => (
  <StyledHeader>
    <StyledHelp>?</StyledHelp>
  </StyledHeader>
);

export default Navbar;
