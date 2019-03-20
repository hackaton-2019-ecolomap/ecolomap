import React from 'react';
import styled from 'styled-components';
import Background from '../static/footer.png';

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const StyledBg = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  pointer-events: none;
`;

export default () => (
  <StyledFooter>
    <div className="content has-text-centered">
      <p>2019 All rights reserved.</p>
    </div>
    <StyledBg src={Background} alt="background footer" />
  </StyledFooter>
);
