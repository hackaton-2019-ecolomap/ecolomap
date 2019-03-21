/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import LogoMin from '../static/svg/logo_min.svg';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3rem;
  box-shadow: 0 5px 3px 0px #eaeaea;
  background-color: white;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  span {
    font-size: 0.8rem;
  }
`;

const StyledLogin = styled(StyledLink)`
  margin-right: ${props => (props.isMobile ? '1rem' : '7rem')}
  padding: 5px;
  border-radius: 8px;
  background-color: #EDEDED;
`;

const StyledLogoMin = styled(Link)`
  margin-left: ${props => (props.isMobile ? '1rem' : '7rem')}
  margin-right: auto;
  width: 6rem; 
`;

const Navbar = () => (
  <StyledNav>
    <StyledLogoMin to="/" isMobile={isMobile}>
      <LogoMin />
    </StyledLogoMin>
    <StyledLink to="/project">
      <span>Projet</span>
    </StyledLink>
    <StyledLink to="/signup">
      <span>S'inscrire</span>
    </StyledLink>
    <StyledLogin to="/login" isMobile={isMobile}>
      <span>Connexion</span>
    </StyledLogin>
  </StyledNav>
);

export default Navbar;
