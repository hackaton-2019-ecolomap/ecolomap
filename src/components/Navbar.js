import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Navbar = () => (
  <StyledHeader>
    <span>Ecolomap</span>
  </StyledHeader>
);

export default Navbar;
