import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import Background from '../static/png/footer.png';

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const StyledBg = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  pointer-events: none;
`;

const StyledSpan = styled.span`
  margin: ${props => (props.isMobile ? '0 0.5rem' : '0 2rem')};
`;

const StyledMentions = styled(Link)`
  font-weight: normal;
`;

export default () => (
  <StyledFooter>
    <div className="content has-text-centered">
      <StyledSpan isMobile={isMobile}>2019 Tous droits réservés.</StyledSpan>
      <StyledSpan isMobile={isMobile}>
        <StyledMentions to="/mentions">Mentions légales.</StyledMentions>
      </StyledSpan>
    </div>
    <StyledBg src={Background} alt="background footer" />
  </StyledFooter>
);
