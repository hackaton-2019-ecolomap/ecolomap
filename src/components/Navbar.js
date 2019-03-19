import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
`;

const StyledHelp = styled.a`
  font-family: 'Raleway';
  margin: 0 1rem;
`;

const Navbar = () => (
  <StyledHeader>
    <StyledHelp>Aide</StyledHelp>
  </StyledHeader>
);

export default Navbar;
