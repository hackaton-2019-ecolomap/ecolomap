import React from 'react';
import styled from 'styled-components';
import Cloud from '../static/png/yo.png';

const StyledCloud = styled.div`
  background: url(${Cloud}) repeat-x;
  position: absolute;
  top: -50rem;
  width: 6400px;
  height: 50rem;
  animation: wave 60s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  z-index: 0;
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -5000px;
    }
  }
  pointer-events: none;
`;

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wave = () => (
  <StyledWrapper>
    <StyledCloud />
  </StyledWrapper>
);

export default Wave;
